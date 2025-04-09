# Element Plus Pagination Enhancement

This project enhances the Element Plus pagination component by adding direct navigation to the first and last pages, improving the user experience for large datasets.

## Features

- Direct navigation to first and last pages
- Maintains all original Element Plus pagination functionality
- Seamless integration with existing Element Plus projects
- Improved user experience for large datasets

## Installation

```bash
npm install element-plus-pagination-enhancement
# or
yarn add element-plus-pagination-enhancement
```

## Usage

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

## Why This Enhancement?

The standard Element Plus pagination component lacks direct navigation to the first and last pages, which can be inconvenient when dealing with large datasets. This enhancement adds these features while maintaining compatibility with the original component.

## License

MIT 