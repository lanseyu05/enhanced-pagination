<template>
  <div class="example-container">
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <h3>自定义分页组件示例</h3>
        </div>
      </template>
      <div class="demo-content">
        <el-table :data="displayedItems" style="width: 100%">
          <el-table-column prop="id" label="ID" width="80" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="description" label="Description" />
          <el-table-column prop="date" label="Date" width="180" />
        </el-table>
        <div class="pagination-wrapper">
          <enhanced-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :total="total"
            :page-sizes="customPageSizes"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
        </div>
      </div>
    </el-card>

    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <h3>Element Plus 原生分页组件示例</h3>
        </div>
      </template>
      <div class="demo-content">
        <el-table :data="displayedItems" style="width: 100%">
          <el-table-column prop="id" label="ID" width="80" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="description" label="Description" />
          <el-table-column prop="date" label="Date" width="180" />
        </el-table>
        <div class="pagination-wrapper">
          <el-pagination
            v-model:currentPage="currentPage"
            v-model:pageSize="pageSize"
            :total="total"
            :page-sizes="customPageSizes"
            layout="total, sizes, prev, pager, next, jumper"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import EnhancedPagination from '@/components/EnhancedPagination.vue'
import { ElPagination } from 'element-plus'

// 生成模拟数据
const generateItems = (total: number) => {
  return Array.from({ length: total }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    description: `This is the description for item ${index + 1}`,
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleString()
  }))
}

const currentPage = ref(1)
const pageSize = ref(15)
const total = ref(150)
const customPageSizes = [15, 30, 50, 100]
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
</script>

<style scoped>
.example-container {
  padding: 20px;
  background-color: var(--el-fill-color-light);
}

.demo-card {
  margin-bottom: 20px;
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