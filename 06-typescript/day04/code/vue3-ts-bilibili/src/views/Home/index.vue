<template>
  <!-- 头部 -->
  <AppHeader/>
  <!-- 标签栏 -->
  <HomeChannel/>
  <!-- 轮播图 -->
  <HomeSwipe/>
  <!-- 视频列表 -->
  <HomeVideoList/>
</template>

<script setup>
// script setup 只需要导入组件，无需注册
import AppHeader from '@/components/app-header.vue'
import HomeChannel from '@/views/Home/components/home-channel.vue'
import HomeSwipe from '@/views/Home/components/home-swipe.vue'
import HomeVideoList from '@/views/Home/components/home-video-list.vue'
</script>
