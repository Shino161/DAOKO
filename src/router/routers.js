import main from '@/components/main.vue'
export default [
  {
    path: '/',
    name: 'home',
    redirect: '/home/home-nav',
    component: main,
    meta: {
      title: '首页',
      icon: 'el-icon-setting',
    },
    children: [
      {
        path: '/home/home-nav',
        name: 'home-nav',
        meta: {
          title: '导航',
        },
        component: () => import('@/view/home/home-nav.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/view/home/home-nav.vue'),
    meta: {
      title: '啊啊啊',
      icon: 'el-icon-setting',
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/view/home/home-nav.vue'),
    meta: {
      title: '啊啊啊',
      icon: 'el-icon-setting',
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/view/home/home-nav.vue'),
    meta: {
      title: '啊啊啊',
      icon: 'el-icon-setting',
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/view/home/home-nav.vue'),
    meta: {
      title: '啊啊啊',
      icon: 'el-icon-setting',
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/view/home/home-nav.vue'),
    meta: {
      title: '啊啊啊',
      icon: 'el-icon-setting',
    },
  },
]
