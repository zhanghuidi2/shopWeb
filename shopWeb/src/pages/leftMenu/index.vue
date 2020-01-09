<template>
<!-- 左边是菜单的循环，这个数组要后端返回的，因为每个账号的全县不同，
router.js里面的只是喂了点击找到对应的匹配页面，这个数组为了展示有那些菜单 -->
  <div class="menu">
    <div class="left-menu">
      <div v-for="(item, index) in menuList" :key="index" class="label">
        <!-- 一级 -->
        <div v-if="item.children && item.children.length" class="item-li"  @click="hiddenChange(index)">
          <i class="icon" :class="item.active? `${item.icon}-active` : item.icon"></i>{{item.name}}<i :class="!item.hidden?'el-icon-arrow-up':'el-icon-arrow-down'" class="arrow"></i>
        </div>
        <router-link :to="item.path" tag="div" v-else @click.native="keepSatus(index,'',1)">
          <div class="item-li"><i class="icon" :class="item.active? `${item.icon}-active` : item.icon"></i>{{item.name}}</div>
        </router-link>
        <!-- 二级 -->
        <el-collapse-transition>
          <div v-show="!item.hidden">
            <div v-for="(itm, idx) in item.children" :key="idx" @click="keepSatus(index, idx,2)">
              <router-link :to="itm.path" tag="div" class="item-li item-children" :class="itm.active?'item-active':''" >{{itm.name}}</router-link>
            </div>
        </div>
        </el-collapse-transition>
      </div>
    </div>
    <!-- 第二个路由适口 -->
    <router-view style="flex:1"></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuList: [
        {
          path: '/overview',
          name: '概览',
          icon: 'survey'
        },
        {
          path: '/goods-manage',
          name: '商品管理',
          icon: 'goods',
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
          icon: 'member',
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
        }
      ]
    }
  },
  created () {
    const fullPath = this.$route.fullPath.split('#')
    this.selectItem(fullPath[0])
  },
  methods: {
    // 收起或者展开二级菜单
    hiddenChange (index) {
      this.$set(this.menuList[index], 'hidden', !this.menuList[index].hidden)
    },
    // 点击二级菜单选中状态
    keepSatus (index, idx, tag) {
      this.menuList.map((item, index) => {
        this.$set(this.menuList[index], 'active', false)
        item.children && item.children.map((itm, idx) => {
          this.$set(this.menuList[index].children[idx], 'active', false)
        })
      })
      if (tag === 1) {
        this.$set(this.menuList[index], 'active', true)
      } else {
        this.$set(this.menuList[index].children[idx], 'active', true)
        this.$set(this.menuList[index], 'active', true)
      }
    },
    // 刷新高亮
    selectItem (fullPath) {
      this.menuList.forEach((item, index) => {
        if (!item.children && (fullPath === item.path)) {
          this.$set(this.menuList[index], 'active', true)
          return
        }
        item.children && item.children.forEach((itm, idx) => {
          if (fullPath === itm.path) {
            this.$set(this.menuList[index], 'active', true)
            this.$set(this.menuList[index].children[idx], 'active', true)
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
  .left-menu{
    position: fixed;
    left: 0;
    width: 150px;
    height: 100%;
    background: #001528;
    color: #fff;
    font-size: 14px;
  }
  .label{
    display: flex;
    flex-direction: column;
  }
  .item-li{
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 40px;
    cursor: pointer;
  }
  .item-li:hover{
    color: #fe7865;
    background: #000;
  }
  .item-active {
    color: #fe7865;
    /* background: #f2f2f2; */
  }
  .item-children{
    padding-left: 54px;
  }
  .icon{
    display: inline-block;
    height: 24px;
    width: 24px;
    margin-right: 10px;
  }
  .survey{
    background: url('../../assets/images/menu/survey.png')
  }
   .survey-active{
    background: url('../../assets/images/menu/survey-active.png')
  }
   .goods{
    background: url('../../assets/images/menu/goods.png')
  }
   .goods-active{
    background: url('../../assets/images/menu/goods-active.png')
  }
   .member{
    background: url('../../assets/images/menu/member.png')
  }
   .member-active{
    background: url('../../assets/images/menu/member-active.png')
  }
  .arrow{
    margin-left: 10px;
    font-size: 14px;
  }
</style>
