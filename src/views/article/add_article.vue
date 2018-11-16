<template>
  <div class="contain">
    <h3>编辑文章
    </h3>
    <div class="scroll_contain">
      <el-form ref="articleData" label-position="left" :rules="rules" label-width="80px" :model="articleData">
        <el-form-item label="分类" prop="type">
          <el-input v-model="articleData.type"></el-input>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="articleData.title"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input v-model="articleData.author"></el-input>
        </el-form-item>
        <el-form-item label="发布时间" prop="createAt">
          <el-input v-model="articleData.createAt"></el-input>
        </el-form-item>
        <el-form-item label="来源" prop="from">
          <el-input v-model="articleData.from"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" prop="content">
          <el-input type="textarea" v-model="articleData.content"></el-input>
        </el-form-item>
        <!-- 图片 -->
        <form action="http://127.0.0.1:3000/upload/upload" method="post" enctype="multipart/form-data">
          <input type="file" name="file"/>
          <input type="submit" value="ok"/>
        </form>
        <el-button class="submit" @click="submitData('articleData')" type="primary" size="small">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      articleData: {
        type: '',
        title: '',
        author: '',
        createAt: '',
        from: '',
        content: ''
      },
      rules: {
        type: [
          { required: true, message: '请输入分类', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在2到10个字符', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在2到20个字符', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '请输入作者', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在2到20个字符', trigger: 'blur' }
        ],
        createAt: [
          { required: true, message: '请输入时间', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在2到20个字符', trigger: 'blur' }
        ],
        from: [
          { required: true, message: '请输入来源', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在2到20个字符', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' },
          { min: 1, message: '至少1个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions('article', ['addArticle']),
    submitData (articleData) {
      this.$refs[articleData].validate((valid) => {
        console.log(valid)
        if (valid) {
          let res = this.addArticle(this.articleData)
          console.log(res)
        } else {
          console.log('error submit')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" type="text/css">
.contain {
  text-align: center;
  padding-top: 40px;
  height: 100%;
  width: 100%;
  background-color: #eee;
  .scroll_contain {
    height: 95%;
    overflow-y: auto;
  }
  h3 {
    margin-top: 10px;
    padding-left: 20px;
    font-size: 20px;
    text-align: left;
  }
  .el-form{
    margin: 0 auto;
    margin-top: 20px;
    width: 80%;
    .el-input__inner{
      background-color: transparent;
    }
    .el-input{
      width: 240px;
    }
    .el-form-item__content{
      text-align: left;
    }
  }
}
</style>
