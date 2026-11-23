<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

function toggleMenu(event) {
  menuOpen.value = !menuOpen.value
  event.stopPropagation()
}

function onDocumentClick(event) {
  const nav = document.getElementById('main-nav')
  const btn = document.querySelector('.menu-btn')
  if (nav && btn && !nav.contains(event.target) && !btn.contains(event.target)) {
    closeMenu()
  }
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <nav class="nav">
    <router-link class="nav-logo" to="/" @click="closeMenu">
      <img :src="'img/Logo.png'" alt="logo" />
    </router-link>

    <div class="nav-container">
      <ul class="nav-menu" id="main-nav" :class="{ show: menuOpen }">
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/" @click="closeMenu">首页</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/bookshelf" @click="closeMenu">书架</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/discover" @click="closeMenu">发现</router-link></li>
        <li class="nav-item"><a class="nav-link" href="#">关于</a></li>
      </ul>
    </div>

    <button class="menu-btn" type="button" :aria-expanded="menuOpen" @click="toggleMenu">
      <img :src="'img/菜单.png'" alt="菜单按钮" />
    </button>

    <div class="nav-account">
      <router-link to="/account"><img :src="'img/用户.png'" alt="account" /></router-link>
    </div>
  </nav>
</template>
