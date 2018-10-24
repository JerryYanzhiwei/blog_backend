<template>
  <div class="inxdex_contain">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#6f5499"
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
        <div class="header">
          id
        </div>
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    goLink (url) {
      this.$router.push(`/index${url}`)
    }
  }
}
</script>

<style lang="scss" scoped tyepe="text/css">
  .inxdex_contain{
    width: 100%;
    height: 100%;
    .tac{
      height: 100%;
      & > div{
        height: 100%;
        ul {
          height: 100%;
          text-align: center;
          border: 0;
        }
      }
    }
    .header{
      width: 100%;
      float: right;
      height: 40px;
      background-color: #222;
      color: #fff;
    }
  }
</style>
