<template>
  <div class="contain">
    <h3>文章列表</h3>
    <div class="form_contain">
      <el-table
      :data="tableData"
      border
      style="width: 80%">
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
          width="280">
        </el-table-column>
        <!-- 作者 -->
        <el-table-column
          prop="author"
          label="作者"
          width="120">
        </el-table-column>
        <!-- 发布时间 -->
        <el-table-column
          prop="createTime"
          label="发布时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="source"
          label="来源"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
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
export default {
  data () {
    return {
      tableData: [
        {
          classify: '分类',
          title: '这是一个标题',
          author: '作者',
          createTime: '发布时间',
          source: '来源'
        }
      ]
    }
  },
  methods: {
    handleClick (data) {
      console.log(data)
    },
    pageChange (page) {
      console.log(page)
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
