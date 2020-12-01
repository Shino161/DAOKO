<style scoped lang="less">
.layout {
  // border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout-tab-bar {
  height: 36px;
}
.layout-content {
  overflow: auto;
  &-breadcrumb {
    padding: 10px;
  }
  &-view {
    overflow: auto;
    padding: 20px;
    background-color: #fff;
    height: calc(~'100vh - 108px');
  }
}
.logo-con {
  display: flex;
  color: #fff;
  padding: 10px 40px 10px 20px;
  align-content: center;
  justify-content: space-between;
  background-color: rgb(26, 139, 204);
  img {
    width: 42px;
    height: 42px;
  }
  span {
    font-size: 20px;
    line-height: 40px;
    font-family: 'PingFangSC-Regular', sans-serif;
  }
}
.header-avatar {
  float: right;
}
</style>
<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto', width: '200px'}">
      <div class="logo-con">
        <span>Vue框架</span>
      </div>
      <el-menu  width="auto" accordion :open-names="openName" :active-name="$route.name">
        <div v-for="(c, index) in $router.options.routes">
          <el-menu-item
            :name="c.name"
            v-if="!c.children"
            :to="c.path"
            :key="index"
          >{{c.meta.title}}</el-menu-item>
          <el-submenu :name="c.name" v-for="(s, index) in c.children" :key="index" v-if="c.children">
            <template slot="title">
              <Icon :type="c.meta.icon"></Icon>
              {{c.meta.title}}
            </template>
            <el-menu-item
              :name="i.name"
              v-for="(i, subIndex) in c.children"
              v-if="!i.meta.hideOnSideMenu"
              :to="i.path"
              :key="subIndex"
            >{{i.meta.title}}</el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
    </el-aside>
    <el-container :style="{marginLeft: '200px'}">
      <el-header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <div class="header-avatar">
          <Avatar icon="ios-person"/>
          <el-dropdown trigger="click" style="margin-left: 20px" >
            <a href="javascript:void(0)">
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <el-dropdown-menu slot="list">
              <el-dropdown-item name="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
        <el-breadcrumb class="layout-content-breadcrumb">
          <el-breadcrumb-item
            :to="item.path"
            v-for="(item, index) in $route.matched"
            :key="index"
          >{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      <el-main class="layout-content">
      <div class="layout-content-view">
        <router-view/>
      </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    openName() {
      return [this.$route.matched[0].name]
    },
  },
  mounted() {},
}
</script>
