# DAOKO

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
[![Badge](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu/#/zh_CN)

## 简介
一个开箱即用的webpack4模版

## Q&A
Q:为什么已经有这么多轮子了还要造轮子？  
A:造轮子是人类的本质~~复读~~

Q:这个轮子有什么优点？  
A:这个轮子没有什么优点，仅仅赶时髦用了webpakc4且没有集成很多代码~~自己动手写~~

## 安装运行
```bush
npm i
npm run dev
```

## 测试环境打包
```bush
npm run build:dev
```

## 生产环境打包
```bush
npm run build:prod
```

## 模版结构
```shell
.
├── build  项目构建配置
├── dist  项目输出
├── config  开发相关配置
└── src
    ├── api  接口请求
    └── assets  项目静态资源
        ├── icons  自定义图标资源
        └── images  图片资源
    ├── components  公共组件
    ├── config  项目运行配置
    ├── libs  封装工具函数
    ├── router  路由配置
    ├── store  Vuex配置
    ├── view  页面文件
```

