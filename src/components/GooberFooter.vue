<script setup>
defineProps([
  "linkTo"
])
</script>

<template>
  <div>
    <p>© Matt</p>
    <p>-</p>
    <a href="/about">About GooberCloud</a>
    <p>-</p>
    <a :href="linkTo">Get source file</a>
  </div>
</template>

<style scoped>
div {
  background: var(--bg);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

div > * {
  margin: 0;
}
</style>