<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const panelOpen = ref(false)
let autoCloseTimer = null

function resetAutoCloseTimer() {
  clearTimeout(autoCloseTimer)
  autoCloseTimer = setTimeout(() => { panelOpen.value = false }, 5000)
}

function togglePanel() {
  panelOpen.value = !panelOpen.value
  if (panelOpen.value) resetAutoCloseTimer()
  else clearTimeout(autoCloseTimer)
}

function closePanel() {
  panelOpen.value = false
  clearTimeout(autoCloseTimer)
}

function onDocumentClick(event) {
  const panel = document.getElementById('readingSettings')
  const toggle = document.getElementById('settingsToggle')
  if (panel && toggle && !panel.contains(event.target) && !toggle.contains(event.target)) closePanel()
}
function onKeydown(event) {
  if (event.key === 'Escape') closePanel()
}

const fonts = [
  { key: 'default', label: '默认', value: 'inherit' },
  { key: 'song', label: '宋体', value: '"SimSun", "宋体", serif' },
  { key: 'hei', label: '黑体', value: '"SimHei", "黑体", sans-serif' },
  { key: 'kai', label: '楷体', value: '"KaiTi", "楷体", serif' }
]
const activeFont = ref('default')
const fontSize = ref('1.0')
const lineHeight = ref('1.8')

const themes = {
  default: { accent: '#E0B284', hover: '#D49A6A', title: '#8B5A2B' },
  blue: { accent: '#6A8CAF', hover: '#4A7093', title: '#3A5A7D' },
  green: { accent: '#7BA05B', hover: '#5B803B', title: '#4B702B' },
  purple: { accent: '#9D75CB', hover: '#7D55AB', title: '#6D459B' }
}
const activeTheme = ref('default')

const backgrounds = {
  white: { body: '#fff', nav: { default: '#EDE7DC', blue: '#E6EDF5', green: '#E8F0E0', purple: '#F0E8F5' }, content: '#444', header: '#666', date: '#999' },
  cream: { body: '#F5F5DC', nav: { default: '#E8E4D8', blue: '#E6EDF0', green: '#E8F0D8', purple: '#F0E8E0' }, content: '#444', header: '#666', date: '#999' },
  night: { body: '#1E1E1E', nav: { default: '#2E2E2E', blue: '#253545', green: '#2A3520', purple: '#352545' }, content: '#E0E0E0', header: '#C0C0C0', date: '#A0A0A0' },
  sepia: { body: '#F4ECD8', nav: { default: '#E8E0C8', blue: '#E0E8F0', green: '#E0F0D8', purple: '#E8E0F0' }, content: '#5A4B38', header: '#6A5B48', date: '#7A6B58' }
}
const activeBg = ref('white')

const fontFamily = computed(() => fonts.find(f => f.key === activeFont.value).value)

const contentStyle = computed(() => ({
  fontFamily: fontFamily.value,
  fontSize: `${fontSize.value}rem`,
  lineHeight: lineHeight.value,
  color: backgrounds[activeBg.value].content
}))
const headerTextStyle = computed(() => ({
  fontSize: `${(parseFloat(fontSize.value) + 0.1).toFixed(1)}rem`,
  lineHeight: lineHeight.value,
  color: backgrounds[activeBg.value].header
}))
const titleStyle = computed(() => ({
  fontSize: `${(parseFloat(fontSize.value) * 2).toFixed(1)}rem`,
  color: themes[activeTheme.value].title
}))
const dateStyle = computed(() => ({ color: backgrounds[activeBg.value].date }))

function applyThemeVars() {
  const theme = themes[activeTheme.value]
  const bg = backgrounds[activeBg.value]
  const root = document.documentElement.style
  root.setProperty('--yl-accent', theme.accent)
  root.setProperty('--yl-accent-hover', theme.hover)
  document.body.style.backgroundColor = bg.body
  const nav = document.querySelector('.nav')
  if (nav) nav.style.backgroundColor = bg.nav[activeTheme.value]
}

watch([activeTheme, activeBg], applyThemeVars)

onMounted(() => {
  document.body.classList.add('yl-reading')
  applyThemeVars()
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  document.body.classList.remove('yl-reading')
  document.body.style.backgroundColor = ''
  document.documentElement.style.removeProperty('--yl-accent')
  document.documentElement.style.removeProperty('--yl-accent-hover')
  const nav = document.querySelector('.nav')
  if (nav) nav.style.backgroundColor = ''
  clearTimeout(autoCloseTimer)
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div>
    <SiteHeader />

    <main class="container">
      <article>
        <div class="article-header">
          <h1 class="article-title" :style="titleStyle">为什么鸟儿在黎明歌唱？</h1>
          <div class="article-date" :style="dateStyle">2026-01-22 14:16</div>
          <p :style="headerTextStyle">清晨悦耳的鸟鸣让人心旷神怡，但是一天中的其他时间却很少能听到鸟叫。为什么鸟儿都喜欢在清晨歌唱？来本文中寻找答案吧。</p>
        </div>
        <img :src="'img/鸟儿.png'" alt="黎明歌唱的鸟儿" class="article-image" />
        <div class="article-content" :style="contentStyle">
          <p>早上起得够早的话，在你所住的地方也许能听到一阵悦耳的鸟鸣。在清晨歌唱是鸟的本能行为，但是鸟鸣为什么都在清晨呢？</p>
          <p>林地信托机构称，鸟儿在清晨鸣叫最早从凌晨4点开始，可持续数个小时。鸟鸣叫是为了吸引配偶，也是为了警告其他鸟不要入侵自己的领地。关于鸟类为什么选择在凌晨传递这些重要信息，有一个理论是，凌晨能见度低，鸟类难以进行觅食等其他活动，既然无事可做，那么鸟儿就转而选择鸣叫。</p>
          <p>另一种理论认为，鸟类利用晨鸣来展示自己的力量。通过热情地歌唱，它们让其他鸟儿知道自己已经安然度过黑夜——要知道自然界的动物过着朝不保夕的日子，不一定能看见明天的太阳——并能够成为出色的伴侣。</p>
          <p>清晨的空气更凉爽、更干燥，就像一个效果很好的录音棚，鸟儿在此时歌唱能传递出清晰的音质。因为鸟儿的声音各有不同，这种清晰度可以让听得见的鸟儿更容易识别出它们的声音。</p>
          <p>过去有一个流行的理论认为，鸟儿最爱在清晨鸣叫是因为在气流稳定的时候声音能传播得更远。但是西安大略大学的研究人员在2003年否定了这一理论。研究人员在黎明和中午分别播放了麻雀的录音。然而麻雀声音并没有传播得更远，只不过黎明时分麻雀的叫声更连贯。</p>
          <p>因为鸟儿只能用有限的精力来鸣叫，它们自然会选择在最可能被听到的时候歌唱。对一只鸟儿来说，清晨鸣叫相当于在最佳音效环境中表演。</p>
          <p>作者：丹妮<br />审校：董静、齐磊</p>
        </div>
      </article>
    </main>

    <div class="reading-settings" id="readingSettings" :class="{ show: panelOpen }" @mousemove="resetAutoCloseTimer">
      <div class="settings-header">
        <span class="settings-title">阅读设置</span>
        <button class="settings-close" id="settingsClose" @click="closePanel">×</button>
      </div>
      <div class="settings-body">
        <div class="setting-group">
          <span class="setting-label">字体</span>
          <div class="setting-options">
            <button v-for="font in fonts" :key="font.key" class="setting-btn font-btn"
                    :class="{ active: activeFont === font.key }" @click="activeFont = font.key; resetAutoCloseTimer()">{{ font.label }}</button>
          </div>
        </div>

        <div class="setting-group">
          <span class="setting-label">字号</span>
          <input v-model="fontSize" type="range" min="0.8" max="1.6" step="0.1" class="range-control" id="fontSizeRange" @input="resetAutoCloseTimer" />
          <div style="display: flex; justify-content: space-between; font-size: 12px; color: #999; margin-top: 4px;">
            <span>小</span><span>中</span><span>大</span>
          </div>
        </div>

        <div class="setting-group">
          <span class="setting-label">行间距</span>
          <input v-model="lineHeight" type="range" min="1.4" max="2.4" step="0.1" class="range-control" id="lineHeightRange" @input="resetAutoCloseTimer" />
          <div style="display: flex; justify-content: space-between; font-size: 12px; color: #999; margin-top: 4px;">
            <span>紧凑</span><span>适中</span><span>宽松</span>
          </div>
        </div>

        <div class="setting-group">
          <span class="setting-label">主题色</span>
          <div class="setting-options">
            <button v-for="(theme, key) in themes" :key="key" class="setting-btn theme-btn"
                    :class="{ active: activeTheme === key }" @click="activeTheme = key; resetAutoCloseTimer()">{{ { default: '默认', blue: '蓝色', green: '绿色', purple: '紫色' }[key] }}</button>
          </div>
        </div>

        <div class="setting-group">
          <span class="setting-label">背景</span>
          <div class="setting-options">
            <button v-for="(bg, key) in backgrounds" :key="key" class="setting-btn bg-btn"
                    :class="{ active: activeBg === key }" @click="activeBg = key; resetAutoCloseTimer()">{{ { white: '白色', cream: '奶油色', night: '夜间模式', sepia: '护眼模式' }[key] }}</button>
          </div>
        </div>
      </div>
    </div>

    <button class="settings-toggle" id="settingsToggle" @click.stop="togglePanel">
      <img :src="'img/太阳.png'" alt="阅读设置" class="toggle-icon" />
    </button>

    <SiteFooter />
  </div>
</template>

<style>
body.yl-reading .nav-link { background-color: var(--yl-accent) !important; }
body.yl-reading .nav-link:hover { background-color: var(--yl-accent-hover) !important; }
body.yl-reading .header-line-sec-foot { background-color: var(--yl-accent) !important; }
body.yl-reading .settings-toggle { background-color: var(--yl-accent) !important; }
body.yl-reading .settings-toggle:hover { background-color: var(--yl-accent-hover) !important; }
</style>
