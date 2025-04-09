import { createRouter, createWebHistory } from 'vue-router'
import EnhancedPaginationExample from '../views/EnhancedPaginationExample.vue'

const routes = [
  {
    path: '/',
    redirect: '/pagination/basic'
  },
  {
    path: '/pagination',
    redirect: '/pagination/basic',
    children: [
      {
        path: 'basic',
        name: 'PaginationBasic',
        component: EnhancedPaginationExample
      },
      {
        path: 'advanced',
        name: 'PaginationAdvanced',
        component: EnhancedPaginationExample
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 