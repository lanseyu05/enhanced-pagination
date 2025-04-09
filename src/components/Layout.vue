<template>
  <div class="layout-container">
    <div class="sidebar">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><component :is="'Document'" /></el-icon>
            <span>分页组件</span>
          </template>
          <el-menu-item index="/pagination/basic">
            <el-icon><component :is="'Document'" /></el-icon>
            <span>基础用法</span>
          </el-menu-item>
          <el-menu-item index="/pagination/advanced">
            <el-icon><component :is="'Setting'" /></el-icon>
            <span>高级用法</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Document, Setting } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const activeIndex = ref(route.path)

const handleSelect = (key: string) => {
  router.push(key)
}
</script>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 240px;
  background-color: #545c64;
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow: auto;
}

.el-menu-vertical {
  height: 100%;
  border-right: none;
}
</style> 