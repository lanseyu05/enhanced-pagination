<template>
  <div class="enhanced-pagination">
    <div class="el-pagination is-background">
      <div class="el-pagination__total">共 {{ total }} 条记录</div>
      <div class="el-pagination__sizes" v-if="showSizes">
        <el-select
          v-model="localPageSize" 
          @change="handleSizeChange"
        >
          <el-option
            v-for="item in pageSizes"
            :key="item"
            :value="item"
            :label="`${item} 条/页`"
          />
        </el-select>
      </div>
      <div class="btn-group">
        <button
          type="button" 
          :disabled="isFirstPage"
          @click="goToFirstPage"
          v-if="showFirstPage"
        >
          <el-icon><DArrowLeft /></el-icon>
        </button>
        <button
          type="button" 
          :disabled="isFirstPage"
          @click="prev"
        >
          <el-icon><ArrowLeft /></el-icon>
        </button>
      </div>
      <ul class="el-pager">
        <li
          v-for="page in displayedPages"
          :key="page"
          :class="{
            'number': true,
            'active': page === localCurrentPage,
            'more': page === '...'
          }"
          @click="page !== '...' && handleCurrentChange(page)"
        >
          <el-icon v-if="page === '...'" class="more"><More /></el-icon>
          <template v-else>{{ page }}</template>
        </li>
      </ul>
      <div class="btn-group">
        <button
          type="button" 
          :disabled="isLastPage"
          @click="next"
        >
          <el-icon><ArrowRight /></el-icon>
        </button>
        <button
          type="button" 
          :disabled="isLastPage"
          @click="goToLastPage"
          v-if="showLastPage"
        >
          <el-icon><DArrowRight /></el-icon>
        </button>
      </div>
      <div class="el-pagination__jump" v-if="showJumper">
        前往
        <el-input
          v-model.number="jumpPage" 
          @change="handleJumpChange"
          @keyup.enter="handleJumpChange"
        />
        页
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { ArrowLeft, ArrowRight, DArrowLeft, DArrowRight, More } from '@element-plus/icons-vue'
import { PropType } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default: () => [10, 20, 30, 40, 50]
  },
  showSizes: {
    type: Boolean,
    default: true
  },
  showFirstPage: {
    type: Boolean,
    default: true
  },
  showLastPage: {
    type: Boolean,
    default: true
  },
  showJumper: {
    type: Boolean,
    default: true
  },
  pagerCount: {
    type: Number,
    default: 7
  }
})

const emit = defineEmits(['update:currentPage', 'update:pageSize', 'size-change', 'current-change'])

// 生成连续页码数组的辅助函数
const generateContinuousPages = (start: number, count: number): number[] => {
  return Array.from({ length: count }, (_, i) => start + i)
}

const localCurrentPage = ref(props.currentPage)
const localPageSize = ref(props.pageSize)
const jumpPage = ref('')

const totalPages = computed(() => Math.ceil(props.total / localPageSize.value))
const isFirstPage = computed(() => localCurrentPage.value === 1)
const isLastPage = computed(() => localCurrentPage.value === totalPages.value)

const displayedPages = computed(() => {
  const pagerCount = props.pagerCount;
  const halfPagerCount = Math.floor(pagerCount / 2);
  const current = localCurrentPage.value;
  const total = totalPages.value;

  const pages: (number | string)[] = [];

  if (total <= pagerCount) {
    return generateContinuousPages(1, total);
  }

  if (current <= halfPagerCount) {
    pages.push(...generateContinuousPages(1, pagerCount - 1), '...', total);
  } else if (current > total - halfPagerCount) {
    pages.push(1, '...', ...generateContinuousPages(total - pagerCount + 2, pagerCount - 1));
  } else {
    pages.push(1, '...', ...generateContinuousPages(current - halfPagerCount, pagerCount - 2), '...', total);
  }

  return pages;
})

const handleCurrentChange = (val: number | string) => {
  if (typeof val === 'number' && val !== localCurrentPage.value) {
    localCurrentPage.value = val;
    emit('update:currentPage', val);
    emit('current-change', val);
  }
}

const handleSizeChange = (val: number) => {
  localPageSize.value = val
  emit('update:pageSize', val)
  emit('size-change', val)
}

// 监听 pageSize 的变化
watch(() => props.pageSize, (newVal) => {
  if (typeof newVal === 'number') {
    localPageSize.value = newVal
  }
})

const handleJumpChange = () => {
  const num = parseInt(jumpPage.value as string)
  if (!isNaN(num) && num >= 1 && num <= totalPages.value) {
    handleCurrentChange(num)
  }
  jumpPage.value = ''
}

const goToFirstPage = () => {
  handleCurrentChange(1)
}

const goToLastPage = () => {
  handleCurrentChange(totalPages.value)
}

const prev = () => {
  if (!isFirstPage.value) {
    handleCurrentChange(localCurrentPage.value - 1)
  }
}

const next = () => {
  if (!isLastPage.value) {
    handleCurrentChange(localCurrentPage.value + 1)
  }
}
</script>

<style>
.enhanced-pagination {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.el-pagination {
  display: flex;
  align-items: center;
  font-family: var(--el-font-family);
  color: var(--el-text-color-primary);
}

.el-pagination__total {
  margin-right: 15px;
  min-width: 150px;
  font-size: var(--el-font-size-base);
}

.el-pagination__sizes {
  margin-right: 15px;
  width: auto;
  min-width: 80px;
}

.btn-group {
  display: flex;
  align-items: center;
}

.btn-group button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: var(--el-text-color-primary);
}

.btn-group button:disabled {
  cursor: not-allowed;
  opacity: var(--el-opacity-disabled);
}

.el-pager li {
  margin: 0 5px;
  cursor: pointer;
}

.el-pager .active {
  font-weight: bold;
  color: var(--el-color-primary);
}

.el-pagination__jump {
  width: 100px;
  margin-left: 15px;
}
</style>
 