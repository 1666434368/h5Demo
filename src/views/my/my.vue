<template>
  <div class="my">
    my
    <tab-bar />
  </div>
</template>

<script>
import TabBar from '@/components/tabBar.vue'
export default {
  name: 'My',
  components: {
    TabBar
  }
}
</script>

<style lang="scss" scoped>
.my {
  background: #ccc;
  min-height: 100%;
}
</style>
