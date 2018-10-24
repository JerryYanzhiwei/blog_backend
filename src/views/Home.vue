<template>
  <div class="login_contain">
    <div class="login_box">
      <h3>登录</h3>
      <el-form label-position="right" label-width="80px" :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn_contain">
        <van-button class="register_btn" size="small" :loading="openLoading" @click="register" plain type="primary">注册</van-button>
        <van-button class="login_btn" type="primary" size="small">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      openLoading: false, // 是否开启用户注册的loading状态
      form: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('user', ['registerAPI']),
    async register () {
      let nameReg = /[a-zA-Z0-9]{3,10}/
      if (!nameReg.test(this.form.userName) || !nameReg.test(this.form.password)) {
        this.$message('请填写用户名或密码')
        return
      }
      this.openLoading = true
      let params = {
        userName: this.form.userName,
        password: this.form.password
      }
      let res = await this.registerAPI(params)
      if (res.code === 200) {
        this.$message({
          message: res.message,
          type: 'success'
        })
        this.$router.push('/index')
      } else {
        if (res.message.errmsg.indexOf('userName_1') !== -1) {
          this.$message({
            message: '用户名已被占用',
            type: 'warning'
          })
          this.openLoading = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped type="text/css">
  .login_contain {
    width: 100%;
    height: 100%;
    background: url('../assets/img/bgm.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .login_box {
      width: 360px;
      height: 240px;
      background-color: #fff;
      border: 2px solid #eee;
      border-radius: 10px;
      position: absolute;
      top: 50%;
      margin-top: -120px;
      left: 50%;
      margin-left: -180px;
      h3 {
        text-align: center;
        font-size: 20px;
        margin-top: 10px;
      }
      .el-form{
        padding: 20px;
        padding-right: 40px;
        padding-bottom: 0;
      }
      .btn_contain{
        text-align: right;
        padding-right: 40px;
        .register_btn{
          margin-right: 10px;
        }
      }
    }
  }
</style>
