<script setup>
import GooberFooter from "@/components/GooberFooter.vue";
import fetchLinks from "@/assets/json/fetchLinks.json"
</script>

<template>
  <Suspense>
    <RouterView/>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
  <GooberFooter :link-to="`${fetchLinks.files.url}${$route.params.page}.md`"/>
</template>

<style scoped>
</style>
