# Element Plus 分页组件增强

[![npm version](https://badge.fury.io/js/element-plus-pagination-enhancement.svg)](https://badge.fury.io/js/element-plus-pagination-enhancement)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 一个强大的 Element Plus 分页组件增强，添加了首页/尾页导航功能，优化了大数据集场景下的用户体验。

## 🚀 特性

- ⚡ 支持直接跳转到首页和尾页
- 🔄 保留所有原始 Element Plus 分页功能
- 🎯 无缝集成到现有 Element Plus 项目中
- 📊 针对大数据集场景优化

## 📦 安装

```bash
# npm
npm install element-plus-pagination-enhancement

# yarn
yarn add element-plus-pagination-enhancement

# pnpm
pnpm add element-plus-pagination-enhancement
```

## 🛠️ 使用方式

### 基础用法

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

### 高级用法

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
  console.log('当前页码改变:', val)
}

const handleSizeChange = (val) => {
  console.log('每页条数改变:', val)
}
</script>
```

## 📖 为什么需要这个增强？

标准的 Element Plus 分页组件缺少直接跳转到首页和尾页的功能，这在处理大数据集时可能会带来不便。本增强在保持与原始组件兼容的同时，添加了这些功能。

### 主要优势

- 🎯 在大数据集中实现快速导航
- 🔄 提升用户体验
- ⚡ 减少点击次数
- 📊 优化大数据表格性能

## 📋 API 参考

### 属性

| 名称 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| current-page | number | 1 | 当前页码 |
| page-size | number | 10 | 每页显示条目数 |
| total | number | 0 | 总条目数 |
| page-sizes | number[] | [10, 20, 50, 100] | 每页显示个数选择器的选项设置 |
| layout | string | 'prev, pager, next, jumper, ->, total' | 组件布局，子组件名用逗号分隔 |
| background | boolean | false | 是否为分页按钮添加背景色 |
| hide-on-single-page | boolean | false | 只有一页时是否隐藏 |

### 事件

| 名称 | 参数 | 说明 |
|------|------------|-------------|
| current-change | (currentPage: number) | 当前页改变时触发 |
| size-change | (pageSize: number) | 每页条数改变时触发 |

## 🔍 关键词

Element Plus, Vue 3, 分页, 首页, 尾页, 导航, UI组件, 数据表格, 大数据集, 性能优化

## 🤝 贡献指南

欢迎贡献代码！请随时提交 Pull Request。

## 📄 许可证

[MIT](LICENSE) 