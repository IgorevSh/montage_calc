<template>
  <v-data-table
    :headers="headers"
    :items="body"
    class="elevation-1"
    hide-default-footer
    disable-pagination
  ></v-data-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import formatChart from "@/modules/formatChart";

export default defineComponent({
  name: "LineChart",
  props: {
    body: Array,
    headers: Array,
  },
  methods: {
    formatChart,
  },
});
</script>
