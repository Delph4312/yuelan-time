<script setup>
import { ref } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const filterGroups = [
  { label: '按分类：', tags: ['全部', '图书评论', '作者访谈', '行业观察', '阅读指南'] },
  { label: '按标签：', tags: ['全部', '文学', '历史', '心理学', '科普'] },
  { label: '按类型：', tags: ['全部', '长文', '短文', '访谈'] }
]
const activeTags = ref(filterGroups.map(() => '全部'))
function selectTag(groupIndex, tag) {
  activeTags.value[groupIndex] = tag
}

const groups = [
  {
    date: '今日',
    articles: [
      {
        img: 'img/鸟儿.png', title: '为什么鸟儿在黎明歌唱？', author: '丹妮', time: '14:16',
        tags: ['科普', '自然'],
        excerpt: '清晨悦耳的鸟鸣让人心旷神怡，但是一天中的其他时间却很少能听到鸟叫。为什么鸟儿都喜欢在清晨歌唱？来本文中寻找答案吧。',
        link: '/article/bird'
      }
    ]
  },
  {
    date: '本周',
    articles: [
      {
        img: 'img/早餐.png', title: '专业运动员的早餐和普通人的早餐有什么不同？', author: '董静', time: '01-20 15:48',
        tags: ['科普', '健康'],
        excerpt: '专业运动员每天要进行大量的训练，他们的饮食必然和常人有所不同。你可曾好奇过他们每天早餐都吃些什么？'
      },
      {
        img: 'img/蔬菜.png', title: '蔬菜放冰箱如何才能保鲜更久？', author: '齐磊', time: '01-18 09:12',
        tags: ['科普', '健康'],
        excerpt: '疫情期间，如何储存蔬菜才能保鲜更持久？不同蔬菜应该如何在冰箱中储存？'
      }
    ]
  },
  {
    date: '本月',
    articles: [
      {
        img: 'img/电子书与书.png', title: '2025年出版行业报告：实体书市场的回暖与新挑战', author: '李涛', time: '01-10 11:30',
        tags: ['行业观察', '出版'],
        excerpt: '2025年实体书市场呈现出回暖趋势，尤其是文学类、少儿类图书销量同比增长15%，但同时也面临着电子书冲击、渠道变革等新挑战。报告深入分析了行业现状与未来趋势...'
      }
    ]
  }
]

const hotArticles = [
  '2025年出版行业报告：实体书市场的回暖与新挑战',
  '2026年文学新书盘点：那些值得期待的本土创作',
  '蔬菜放冰箱如何才能保鲜更久？',
  '扬州早茶：雅致菜肴中品味千年古城文化韵味',
  '心理学视角下的阅读：为什么我们需要沉浸式阅读'
]

const email = ref('')
function subscribe() {
  email.value = ''
}
</script>

<template>
  <div>
    <SiteHeader />

    <div class="page-header">
      <h1 class="page-title">近期文章</h1>
      <p class="time-desc">最近30天发布 · 共收录42篇文章</p>
    </div>

    <div class="filter-section">
      <div v-for="(group, index) in filterGroups" :key="group.label" class="filter-group">
        <span class="filter-label">{{ group.label }}</span>
        <div class="filter-tags">
          <span v-for="tag in group.tags" :key="tag" class="filter-tag"
                :class="{ active: activeTags[index] === tag }" @click="selectTag(index, tag)">{{ tag }}</span>
        </div>
      </div>
    </div>

    <div class="main-container">
      <div class="article-content">
        <div class="timeline">
          <div v-for="group in groups" :key="group.date" class="timeline-group">
            <h2 class="timeline-date">{{ group.date }}</h2>
            <div v-for="article in group.articles" :key="article.title" class="article-card">
              <router-link v-if="article.link" :to="article.link" class="article-thumbnail-link">
                <img :src="article.img" :alt="article.title" class="article-thumbnail" />
              </router-link>
              <img v-else :src="article.img" alt="" class="article-thumbnail" />
              <div class="article-info">
                <router-link v-if="article.link" :to="article.link" class="article-title">{{ article.title }}</router-link>
                <a v-else href="#" class="article-title">{{ article.title }}</a>
                <div class="article-meta">
                  <span>作者：{{ article.author }}</span>
                  <span>发布时间：{{ article.time }}</span>
                </div>
                <div class="article-tags">
                  <span v-for="tag in article.tags" :key="tag" class="article-tag">{{ tag }}</span>
                </div>
                <p class="article-excerpt">{{ article.excerpt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar">
        <div class="sidebar-widget">
          <h3 class="widget-title">阅读焦点</h3>
          <ul class="hot-articles">
            <li v-for="(title, index) in hotArticles" :key="title" class="hot-item">
              <span class="hot-rank">{{ index + 1 }}</span>
              <a href="#" class="hot-title">{{ title }}</a>
            </li>
          </ul>
        </div>

        <div class="sidebar-widget">
          <h3 class="widget-title">订阅更新提醒</h3>
          <form class="subscribe-form" @submit.prevent="subscribe">
            <input v-model="email" type="email" class="subscribe-input" placeholder="输入你的邮箱地址" required />
            <button type="submit" class="subscribe-btn">订阅每周文章推送</button>
          </form>
        </div>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>
