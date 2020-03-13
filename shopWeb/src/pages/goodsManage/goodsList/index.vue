<template>
  <div class="goods-list">
    <!-- 搜索 -->
    <search-goods ref="searchGoods"></search-goods>
    <!-- 列表 -->
    <goods-list :tableData="tableData"></goods-list>
    <!-- 分页 -->
    <div class="footer">
      <div>
        <el-checkbox v-model="checked"></el-checkbox>
        <el-button type="primary" size="mini" style="margin-left:20px">批量下架</el-button>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="[1, 2, 3]"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import searchGoods from './components/searchGoods'
import goodsList from './components/goodsList'
export default {
  components: { searchGoods, goodsList },
  data () {
    return {
      checked: false,
      pagination: {
        currentPage: 1,
        pageSize: 1
      },
      tableData: [
        { id: 1, code: '001', name: '双皮奶', class: '甜点', time: '2020-2-29 12:00:00', img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { id: 1, code: '001', name: '双皮奶', class: '甜点', time: '2020-2-29 12:00:00', img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { id: 1, code: '001', name: '双皮奶', class: '甜点', time: '2020-2-29 12:00:00', img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { id: 1, code: '001', name: '双皮奶', class: '甜点', time: '2020-2-29 12:00:00', img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { id: 1, code: '001', name: '双皮奶', class: '甜点', time: '2020-2-29 12:00:00', img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' }
      ]
    }
  },
  created () {
    // 触发vuex,拿到数据
    this.$store.dispatch('getGoods')
  },
  methods: {
    handleSizeChange (val) {
      console.log(val)
      this.pagination.currentPage = 1
      this.pagination.pageSize = val
      this.init()
    },
    handleCurrentChange (val) {
      console.log(val)
      this.pagination.currentPage = val
      this.init()
    },
    init () {
      let data = { ...this.$refs.searchGoods.searchData, ...this.pagination }
      data = JSON.stringify(data)
      this.$alert(data, '请求列表的参数', {
        confirmButtonText: '确定',
        callback: action => {}
      })
    }
  }
}
</script>
