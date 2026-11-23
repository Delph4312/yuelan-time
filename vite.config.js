import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 使用相对路径，便于部署到 GitHub Pages 子目录
export default defineConfig({
  base: './',
  plugins: [vue()]
})
