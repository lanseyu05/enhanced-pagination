<template>
  <div class="app">
    <enhanced-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :total="total"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper, first, last"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EnhancedPagination from './components/EnhancedPagination.vue'

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(1000)
</script>

<style>
.app {
  padding: 20px;
}
</style> 