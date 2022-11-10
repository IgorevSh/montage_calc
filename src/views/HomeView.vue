<template>
  <v-app>
    <v-container class="test">
      <v-col cols="12" sm="6">
        <h1 style="text-align: left; margin: 0 25px">Параметры</h1>
        <v-form>
          <v-container>
            <v-col>
              <v-row align="center">
                <v-col>
                  <v-subheader> Цель кредита </v-subheader>
                </v-col>
                <v-col>
                  <v-select
                    v-model="typeCredit"
                    :items="states"
                    menu-props="auto"
                    label="Выберите тип"
                    hide-details
                    class="select_option"
                    single-line
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <v-switch
                v-model="switchForm"
                :label="`Есть зарплатная карта?`"
              ></v-switch>
            </v-col>
            <div v-for="(input, i) in Object.values(inputs)">
              <v-col>
                <v-slider
                  v-model="valueLinks[i].val"
                  :max="input.z"
                  :min="input.x"
                  :step="input.y || 1"
                  class="calc_label"
                >
                  <template v-slot:append>
                    <v-text-field
                      :label="inputLabels[i]"
                      v-model="valueLinks[i].val"
                      :suffix="i == 2 ? yearGram : 'руб'"
                      :step="input.y || 1"
                      type="number"
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-col>
            </div>
          </v-container>
        </v-form>
      </v-col>
      <v-col cols="12" sm="6" class="calc_results_wrapper">
        <v-col class="calc_results">
          <v-row class="col">
            <v-row>
              <v-input label="Процентная Ставка" class="calc_input">
                <h1>{{ totalPercentage }}%</h1></v-input
              >
            </v-row>
            <v-row>
              <v-input label="Оплата в месяц" class="calc_input">
                <h1>
                  {{
                    formatPrice(
                      String(
                        formula(
                          fullVal.val,
                          firstVal.val,
                          totalPercentage,
                          payday.val
                        )
                      )
                    )
                  }}
                  ₽
                </h1>
              </v-input>
            </v-row>
          </v-row>
          <v-row>
            <v-col>
              <v-input label="Кредит" class="calc_input">
                <h1>{{ formatPrice(String(fullVal.val - firstVal.val)) }} ₽</h1>
              </v-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-input label="Срок кредита" class="calc_input">
                <h1>{{ payday.val }} {{ yearGram }}</h1>
              </v-input>
            </v-col>
          </v-row>
          <v-row class="calc_button"
            ><modal-button
              :years="payday.val"
              :percent="totalPercentage"
              :sum="fullVal.val - firstVal.val"
              :month="
                formula(fullVal.val, firstVal.val, totalPercentage, payday.val)
              "
          /></v-row>
        </v-col>
      </v-col>
    </v-container>
  </v-app>
</template>

<script lang="js">
import { defineComponent } from "vue";
import ModalButton from "@/components/modalButton.vue";
import formatPrice from "@/modules/formatPrice";
import formula from "@/modules/formula";
import ValuesModel from "@/models/ValuesModel";
export default defineComponent({
  name: "HomeViews",
  components: { ModalButton },
  data() {
    return {
      switchForm: false,
      switchVal:0,
      fullVal: {val:0},
      firstVal: {val:0},
      payday: {val:0},
      percentage: 11,
      typeCredit: "",
      statsData: {},
      inputs:{},
      currentSettings:{},
      inputLabels:['Стоимость жилья','Первоначальный взнос','Срок кредита'],
      states: ["Покупа недвижимости", "Покупа автомобиля", "Госпрограмма"],
    };
  },
  async created() {
    await this.setDefault();
  },
  methods: {
    test(){
      console.log('test')
    },
    formatPrice,
    formula,
    async setDefault(){
      let data = await ValuesModel.getValues();
      this.statsData = data.data;
      this.states = Object.keys(data.data);
      this.typeCredit = this.states[0];
      this.currentSettings=this.statsData[this.typeCredit]
      this.percentage=this.currentSettings.percentDefault
      this.switchVal=this.currentSettings.switch
      this.inputs=this.currentSettings.inputs
    }
  },
  computed: {
    yearGram() {
      if (this.payday.val == 1) {
        return "год";
      } else if (this.payday.val  > 1 && this.payday.val  < 5) {
        return "года";
      } else {
        return "лет";
      }
    },
    valueLinks(){return[this.fullVal,this.firstVal,this.payday]},
    totalPercentage(){
      return this.percentage + (this.switchForm ? -this.switchVal : this.switchVal)
    }
  },
  watch: {
    typeCredit() {
      this.currentSettings=this.statsData[this.typeCredit]
      this.inputs=this.currentSettings.inputs
      this.percentage=this.currentSettings.percentDefault
      this.switchVal=this.currentSettings.switch
      this.firstVal.val=this.inputs.firstVal.x
      this.fullVal.val=this.inputs.price.x
    },
    fullVal:{
      handler(val){
      this.inputs.firstVal.z=val.val
      },
      deep: true
    }
  },
});
</script>
<style>
div.test {
  display: flex;
}
div.select_option {
  padding: 0;
}
.calc_results_wrapper {
}
.calc_results {
  padding: 10px;
  border-radius: 10px;
  border: 5px solid #1976d2;
  position: sticky;
  top: 0;
  bottom: 0;
}
div.calc_results .row {
  white-space: nowrap;
  gap: 10px;
  margin: 0;
}
div.calc_label {
  flex-direction: column-reverse;
}
div.calc_label .v-input__append-outer {
  width: 95%;
}
div.calc_button {
  justify-content: center;
}
div.calc_input .v-input__slot {
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: flex-start;
  width: max-content;
}
div.calc_input h1 {
  font-size: 46px;
}
div.v-subheader {
  padding: 0;
}
</style>
