<template>
  <div class="list">
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.3)"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :header-cell-style="rowClass">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="商品信息"
        min-width="200">
        <template slot-scope="scope">
          <div class="goods-info">
            <el-image :src="scope.row.img" alt="" fit="contain" class="goods-image"></el-image>
            <div>
              <span>商品名称：{{scope.row.name}}</span>
              <span>商品id：{{scope.row.id}}</span>
              <span>商品编码：{{scope.row.code}}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="class"
        label="分类">
      </el-table-column>
      <el-table-column
        prop="class"
        label="库存"
        sortable>
      </el-table-column>
      <el-table-column
        prop="time"
        min-width="180">
        <template slot="header" slot-scope="scope">
          创建时间
          <el-tooltip effect="dark" content="新建商品的时间，如果编辑商品则是更新时间" placement="top">
            <i class="el-icon-info"></i>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        min-width="200">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row)" size="mini">编辑</el-button>
          <el-button type="danger" @click="del(scope.row)" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array
    }
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    // table的表头
    rowClass ({row, rowIndex}) {
      return 'background:#f8f8f8'
    },
    handleSelectionChange (val) {
      console.log(val)
    },
    edit (row) {
      console.log(row)
    }
  }
}
</script>
<style scope>
.goods-info{
  display: flex;
}
.goods-info>div{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.goods-image{
  width: 80px;
  height: 80px;
  margin-right: 20px;
}
</style>
