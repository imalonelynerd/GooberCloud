<script setup>
import MarkdownViewer from "../components/MarkdownViewer.vue";
import {fetchCSS, fetchText} from "@/assets/js/fetchText.js"
import {ref} from "vue";

const content = ref("");
let fileres = await fetchText("error");
let cssres = await fetchCSS("error");
if (!fileres) {
  content.value = "# Recursion !?";
} else {
  content.value = fileres;
}
if (cssres !== false) {
  let style = document.createElement('style');
  style.textContent = cssres;
  document.head.appendChild(style);
}

</script>

<template>
  <MarkdownViewer :content="content"/>
</template>

<style scoped>
</style>