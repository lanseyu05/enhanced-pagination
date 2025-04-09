<template>
  <div class="example-container">
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
        <div >
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
import 'element-plus/es/components/pagination/style/css'

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
const pageSize = ref(10)
const total = ref(100)
const customPageSizes = [10, 20, 30, 40, 50]
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
</style> 