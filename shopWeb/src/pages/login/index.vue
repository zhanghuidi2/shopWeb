<template>
  <div class="login">
    <div class="login-header"></div>
    <div class="login-bkg">
      <div class="rowup">
        <div class="item">1- 文件名字一定要用驼峰</div>
        <div class="item">2- js变量用驼峰</div>
        <div class="item">3- css用‘-’连接类名</div>
        <div class="item">4- 切记不要一个文件里出现各种数字，一个字母的命名，例如：AreaList,left-1_o等</div>
        <div class="item">5- 列表页面东西过多的时候，搜索部分，列表部分，分页部分尽量抽离组件</div>
        <div class="item">6- 一些下拉菜单的数据是从一个接口里获取的时候要使用vuex存起来</div>
        <div class="item">7- 多行注释/***/</div>
      </div>
      <div class="login-message">
        <el-form ref="form" :model="loginForm" label-width="80px" class="form">
          <el-form-item label="用户名:">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码:">
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
import api from './interface.js'
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
      api.login(this.loginForm).then(res => {
        console.log(res)
      })
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
@-webkit-keyframes rowup {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
}
@keyframes rowup {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
}
.rowup{
  -webkit-animation: 60s rowup linear infinite normal;
  animation: 60s rowup linear infinite normal;
  color: #ee7941;
}
</style>
