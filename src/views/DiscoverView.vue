<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const categories = [
  { name: '文学经典', desc: '经典名著与文学佳作', img: 'img/文学经典.png' },
  { name: '科幻奇幻', desc: '脑洞大开的幻想世界', img: 'img/科幻奇幻.png' },
  { name: '散文随笔', desc: '细腻的生活与思考', img: 'img/散文随笔.png' },
  { name: '悬疑推理', desc: '烧脑的解谜之旅', img: 'img/悬疑推理.png' },
  { name: '自我提升', desc: '成长与认知升级', img: 'img/自我提升.png' },
  { name: '旅行游记', desc: '在路上的故事', img: 'img/旅行游记.png' }
]

const posts = [
  {
    user: '蓝脉冲', avatar: 'img/蓝脉冲.png', time: '2小时前',
    title: '“原子会和你一起做些什么？”',
    desc: '可以说是任何事。无论是你还是你或爱或恨的每一个人，也无论你们何时做过的何种事情，它们都是现场的目击者，更是密切的参与者。你曾经闻到的每一丝气味，看到的每一片景色，欣赏的每一曲旋律，以及唇间发出的每一声哭喊与叹息，皆因那些游走于空气与你身体最深暗角落的原子而产生。',
    likes: 28, saves: 12, talks: 5
  },
  {
    user: '在落基山', avatar: 'img/在落基山.png', time: '昨天 19:30',
    title: '读了《想象一个没有国家的社会》',
    desc: '难得一见的学术普及读物，从编排到撰写，既保证了把话说清楚，还提供了充分的延展性。如果只能以一本书打开文化人类学，那我一定首推这本。',
    likes: 156, saves: 48, talks: 32
  },
  {
    user: '高山草甸', avatar: 'img/高山草甸.png', time: '3天前',
    title: '我拿什么来形容你？戈壁滩上的热带鱼',
    desc: '荒漠里喂养的金鱼，离春天只有二十公分的雪兔……本应厚重、贫瘠、苍凉的生活，在李娟独树一帜、灵光闪闪的笔触下，却焕发出别样的温暖、丰盈与喜悦。每次重读《阿勒泰的角落》，总能真切地看到独自站在荒野中，努力而耐心地体会着种种美感的过去的自己……',
    likes: 98, saves: 36, talks: 24
  }
]
</script>

<template>
  <div>
    <SiteHeader />

    <div class="container">
      <section class="category-section">
        <h2 class="section-title">探索分类</h2>
        <div class="category-grid">
          <div v-for="category in categories" :key="category.name" class="category-card">
            <div class="category-img"><img :src="category.img" :alt="category.name" /></div>
            <h3 class="category-name">{{ category.name }}</h3>
            <p class="category-desc">{{ category.desc }}</p>
            <a href="#" class="category-link">查看更多</a>
          </div>
        </div>
      </section>

      <section class="community-section">
        <h2 class="section-title">阅读社区</h2>
        <div class="community-posts">
          <div v-for="post in posts" :key="post.user" class="post-card">
            <div class="post-header">
              <img :src="post.avatar" alt="用户头像" class="post-avatar" />
              <div class="post-user">
                <h4 class="username">{{ post.user }}</h4>
                <p class="post-time">{{ post.time }}</p>
              </div>
            </div>
            <div class="post-content">
              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-desc">{{ post.desc }}</p>
            </div>
            <div class="post-actions">
              <span class="action-btn"><img :src="'img/爱心.png'" alt="喜欢" />️ {{ post.likes }}</span>
              <span class="action-btn"><img :src="'img/收藏.png'" alt="收藏" />️ {{ post.saves }}</span>
              <span class="action-btn"><img :src="'img/讨论.png'" alt="讨论" />️ {{ post.talks }}</span>
            </div>
          </div>
        </div>
        <a href="#" class="more-posts">查看更多社区内容 →</a>
      </section>
    </div>

    <SiteFooter />
  </div>
</template>
