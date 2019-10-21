<template>
  <div class="shoppingCart">
    ShoppingCart
    <tab-bar />
  </div>
</template>

<script>
import TabBar from '@/components/tabBar.vue'
export default {
  name: 'ShoppingCart',
  components: {
    TabBar
  }
}
</script>

<style lang="scss" scoped>
.shoppingCart {
  background: #ccc;
  min-height: 100%;
}
</style>
