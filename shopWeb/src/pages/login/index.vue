<template>
  <div class="login">
    <button @click="login">点我登陆</button>
  </div>
</template>
<script>
import api from './interface.js'
export default {
  data () {
    return {

    }
  },
  methods: {
    login () {
      const loginForm = {
        account: '15788888888',
        password: '15788888888',
        captcha_code: '1111'
      }
      api.login(loginForm).then(res => {
        console.log(res)
      })
      localStorage.setItem('loginMsg', loginForm)
      this.$router.push('/overview')
    }
  }
}
</script>
<style scoped>

</style>
