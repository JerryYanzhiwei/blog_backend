<template>
  <div class="inxdex_contain">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#20272C"
          text-color="#fff"
          active-text-color="#ffd04b">
          <router-link to="summary">
            <el-menu-item index="1">
              <span slot="title">概览</span>
            </el-menu-item>
          </router-link>
          <router-link to="article">
            <el-menu-item index="2">
                <span slot="title">文章</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
      <el-col class="content" :span="21">
        <el-row class="header">
          <el-col class="userName" :span="5">
            {{userInfo.loginUser}}
          </el-col>
          <el-col :offset="16" :span="3">
            登出
          </el-col>
        </el-row>
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState('user', ['userInfo'])
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped tyepe="text/css">
  .inxdex_contain{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .tac{
      height: 100%;
      & > div{
        height: 100%;
        ul {
          height: 100%;
          text-align: center;
          border: 0;
          padding: 0 5px;
          li {
            padding: 0!important;
            border-bottom: 1px solid #34414a;
          }
        }
      }
    }
    .header{
      width: 100%;
      float: right;
      height: 40px;
      background-color: #20272C;
      color: #fff;
      display: flex;
      align-items: center;
      & > div {
        text-align: center;
      }
      .userName{
        padding-left: 20px;
        text-align: left;
      }
    }
  }
</style>
