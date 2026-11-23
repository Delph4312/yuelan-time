<script setup>
import { ref, computed } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const filters = [
  { key: 'all', label: '全部' },
  { key: 'reading', label: '在读' },
  { key: 'finished', label: '已读完' },
  { key: 'wish', label: '想读' }
]
const activeFilter = ref('all')

const books = [
  { title: '葬礼过后', author: '[英]戴安娜·阿西尔', img: 'img/葬礼过后.png', category: 'reading', progress: 65, status: '在读 · 第12章', link: '/book/funeral' },
  { title: '爱情与夏天', author: '[爱尔兰]威廉·特雷弗', img: 'img/爱情与夏天.png', category: 'finished', badge: '已读完', status: '已读完 · 2025.12.10' },
  { title: '凯罗斯', author: '[德]燕妮·埃彭贝克', img: 'img/凯罗斯.png', category: 'wish', badge: '想读', status: '想读 · 未开始' },
  { title: '若非，冬季', author: '[加]安妮·卡森', img: 'img/若非，冬季.png', category: 'reading', progress: 32, status: '在读 · 第8章' },
  { title: '天气好的话，我会去找你', author: '[韩]李到禹', img: 'img/天气好的话，我会去找你.png', category: 'finished', badge: '已读完', status: '已读完 · 2025.11.25' },
  { title: '白象', author: '班宇', img: 'img/白象.png', category: 'wish', badge: '想读', status: '想读 · 未开始' },
  { title: '西蒙', author: '[俄]奈琳·阿布加良', img: 'img/西蒙.png', category: 'wish', badge: '想读', status: '想读 · 未开始' }
]

const visibleBooks = computed(() =>
  activeFilter.value === 'all' ? books : books.filter(book => book.category === activeFilter.value)
)

const fileInput = ref(null)
function chooseFile() {
  fileInput.value?.click()
}
</script>

<template>
  <div>
    <SiteHeader />

    <div class="container">
      <div class="bookshelf-header">
        <h1>我的书架</h1>
        <div class="bookshelf-actions">
          <div class="bookshelf-filter">
            <button v-for="filter in filters" :key="filter.key" class="filter-btn"
                    :class="{ active: activeFilter === filter.key }"
                    @click="activeFilter = filter.key">{{ filter.label }}</button>
          </div>
          <div class="bookshelf-buttons">
            <button class="action-btn manage-btn">书架管理</button>
            <button class="action-btn upload-btn" @click="chooseFile">
              <input ref="fileInput" type="file" id="book-upload" accept=".epub,.pdf,.txt,.mobi" style="display: none;" />
              上传本地书籍
            </button>
          </div>
        </div>
      </div>

      <div class="books-grid">
        <div v-for="book in visibleBooks" :key="book.title" class="book-card" :data-category="book.category">
          <router-link v-if="book.link" :to="book.link" class="link">
            <div class="book-cover">
              <img :src="book.img" :alt="book.title" />
              <div v-if="book.progress" class="book-progress">
                <span>{{ book.progress }}%</span>
                <div class="progress-bar"><div class="progress-fill" :style="{ width: book.progress + '%' }"></div></div>
              </div>
              <div v-else class="book-badge" :class="book.category === 'finished' ? 'finished-badge' : 'wish-badge'">{{ book.badge }}</div>
            </div>
            <div class="book-info">
              <h3>{{ book.title }}</h3>
              <p class="book-author">{{ book.author }}</p>
              <p class="book-status">{{ book.status }}</p>
            </div>
          </router-link>
          <a v-else href="#" class="link">
            <div class="book-cover">
              <img :src="book.img" :alt="book.title" />
              <div v-if="book.progress" class="book-progress">
                <span>{{ book.progress }}%</span>
                <div class="progress-bar"><div class="progress-fill" :style="{ width: book.progress + '%' }"></div></div>
              </div>
              <div v-else class="book-badge" :class="book.category === 'finished' ? 'finished-badge' : 'wish-badge'">{{ book.badge }}</div>
            </div>
            <div class="book-info">
              <h3>{{ book.title }}</h3>
              <p class="book-author">{{ book.author }}</p>
              <p class="book-status">{{ book.status }}</p>
            </div>
          </a>
        </div>
      </div>

      <div v-if="visibleBooks.length === 0" class="empty-shelf" style="display: none;">
        <img :src="'img/empty.png'" alt="空书架" />
        <p>你的书架还是空的，快去发现好书吧！</p>
        <router-link to="/discover" class="go-discover">去发现</router-link>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>
