<script setup>
import { ref, computed } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const tabs = ['全部', '文学', '小说', '历史文化', '社会纪实', '科学新知', '艺术设计', '商业经管', '绘本漫画']
const activeTab = ref('全部')

const books = [
  { title: '葬礼过后', img: 'img/葬礼过后.png', base: '[英]戴安娜·阿西尔 / 2025-12 / 湖南文艺出版社', category: '文学', link: '/book/funeral' },
  { title: '中国的法、社会与历史', img: 'img/中国的法、社会与历史.png', base: '[日]仁井田陞 / 2025-10 / 商务印书馆', category: '历史文化' },
  { title: '凯罗斯', img: 'img/凯罗斯.png', base: '[德]燕妮·埃彭贝克 / 2026-1 / 云南人民出版社', category: '小说' },
  { title: '天气好的话，我会去找你', img: 'img/天气好的话，我会去找你.png', base: '[韩]李到禹 / 2025-11 / 太白文艺出版社', category: '小说' },
  { title: '要有光', img: 'img/要有光.png', base: '梁鸿 / 2025-9 / 中信出版集团', category: '社会纪实' },
  { title: '白象', img: 'img/白象.png', base: '班宇 / 2025-10 / 江苏凤凰文艺出版社', category: '小说' },
  { title: '一个女人一生中的二十四小时', img: 'img/一个女人一生中的二十四小时.png', base: '[奥]斯蒂芬·茨威格 / 2025-9 / 江苏凤凰文艺出版社', category: '文学' },
  { title: '林门郑氏', img: 'img/林门郑氏.png', base: '[马来西亚]林雪虹 / 2025-8 / 上海人民出版社', category: '文学' },
  { title: '若非，冬季', img: 'img/若非，冬季.png', base: '[加]安妮·卡森 / 2025-10 / 商务印书馆', category: '文学' },
  { title: '活山', img: 'img/活山.png', base: '[英]娜恩·谢泼德 / 2025-10 / 文汇出版社', category: '科学新知' },
  { title: '平原上的摩西', img: 'img/平原上的摩西.png', base: '双雪涛 / 2021-4 / 北京日报出版社', category: '小说' },
  { title: '事件', img: 'img/事件.png', base: '[法]安妮·埃尔诺 / 2024-9 / 上海人民出版社', category: '社会纪实' }
]

const visibleBooks = computed(() =>
  activeTab.value === '全部' ? books : books.filter(book => book.category === activeTab.value)
)

const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const currentPage = ref(1)
</script>

<template>
  <div>
    <SiteHeader />

    <div class="container">
      <h1>新书速递</h1>

      <div class="filter-tabs">
        <span v-for="tab in tabs" :key="tab" :class="{ active: activeTab === tab }" @click="activeTab = tab">{{ tab }}</span>
      </div>

      <ul class="book-list">
        <li v-for="book in visibleBooks" :key="book.title" class="book-item">
          <router-link v-if="book.link" :to="book.link" class="book-cover-link">
            <img :src="book.img" :alt="book.title" />
          </router-link>
          <a v-else href="#" class="book-cover-link"><img :src="book.img" :alt="book.title" /></a>
          <div class="book-info">
            <h2>
              <router-link v-if="book.link" :to="book.link" class="book-title">{{ book.title }}</router-link>
              <a v-else href="#" class="book-title">{{ book.title }}</a>
            </h2>
            <div class="book-base">{{ book.base }}</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="pagination">
      <a href="#" class="prev-page" @click.prevent>&lt;前页</a>
      <a v-for="page in pageNumbers" :key="page" href="#"
         :class="{ active: currentPage === page }" @click.prevent="currentPage = page">{{ page }}</a>
      <span class="ellipsis">...</span>
      <a href="#" @click.prevent="currentPage = 13">13</a>
      <a href="#" @click.prevent="currentPage = 14">14</a>
      <a href="#" class="next-page" @click.prevent>后页&gt;</a>
    </div>

    <SiteFooter />
  </div>
</template>
