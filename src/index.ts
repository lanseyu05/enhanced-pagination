import { App } from 'vue'
import EnhancedPagination from './components/EnhancedPagination.vue'

export { EnhancedPagination }

export default {
  install: (app: App) => {
    app.component('EnhancedPagination', EnhancedPagination)
  }
} 