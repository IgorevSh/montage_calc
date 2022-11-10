<template>
  <v-card>
    <v-card-actions>
      <v-spacer />
      <v-btn color="green darken-1" text @click="closeModal"> X </v-btn>
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
