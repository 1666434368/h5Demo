<template>
  <div class="home">
    <div class="aa">home</div>
    <tab-bar />
  </div>
</template>

<script>
import TabBar from '@/components/tabBar.vue'
export default {
  name: 'Home',
  components: {
    TabBar
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: #ccc;
  min-height: 100%;
  .aa {
    font-size: 24px;
    height: 30px;
  }
}
</style>
