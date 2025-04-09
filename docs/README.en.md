# Element Plus Pagination Enhancement

[![npm version](https://badge.fury.io/js/element-plus-pagination-enhancement.svg)](https://badge.fury.io/js/element-plus-pagination-enhancement)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A powerful enhancement for Element Plus Pagination component that adds first/last page navigation and improves user experience for large datasets.

## 🚀 Features

- ⚡ Direct navigation to first and last pages
- 🔄 Maintains all original Element Plus pagination functionality
- 🎯 Seamless integration with existing Element Plus projects
- 📊 Optimized for large datasets

## 📦 Installation

```bash
# npm
npm install element-plus-pagination-enhancement

# yarn
yarn add element-plus-pagination-enhancement

# pnpm
pnpm add element-plus-pagination-enhancement
```

## 🛠️ Usage

### Basic Usage

```vue
<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :total="total"
    :page-sizes="[10, 20, 50, 100]"
    layout="total, sizes, prev, pager, next, jumper, first, last"
  />
</template>

<script setup>
import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(1000)
</script>
```

### Advanced Usage

```vue
<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :total="total"
    :page-sizes="[10, 20, 50, 100]"
    :background="true"
    :hide-on-single-page="false"
    layout="total, sizes, prev, pager, next, jumper, first, last"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(1000)

const handleCurrentChange = (val) => {
  console.log('Current page changed:', val)
}

const handleSizeChange = (val) => {
  console.log('Page size changed:', val)
}
</script>
```

## 📖 Why This Enhancement?

The standard Element Plus pagination component lacks direct navigation to the first and last pages, which can be inconvenient when dealing with large datasets. This enhancement adds these features while maintaining compatibility with the original component.

### Key Benefits

- 🎯 Faster navigation in large datasets
- 🔄 Improved user experience
- ⚡ Reduced number of clicks
- 📊 Better performance with large data tables

## 📋 API Reference

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| current-page | number | 1 | Current page number |
| page-size | number | 10 | Items per page |
| total | number | 0 | Total number of items |
| page-sizes | number[] | [10, 20, 50, 100] | Available page sizes |
| layout | string | 'prev, pager, next, jumper, ->, total' | Layout of pagination |
| background | boolean | false | Whether the buttons have a background color |
| hide-on-single-page | boolean | false | Whether to hide when there's only one page |

### Events

| Name | Parameters | Description |
|------|------------|-------------|
| current-change | (currentPage: number) | Triggers when current page changes |
| size-change | (pageSize: number) | Triggers when page size changes |

## 🔍 Keywords

Element Plus, Vue 3, Pagination, First Page, Last Page, Navigation, UI Component, Data Table, Large Dataset, Performance Optimization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT](LICENSE) 