<script setup>
import {marked} from "marked";

defineProps([
  "content"
])
</script>

<template>

  <div v-html="marked.parse(content)"></div>

</template>

<style scoped>

div {
  width: 30%;
  margin: 0 auto;
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}
</style>