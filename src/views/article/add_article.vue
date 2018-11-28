<template>
  <div class="contain">
    <h3>编辑文章
    </h3>
    <div class="scroll_contain">
      <el-form ref="articleData" label-position="left" :rules="rules" label-width="80px" :model="articleData">
        <el-form-item label="分类" prop="classify">
          <el-input v-model="articleData.classify"></el-input>
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
        <el-form-item label="来源" prop="source">
          <el-input v-model="articleData.source"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" prop="content">
          <el-input type="textarea" v-model="articleData.content"></el-input>
        </el-form-item>
        <!-- 图片 -->
        <!-- <form action="http://localhost:3000/api/article/upload" method="post" enctype="multipart/form-data">
          <input type="file" name="file"/>
          <input type="submit" value="ok"/>
        </form> -->
        <el-form-item class="up_img_contain" label="上传图片">
          <el-upload class="upload_contain"
            action = "http://www.jerryzw.top/api/article/upload"
            :show-file-list = "false"
            :before-upload = "beforeUpload"
            :on-success = "successUpload"
            :multiple = 'false'
            :limit = '1'
          >
            <img class="view_img" v-if="imgUrl" :src="imgUrl" alt="">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-button v-if="!this.$route.query._id" class="submit" @click="submitData('articleData')" type="primary" size="small">提交</el-button>
        <el-button v-if="this.$route.query._id" class="submit" @click="editData('articleData')" type="primary" size="small">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      imgUrl: '',
      articleData: {
        classify: '',
        title: '',
        author: '',
        createAt: '',
        source: '',
        content: '',
        imgUrl: ''
      },
      rules: {
        classify: [
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
        source: [
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
  mounted () {
    this.getArticles()
  },
  methods: {
    ...mapActions('article', ['addArticle', 'getArticleDetail', 'editArticle']),
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const is2m = file.size
      if (!isJPG) {
        this.$message.error('图片只能是JPG格式')
      }
      if (!is2m) {
        this.$message.error('图片大小不能超过2M')
      }
      return isJPG && is2m
    },
    successUpload (res, file) {
      console.log(res)
      console.log(file.raw)
      this.articleData.imgUrl = res.filename
      this.imgUrl = res.filename
    },
    async submitData (articleData) {
      this.$refs[articleData].validate(async (valid) => {
        if (valid) {
          let res = await this.addArticle(this.articleData)
          if (res.code === 200) {
            this.$router.push('article')
          }
        } else {
          console.log('error submit')
          return false
        }
      })
    },
    async getArticles () {
      let params = {
        id: this.$route.query._id
      }
      let res = await this.getArticleDetail({ params })
      if (res.code === 200) {
        this.articleData = res.data
      }
    },
    async editData () {
      let res = await this.editArticle(this.articleData)
      console.log(res)
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
.upload_contain .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.upload_contain .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
.up_img_contain {
  width: 80px;
  height: 80px;
  line-height: 80px;
  label {
    line-height: 80px;
  }
}
.view_img {
  width: 80px;
  height: 80px;
}
</style>
