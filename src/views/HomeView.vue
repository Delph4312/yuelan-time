<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const slides = ['img/slide1.png', 'img/slide2.png', 'img/slide3.png', 'img/slide4.png']
const activeSlide = ref(0)
let carouselTimer = null

function goToSlide(index) {
  activeSlide.value = (index + slides.length) % slides.length
}

onMounted(() => {
  carouselTimer = setInterval(() => goToSlide(activeSlide.value + 1), 3000)
})
onUnmounted(() => clearInterval(carouselTimer))

const keyword = ref('')
function onSearch() {
  // 原站点搜索框仅作展示，这里保留交互入口
  keyword.value = keyword.value.trim()
}

const newBooks = [
  { name: '葬礼过后', author: '[英]戴安娜·阿西尔', img: 'img/葬礼过后.png', link: '/book/funeral' },
  { name: '中国的法、社会与历史', author: '[日]仁井田陞', img: 'img/中国的法、社会与历史.png' },
  { name: '凯罗斯', author: '[德]燕妮·埃彭贝克', img: 'img/凯罗斯.png' },
  { name: '天气好的话，我会去找你', author: '[韩]李到禹', img: 'img/天气好的话，我会去找你.png' }
]

const featuredBooks = [
  { name: '要有光', author: '梁鸿', img: 'img/要有光.png' },
  { name: '白象', author: '班宇', img: 'img/白象.png' },
  { name: '一个女人一生中的二十四小时', author: '[奥]斯蒂芬·茨威格', img: 'img/一个女人一生中的二十四小时.png' },
  { name: '林门郑氏', author: '[马来西亚]林雪虹', img: 'img/林门郑氏.png' }
]

const resonanceBooks = [
  { name: '若非，冬季', author: '[加]安妮·卡森', img: 'img/若非，冬季.png' },
  { name: '活山', author: '[英]娜恩·谢泼德', img: 'img/活山.png' },
  { name: '平原上的摩西', author: '双雪涛', img: 'img/平原上的摩西.png' },
  { name: '事件', author: '[法]安妮·埃尔诺', img: 'img/事件.png' }
]

const articles = [
  {
    title: '为什么鸟儿在黎明歌唱？',
    intro: '清晨悦耳的鸟鸣让人心旷神怡，但是一天中的其他时间却很少能听到鸟叫，这是为什么？',
    img: 'img/鸟儿.png',
    link: '/article/bird'
  },
  {
    title: '专业运动员的早餐和普通人的早餐有什么不同？',
    intro: '专业运动员每天要进行大量的训练，他们的饮食必然和常人有所不同。你可曾好奇过他们每天早餐都吃些什么？',
    img: 'img/早餐.png'
  },
  {
    title: '蔬菜放冰箱如何才能保鲜更久？',
    intro: '疫情期间，如何储存蔬菜才能保鲜更持久？不同蔬菜应该如何在冰箱中储存？',
    img: 'img/蔬菜.png'
  }
]

const subscribeCards = [
  { id: 'detail-mail', title: '每周文摘', img: 'img/mail.png', image: 'img/email.png', desc: '每周精选5-8篇优质深度文章，覆盖认知、成长等领域，经过编辑精心筛选和解读，直接发送到你的邮箱，节省你的筛选时间。', action: '立即订阅' },
  { id: 'detail-calendar', title: '月度计划', img: 'img/bg-calendar-f.png', image: 'img/digital-calendar.png', desc: '每月更新一份可落地的阅读计划，按主题分类（如心理学、历史、商业），搭配打卡提醒和读书笔记模板，帮你养成阅读习惯。', action: '加入计划' },
  { id: 'detail-book', title: '电子书刊', img: 'img/办公文档_书籍1_book-one_linear.png', image: 'img/online-reading.png', desc: '精选优质电子书和电子杂志，支持多设备同步阅读，提供批注、划线功能，还有专属读书社群，和同好交流阅读心得。', action: '浏览书库' }
]
const activeDetail = ref(null)

function onKeydown(event) {
  if (event.key === 'Escape') activeDetail.value = null
}
onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div>
    <SiteHeader />

    <!--轮播图-->
    <div id="carousel" class="carousel slide" data-interval="3000" data-pause="false">
      <ol class="carousel-indicators">
        <li v-for="(slide, index) in slides" :key="slide"
            :class="{ active: activeSlide === index }" @click="goToSlide(index)"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(slide, index) in slides" :key="slide"
             class="carousel-item" :class="{ active: activeSlide === index }">
          <img :src="slide" class="d-block w-100" alt="轮播图" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#" role="button" @click.prevent="goToSlide(activeSlide - 1)">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#" role="button" @click.prevent="goToSlide(activeSlide + 1)">
        <span class="carousel-control-next-icon"></span>
      </a>

      <div class="search-wrapper">
        <form class="search-form" @submit.prevent="onSearch">
          <button class="search-submit-btn" type="submit">
            <span><img :src="'img/搜索.png'" alt="搜索" /></span>
          </button>
          <input v-model="keyword" type="text" class="search-input" placeholder="书名、作者、ISBN" />
        </form>
      </div>
    </div>

    <!--新书速递-->
    <header class="header">
      <div class="header-line-fir"></div>
      <h1><router-link to="/new">新书速递</router-link></h1>
      <div class="header-line-sec"></div>
    </header>
    <div class="more-link"><router-link to="/new">更多>></router-link></div>
    <section class="book-container">
      <div v-for="book in newBooks" :key="book.name" class="book-card">
        <router-link v-if="book.link" :to="book.link" class="book-img-link">
          <img :src="book.img" :alt="book.name" />
        </router-link>
        <img v-else :src="book.img" :alt="book.name" />
        <p class="bookname">
          <router-link v-if="book.link" :to="book.link" class="book-link">{{ book.name }}</router-link>
          <template v-else>{{ book.name }}</template>
        </p>
        <p class="author">{{ book.author }}</p>
      </div>
    </section>

    <!--精选阅读-->
    <header class="header">
      <h1>精选阅读</h1>
      <div class="header-line-sec"></div>
    </header>
    <div class="more-link">更多>></div>
    <section class="book-container">
      <div v-for="book in featuredBooks" :key="book.name" class="book-card">
        <img :src="book.img" :alt="book.name" />
        <p class="bookname">{{ book.name }}</p>
        <p class="author">{{ book.author }}</p>
      </div>
    </section>

    <!--和你共鸣-->
    <header class="header">
      <h1>和你共鸣</h1>
      <div class="header-line-sec"></div>
    </header>
    <div class="more-link">更多>></div>
    <section class="book-container">
      <div v-for="book in resonanceBooks" :key="book.name" class="book-card">
        <img :src="book.img" :alt="book.name" />
        <p class="bookname">{{ book.name }}</p>
        <p class="author">{{ book.author }}</p>
      </div>
    </section>

    <!--近期文章-->
    <header class="header-re">
      <div class="header-line-fir-re"></div>
      <h1><router-link to="/re-article">近期文章</router-link></h1>
      <div class="header-line-sec-re"></div>
    </header>
    <div class="more-link"><router-link to="/re-article">更多>></router-link></div>
    <section class="article">
      <div v-for="article in articles" :key="article.title" class="article-card">
        <router-link v-if="article.link" :to="article.link" class="article-img-link">
          <img :src="article.img" :alt="article.title" />
        </router-link>
        <img v-else :src="article.img" :alt="article.title" />
        <p class="article-header">
          <router-link v-if="article.link" :to="article.link" class="article-link">{{ article.title }}</router-link>
          <template v-else>{{ article.title }}</template>
        </p>
        <p class="article-intro">{{ article.intro }}</p>
      </div>
    </section>

    <!--深度连接-->
    <div class="connect">
      <header class="connect-header">
        <div class="header-line-fir-connect"></div>
        <h1>深度连接</h1>
        <p class="">让有价值的阅读，在纷扰世界里找到你。</p>
      </header>

      <section class="subscribe">
        <div v-for="card in subscribeCards" :key="card.id" class="subscribe-card"
             :data-target="card.id" @click="activeDetail = card.id">
          <img :src="card.img" :alt="card.title" />
          <h2>{{ card.title }}</h2>
        </div>
      </section>

      <div class="detail-container">
        <div v-for="card in subscribeCards" :key="card.id" :id="card.id" class="detail-card"
             :class="{ active: activeDetail === card.id }">
          <button class="close-btn" @click="activeDetail = null">×</button>
          <div class="detail-content">
            <h2>{{ card.title }}</h2>
            <p>{{ card.desc }}</p>
            <div class="detail-action"><button>{{ card.action }}</button></div>
          </div>
          <div class="detail-image"><img :src="card.image" :alt="card.title + '配图'" /></div>
        </div>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>
