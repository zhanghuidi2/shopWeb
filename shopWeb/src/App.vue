<template>
  <div id="app">
    <router-view></router-view>
    <div class="loading" v-if="loadingTag">
      <img src="./assets/images/common/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
import '@/assets/css/common.css'
export default{
  name: 'App',
  computed: {
    loadingTag() {
      return this.$store.state.common.loadingTag
    }
  }
}
</script>
<style scoped>
.loading{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
