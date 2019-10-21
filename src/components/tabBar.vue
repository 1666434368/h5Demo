<template>
  <div class="tab-bar">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home" @click.native="goPage('Home')">
        <div slot="icon">
          <i class="iconfont icon-home_fill_light"/>
        </div>
        首页
      </mt-tab-item>
      <mt-tab-item id="Category" @click.native="goPage('Category')">
        <div slot="icon">
          <i class="iconfont icon-leimupinleifenleileibie2"/>
        </div>
        分类
      </mt-tab-item>
      <mt-tab-item id="ShoppingCart" @click.native="goPage('ShoppingCart')">
        <div slot="icon">
          <i class="iconfont icon-cart_fill_light"/>
        </div>
        购物车
      </mt-tab-item>
      <mt-tab-item id="My" @click.native="goPage('My')">
        <div slot="icon">
          <i class="iconfont icon-my_fill_light"/>
        </div>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  data() {
    return {
      selected: 'Home',
      shift: 'movies'
    }
  },
  mounted() {
    this.getCurrentPage()
  },
  methods: {
    getCurrentPage() {
      this.selected = this.$route.name
    },
    goPage(page) {
      this.$router.push({ name: page })
    }
  }
}
</script>
<style lang="scss">
// .tab-bar{
//   width: 100%;
//   height: 90px;
//   position: fixed;
//   left: 0;
//   bottom: 0;
//   z-index: 2999;
//   .mint-tabbar{
//     background-color: #fff;
//     border-top: 1px solid #eaeaea;
//     height: 90px;
//     .mint-tab-item{
//       padding: 5px 0 0 0;
//       .mint-tab-item-icon{
//         width: 40px;
//         height: 40px;
//         margin: auto;
//         margin-bottom: 12px;
//         .iconfont{
//           font-size: 35px;
//           -webkit-text-stroke-width: 0.2px;
//           -moz-osx-font-smoothing:grayscale;
//         }
//       }
//       .mint-tab-item-label{
//         font-size: 24px;
//       }
//     }
//     .mint-tab-item.is-selected{
//       color: #ffce4b;
//     }
//   }
// }
</style>
