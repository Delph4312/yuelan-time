<script setup>
import { ref } from 'vue'
import SiteFooter from '../components/SiteFooter.vue'

const activeTab = ref('login')

function login() {}
function register() {}
</script>

<template>
  <div>
    <router-link to="/" class="home-link" aria-label="返回首页">← 首页</router-link>

    <div class="container">
      <div class="auth-wrapper">
        <div class="site-title">
          <h1>悦览时光</h1>
        </div>

        <div class="auth-tabs">
          <button class="tab-btn" :class="{ active: activeTab === 'login' }" id="login-tab" @click="activeTab = 'login'">登录</button>
          <button class="tab-btn" :class="{ active: activeTab === 'register' }" id="register-tab" @click="activeTab = 'register'">注册</button>
        </div>

        <form class="auth-form" id="login-form" v-show="activeTab === 'login'" @submit.prevent="login">
          <div class="form-group">
            <label for="login-username">用户名/邮箱</label>
            <input type="text" id="login-username" placeholder="请输入用户名或邮箱" required />
          </div>
          <div class="form-group">
            <label for="login-password">密码</label>
            <input type="password" id="login-password" placeholder="请输入密码" required />
          </div>
          <div class="form-options">
            <label class="checkbox-label">
              <input type="checkbox" /> 记住我
            </label>
            <a href="#" class="forgot-pwd">忘记密码？</a>
          </div>
          <button type="submit" class="auth-btn">登录</button>
        </form>

        <form class="auth-form" id="register-form" v-show="activeTab === 'register'" @submit.prevent="register">
          <div class="form-group">
            <label for="reg-username">用户名</label>
            <input type="text" id="reg-username" placeholder="请设置用户名" required />
          </div>
          <div class="form-group">
            <label for="reg-email">邮箱</label>
            <input type="email" id="reg-email" placeholder="请输入邮箱地址" required />
          </div>
          <div class="form-group">
            <label for="reg-password">密码</label>
            <input type="password" id="reg-password" placeholder="至少8位，包含字母和数字" required />
          </div>
          <div class="form-group">
            <label for="reg-confirm-pwd">确认密码</label>
            <input type="password" id="reg-confirm-pwd" placeholder="再次输入密码" required />
          </div>
          <div class="form-options">
            <label class="checkbox-label">
              <input type="checkbox" required /> 我已阅读并同意<a href="#" class="agreement">《用户协议》</a>和<a href="#" class="agreement">《隐私声明》</a>
            </label>
          </div>
          <button type="submit" class="auth-btn">注册</button>
        </form>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>
