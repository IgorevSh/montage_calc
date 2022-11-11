<template>
  <v-card>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="closeModal" text color="primary" class="ma-2" elevation="0"
        >Закрыть</v-btn
      >
    </v-card-actions>
    <v-card-text><slot /></v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "chartModal",
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
});
</script>

<style scoped></style>
