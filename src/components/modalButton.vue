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
        <line-chart :body="body" :headers="headers"></line-chart>
      </chart-modal>
    </v-dialog>
  </div>
</template>

<script>
import chartModal from "@/components/chartModal";
import lineChart from "@/components/lineChart";
import formatChart from "@/modules/formatChart";
export default {
  name: "modalButton",
  components: {
    lineChart,
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
        this.years,
        this.percent,
        this.sum,
        this.month
      );
      this.body = resultTable;
      this.headers = headers;
    },
  },
};
</script>
