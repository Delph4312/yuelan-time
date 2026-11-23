import { createRouter, createWebHashHistory } from 'vue-router'

// 每个页面沿用原有的独立样式表，按路由动态加载，避免相互覆盖
const routes = [
  { path: '/', name: 'Home', component: () => import('../views/HomeView.vue'), meta: { css: 'css/style.css' } },
  { path: '/bookshelf', name: 'Bookshelf', component: () => import('../views/BookshelfView.vue'), meta: { css: 'css/bookshelf.css' } },
  { path: '/discover', name: 'Discover', component: () => import('../views/DiscoverView.vue'), meta: { css: 'css/discover.css' } },
  { path: '/new', name: 'NewBooks', component: () => import('../views/NewBooksView.vue'), meta: { css: 'css/new.css' } },
  { path: '/re-article', name: 'ReArticle', component: () => import('../views/ReArticleView.vue'), meta: { css: 'css/re-article.css' } },
  { path: '/account', name: 'Account', component: () => import('../views/AccountView.vue'), meta: { css: 'css/account.css' } },
  { path: '/book/funeral', name: 'BookDetail', component: () => import('../views/BookDetailView.vue'), meta: { css: 'css/new-zlgh.css' } },
  { path: '/article/bird', name: 'ArticleBird', component: () => import('../views/ArticleBirdView.vue'), meta: { css: 'css/re-article-bird.css' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
