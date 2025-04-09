<template>
  <div class="example-container">
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <h3>分页组件示例</h3>
        </div>
      </template>
      <div class="demo-content">
        <el-table :data="displayedItems" style="width: 100%">
          <el-table-column prop="id" label="ID" width="80" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="description" label="Description" />
          <el-table-column prop="date" label="Date" width="180" />
        </el-table>
        <div  >
          <enhanced-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :total="total"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
        </div>
      </div>
    </el-card>

    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <h3>简化版分页（无首页末页按钮）</h3>
        </div>
      </template>
      <div class="demo-content">
        <el-table :data="displayedItems2" style="width: 100%">
          <el-table-column prop="id" label="ID" width="80" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="description" label="Description" />
          <el-table-column prop="date" label="Date" width="180" />
        </el-table>
        <div  >
          <enhanced-pagination
            v-model:current-page="currentPage2"
            v-model:page-size="pageSize2"
            :total="total2"
            :show-first-page="false"
            :show-last-page="false"
            @current-change="handleCurrentChange2"
            @size-change="handleSizeChange2"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import EnhancedPagination from '@/components/EnhancedPagination.vue'

// 生成模拟数据
const generateItems = (total: number) => {
  return Array.from({ length: total }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    description: `This is the description for item ${index + 1}`,
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleString()
  }))
}

// First example
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)
const allItems = ref(generateItems(total.value))

const displayedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return allItems.value.slice(start, end)
})

const handleCurrentChange = (val: number) => {
  console.log('Current page changed:', val)
}

const handleSizeChange = (val: number) => {
  console.log('Page size changed:', val)
  currentPage.value = 1
}

// Second example
const currentPage2 = ref(1)
const pageSize2 = ref(5)
const total2 = ref(50)
const allItems2 = ref(generateItems(total2.value))

const displayedItems2 = computed(() => {
  const start = (currentPage2.value - 1) * pageSize2.value
  const end = start + pageSize2.value
  return allItems2.value.slice(start, end)
})

const handleCurrentChange2 = (val: number) => {
  console.log('Current page changed (example 2):', val)
}

const handleSizeChange2 = (val: number) => {
  console.log('Page size changed (example 2):', val)
  currentPage2.value = 1
}
</script>

<style scoped>
.example-container {
  min-height: 100vh;
  padding: 20px;
  background-color: var(--el-fill-color-light);
}

.demo-card {
  margin-bottom: 20px;
}

.demo-card:last-child {
  margin-bottom: 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--el-text-color-primary);
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pagination-wrapper {
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  border-top: 1px solid var(--el-border-color-lighter);
}

:deep(.el-card__header) {
  padding: 16px 20px;
  border-bottom: 1px solid var(--el-border-color-light);
  background-color: var(--el-fill-color-blank);
}

:deep(.el-card__body) {
  padding: 20px;
}

:deep(.el-table) {
  --el-table-border-color: var(--el-border-color-lighter);
  --el-table-header-bg-color: var(--el-fill-color-light);
  --el-table-row-hover-bg-color: var(--el-fill-color);
}
</style> 