<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 按当前页面meta动态切换样式表，保持与原静态站点一致的视觉
function applyPageStyle(cssFile) {
  let link = document.getElementById('page-style')
  if (!cssFile) {
    if (link) link.remove()
    return
  }
  if (!link) {
    link = document.createElement('link')
    link.id = 'page-style'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }
  link.href = `${import.meta.env.BASE_URL}${cssFile}`
}

watch(() => route.meta.css, applyPageStyle, { immediate: true })
</script>

<template>
  <router-view />
</template>
