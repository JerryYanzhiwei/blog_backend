<template>
  <div class="contain">
    <h3>
      文章列表
      <!-- <router-link to='add_article'>添加文章</router-link> -->
      <el-button @click="go('add_article')" type="info" plain>添加文章</el-button>
    </h3>
    <div class="form_contain">
      <el-table
      :data="tableData"
      stripe
      border
      style="width: 64%">
        <!-- 分类 -->
        <el-table-column
          prop="classify"
          label="分类"
          width="150">
        </el-table-column>
        <!-- 标题 -->
        <el-table-column
          prop="title"
          label="标题"
          width="455">
        </el-table-column>
        <!-- 作者 -->
        <el-table-column
          prop="author"
          label="作者"
          width="120">
        </el-table-column>
        <!-- 发布时间 -->
        <el-table-column
          prop="createAt"
          label="发布时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="source"
          label="来源"
          width="120">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="medium">查看</el-button>
            <el-button @click="handleDelete(scope.row)" type="text" size="medium">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @current-change='pageChange'
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.getArticles()
  },
  methods: {
    ...mapActions('article', ['getArticle', 'deleteArticle']),
    handleClick (data) {
      this.$router.push({
        path: 'add_article',
        query: {
          _id: data._id
        }
      })
    },
    go (url) {
      this.$router.push(url)
    },
    async handleDelete (data) {
      let res = await this.deleteArticle({
        id: data._id
      })
      if (res.code === 200) {
        this.$message.success('删除成功')
        this.$router.go(0)
      }
    },
    pageChange (page) {
      console.log(page)
    },
    async getArticles () {
      let res = await this.getArticle()
      this.tableData = res.data
    }
  }
}
</script>

<style lang="scss" type="text/css">
  .contain {
    text-align: center;
    padding-top: 40px;
    height: 100%;
    background-color: #eee;
    h3 {
      margin-top: 10px;
      padding-left: 20px;
      font-size: 20px;
      text-align: left;
      .el-button {
        margin-right: 20px;
        float: right;
        font-size: 14px;
        // color: #409EFF;
      }
    }
    .form_contain {
      margin-top: 20px;
      .el-table{
        margin: 0 auto;
        th, td {
          text-align: center;
        }
      }
    }
    .pagination{
      margin-top: 20px;
      button, li {
        background-color: transparent;
      }
    }
  }
</style>
