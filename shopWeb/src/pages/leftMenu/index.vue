<template>
<!-- 左边是菜单的循环，这个数组要后端返回的，因为每个账号的全县不同，
router.js里面的只是喂了点击找到对应的匹配页面，这个数组为了展示有那些菜单 -->
  <div class="menu">
    <el-menu
      :default-active="activePath"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <div v-for="(item, index) in menuList" :key="index">
        <el-submenu :index="item.path" v-if="item.children && item.children.length>0">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="itm.path" v-for="(itm, idx) in item.children" :key="idx">{{itm.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="item.path" v-else>
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </div>
    </el-menu>
    <!-- 第二个路由适口 -->
    <router-view style="flex:1"></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activePath: '/overview',
      menuList: [
        {
          path: '/overview',
          name: '概览',
          icon: 'el-icon-menu'
        },
        {
          path: '/goods-manage',
          name: '商品管理',
          icon: 'el-icon-goods',
          children: [
            {
              path: '/goods-manage/goods-list',
              name: '商品列表'
            },
            {
              path: '/goods-manage/goods-add',
              name: '新增商品'
            }
          ]
        },
        {
          path: '/member-manage',
          name: '会员管理',
          icon: 'el-icon-user',
          children: [
            {
              path: '/member-manage/member-list',
              name: '会员列表'
            },
            {
              path: '/member-manage/member-tag',
              name: '会员标签'
            }
          ]
        },
        {
          path: '/setting',
          name: '系统设置',
          icon: 'el-icon-setting'
        },
      ]
    }
  },
  created () {
    const fullPath = this.$route.fullPath.split('#')
    this.selectItem(fullPath[0])
  },
  methods: {
    // 获取activePath
    selectItem (fullPath) {
      this.menuList.forEach((item, index) => {
        if (!item.children && (fullPath === item.path)) {
          this.activePath = item.path
          return
        }
        item.children && item.children.forEach((itm, idx) => {
          if (fullPath === itm.path) {
            this.activePath = itm.path
          }
        })
      })
    }
  }
}
</script>
<style scoped>
  .menu{
    display: flex;
  }
</style>
