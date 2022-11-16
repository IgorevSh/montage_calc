<template>
  <div>
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="makeTable()"
        >
          Открыть График
        </v-btn>
      </template>
      <chart-modal @closeModal="dialog = false">
        <full-table :body="body" :headers="headers"></full-table>
      </chart-modal>
    </v-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import chartModal from "@/components/chartModal";
import fullTable from "@/components/fullTable";
import formatChart from "@/modules/formatChart";
export default defineComponent({
  name: "modalButton",
  components: {
    fullTable,
    chartModal,
  },
  data() {
    return {
      dialog: false,
      body: [],
      headers: [],
    };
  },
  props: {
    years: Number,
    percent: Number,
    sum: Number,
    month: Number,
  },
  methods: {
    formatChart,
    makeTable() {
      let { resultTable, headers } = this.formatChart(
        this.years || 0,
        this.percent || 0,
        this.sum || 0,
        this.month || 0
      );
      this.body = resultTable;
      this.headers = headers;
    },
  },
});
</script>
