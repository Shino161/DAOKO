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
    height: calc(~"100vh - 108px");
  }
}
.logo-con {
  display: flex;
  color: #fff;
  padding: 10px 40px 10px 20px;
  align-content: center;
  justify-content: space-between;
  background-color: #353b47;
  img {
    width: 42px;
    height: 42px;
  }
  span {
    font-size: 20px;
    line-height: 40px;
    font-family: "PingFangSC-Regular", sans-serif;
  }
}
.header-avatar {
  float: right;
}
</style>
<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <div class="logo-con">
        <span>碧蓝幻想骑空士管理系统</span>
      </div>
      <Menu theme="dark" width="auto" accordion :open-names="openName" :active-name="$route.name">
        <Submenu :name="s.name" v-for="(s, index) in $router.options.routes" :key="index">
          <template slot="title">
            <Icon :type="s.meta.icon"></Icon>
            {{s.meta.title}}
          </template>
          <MenuItem
            :name="i.name"
            v-for="(i, subIndex) in s.children"
            v-if="!i.meta.hideOnSideMenu"
            :to="i.path"
            :key="subIndex"
          >{{i.meta.title}}</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <div class="header-avatar">
          <Avatar icon="ios-person"/>
          <Dropdown trigger="click" style="margin-left: 20px" @on-click="handleDropDown">
            <a href="javascript:void(0)">
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="logout">退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>
      <Content class="layout-content">
        <Breadcrumb class="layout-content-breadcrumb">
          <BreadcrumbItem
            :to="item.path"
            v-for="(item, index) in $route.matched"
            :key="index"
          >{{item.meta.title}}</BreadcrumbItem>
        </Breadcrumb>
        <div class="layout-content-view">
          <router-view/>
        </div>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    openName() {
      return [this.$route.matched[0].name]
    }
  },
  mounted() {
  }
};
</script>