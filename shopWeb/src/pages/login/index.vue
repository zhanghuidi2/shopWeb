<template>
  <div class="login">
    <button @click="login">点我登陆</button>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    login () {
      const loginMsg = {
        userName: 'zhangsan'
      }
      localStorage.setItem('loginMsg', loginMsg)
      this.$router.push('/overview')
    }
  }
}
</script>
<style scoped>

</style>
