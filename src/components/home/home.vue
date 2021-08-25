<template>
   <el-container class="container">
    <el-header class="header">
      <div id="word">Dandelion控制台 1.0.0</div>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#ffffff3b"
          text-color="#1a1a1a"
          active-text-color="#409EFF"
          :router="true"
        >
          <el-menu-item>
            <i class="el-icon-s-custom"></i>
            <span slot="title">首页</span>
           </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-grid"></i>
              <span>配置管理</span>
            </template>
            <el-menu-item index="/dandelion/config/list">配置列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-operation"></i>
              <span>断言管理</span>
            </template>
            <el-menu-item index="/dandelion/predicate/list">断言列表</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-receiving"></i>
              <span>过滤管理</span>
            </template>
            <el-menu-item index="/home/filter">过滤列表</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-help"></i>
              <span>流控管理</span>
            </template>
            <el-menu-item index="/home/regular">流控规则</el-menu-item>
          </el-submenu>
          <el-menu-item>
            <i class="el-icon-finished"></i>
            <span slot="title">负载均衡</span>
           </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view/>
        <!-- 要在这里写一个router-view，不然会替换整个页面（App.vue）,user组件在home组件中出现 -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
}
</script>

<style>
  .container {
  height: 100%;
}
.header {
  background-color: #000000;
}
.aside {
  background-color: rgb(240, 240, 240);
}
.main {
  background-color: #ffffff;
  height: 100%;

}
.middle {
  text-align: center;
}
#word{
  margin: 0 auto;
  height: 100%;
  width: 100%;
  color: #ffffff;
  font-size: 40px;
}
</style>