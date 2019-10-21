<template>
  <div class="category">
    Category
    <tab-bar />
  </div>
</template>

<script>
import TabBar from '@/components/tabBar.vue'
export default {
  name: 'Category',
  components: {
    TabBar
  }
}
</script>

<style lang="scss" scoped>
.category {
  background: #ccc;
  min-height: 100%;
}
</style>
