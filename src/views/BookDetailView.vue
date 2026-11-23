<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const bookInfo = [
  '作者: [英]戴安娜·阿西尔',
  '出版社: 湖南文艺出版社',
  '出品方: 好读文化',
  '原作名: AFTER A FUNERAL',
  '译者: 姚瑶',
  '出版年: 2025-12',
  '页数: 312',
  '定价: 58',
  '装帧: 精装',
  'ISBN: 9787572626227'
]

const intro = [
  '《葬礼过后》是20世纪英国知名编辑、《暮色将尽》作者戴安娜·阿西尔自传体小说，讲述了人到中年的戴安娜·阿西尔与埃及流亡作家迪迪的生命故事。',
  '在这部冷静到近乎残酷的书中，阿西尔以惊人的坦诚、手术刀般的冷静与诗人般的细腻，剖开了爱、死亡与记忆的复杂肌理。她记录了自己如何一步步目睹并参与这场不可避免的悲剧；她剖析了自己的妥协、忍耐，甚至是在痛苦中滋生的某种扭曲的依赖。最终，当迪迪在她的乡间别墅结束了自己的生命之后，这场漫长的“葬礼”才真正开始———它不仅是告别一个逝去的爱人，更是对一段吞噬彼此的关系进行彻底的清算与反思。',
  '这不是一部沉溺于悲伤的悼亡录，而是一部关于爱情幻象的祛魅之书。阿西尔用自身的经历和感受告诉我们，只有彻底摆脱对自身和整个世界的幻想，才能找到真正的自己！'
]

const authorIntro = [
  '英国知名文学编辑、作家，被誉为“20世纪最杰出的编辑之一”。曾负责出版过玛格丽特·阿特伍德、V.S.奈保尔、简·里斯等作家的作品。曾获2008年科斯塔图书传记奖、2009年美国国家书评人协会自传奖，因其对文学的贡献被授予大英帝国勋章。',
  '著有《暮色将尽》《葬礼过后》等作品。'
]

const catalogue = ['序幕与尾声', '流亡者', '一位客人', '旅伴', '游戏', '注定如此……']

const relatedBooks = [
  { name: '逝去的旧时光', author: '[爱尔兰]塞巴斯蒂安·巴里', img: 'img/逝去的旧时光.png' },
  { name: '西蒙', author: '[俄]奈琳·阿布加良', img: 'img/西蒙.png' },
  { name: '有母亲等待的故乡', author: '[日]浅田次郎', img: 'img/有母亲等待的故乡.png' },
  { name: '爱情与夏天', author: '[爱尔兰]威廉·特雷弗', img: 'img/爱情与夏天.png' }
]
</script>

<template>
  <div>
    <SiteHeader />

    <main class="container">
      <div class="main-content">
        <h1 class="book-title">葬礼过后</h1>
        <div class="book-header">
          <div class="book-cover"><img :src="'img/葬礼过后.png'" alt="葬礼过后" /></div>
          <div class="book-base"><p v-for="line in bookInfo" :key="line">{{ line }}</p></div>
        </div>

        <div class="actions">
          <button>阅读</button>
          <button>收藏</button>
          <a href="#">评价</a>
          <a href="#">分享</a>
        </div>

        <div class="content-intro">
          <h3>内容简介</h3>
          <p v-for="paragraph in intro" :key="paragraph">{{ paragraph }}</p>
        </div>

        <div class="author-intro">
          <h3>作者简介</h3>
          <p v-for="paragraph in authorIntro" :key="paragraph">{{ paragraph }}</p>
        </div>

        <div class="catalogue">
          <h3>目录</h3>
          <p v-for="item in catalogue" :key="item">{{ item }}</p>
        </div>

        <header class="header">
          <h1>和你共鸣</h1>
          <div class="header-line-sec"></div>
        </header>
        <div class="more-link">更多>></div>
        <section class="book-container">
          <div v-for="book in relatedBooks" :key="book.name" class="book-card">
            <img :src="book.img" :alt="book.name" />
            <p class="bookname">{{ book.name }}</p>
            <p class="author">{{ book.author }}</p>
          </div>
        </section>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
