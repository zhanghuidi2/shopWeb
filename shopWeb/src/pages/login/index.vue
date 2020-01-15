<template>
  <div class="login">
    <div class="login-header"></div>
    <div class="login-bkg">
      <div class="login-message">
        <el-form ref="form" :model="loginForm" label-width="80px" class="form">
          <el-form-item label="username:">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="password:">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登 陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="login-footer"></div>
  </div>
</template>
<script>
// import api from './interface.js'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      // api.login(this.loginForm).then(res => {
      //   console.log(res)
      // })
      localStorage.setItem('loginMsg', this.loginForm)
      this.$router.push('/overview')
    }
  }
}
</script>
<style scoped>
.login-header{
  width: 100%;
  height: 150px;
  background: url(../../assets/images/login/bkgHeader.png) no-repeat;
  background-size: 100% 100%;
}
.login-bkg{
  position: relative;
  margin: 50px auto 0;
  width: 70%;
  height: 450px;
  background: url(../../assets/images/login/loginBkg.png) no-repeat;
  background-size: 100% 100%;
}
.form{
  position: absolute;
  right: 200px;
  top: 150px;
  width: 200px;
}
.login-footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background: url(../../assets/images/login/bkgFooter.png) no-repeat;
  background-size: 100% 100%;
}
</style>
