<script setup>
import MarkdownViewer from "../components/MarkdownViewer.vue";
import {useRoute, useRouter} from "vue-router";
import {fetchCSS, fetchText} from "@/assets/js/fetchText.js"
import {ref} from "vue";

const content = ref("");
const router = useRouter();
const route = useRoute();

let fileres = await fetchText(route.params.page);
let cssres = await fetchCSS(route.params.page);
if (!fileres) router.push("/error"); else content.value = fileres;
if (cssres !== false) {
  let style = document.createElement('style');
  style.textContent = cssres;
  document.head.appendChild(style);
}

document.getElementsByTagName('title')[0].text = `[${route.params.page}] - GooberCloud`;

</script>

<template>
  <MarkdownViewer :content="content"/>
</template>

<style scoped>
</style>