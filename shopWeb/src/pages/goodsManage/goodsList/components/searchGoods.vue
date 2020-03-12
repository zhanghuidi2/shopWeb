<template>
  <div class="search">
    <el-form :inline="true" :model="searchData">
      <el-row>
        <el-form-item label="商品编码">
          <el-input v-model="searchData.code" placeholder="商品编码"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-select v-model="searchData.name" placeholder="商品名称">
            <el-option
              v-for="item in goodsList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-cascader
            v-model="searchData.class"
            :options="classList">
          </el-cascader>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="searchData.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="mini">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" @click="onExport" size="mini">导出</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    goodsList: state => state.goods.goodsList,
    classList: state => state.goods.classList
  }),
  data () {
    return {
      searchData: {} // 搜索的对象
    }
  },
  methods: {
    // 搜索
    onSubmit () {
      console.log('搜索')
      this.$parent.pagination.currentPage = 1
      this.$parent.init()
    },
    // 导出
    onExport () {
      console.log('导出', 'window.location.href')
    }
  }
}
</script>
