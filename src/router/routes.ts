export const defaultRoutes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: { title: '工作站', hidden: false, icon: 'icon-instagram' },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录', hidden: true },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/:pathmatch(.*)*',
    name: 'NotFound',
    meta: { title: 'Not Found', hidden: true },
    component: () => import('@/views/result/404/index.vue'),
  },
]

export const asyncRoutes = [
  {
    path: '/list',
    name: 'List',
    meta: { title: '列表页', hidden: false, icon: 'icon-orderedlist' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/list/search-table',
        name: 'SearchTable',
        meta: { title: '查询表格', hidden: false },
        component: () => import('@/views/list/search-table/index.vue'),
      },
      {
        path: '/list/card',
        name: 'Card',
        meta: { title: '卡片列表', hidden: false },
        component: () => import('@/views/list/card/index.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'User',
    meta: { title: '个人中心', hidden: false, icon: 'icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/user/user-info',
        name: 'UserInfo',
        meta: { title: '用户信息', hidden: false },
        component: () => import('@/views/user/user-info/index.vue'),
      },
      {
        path: '/user/setting',
        name: 'Setting',
        meta: { title: '用户设置', hidden: false },
        component: () => import('@/views/user/setting/index.vue'),
      },
    ],
  },
  {
    path: '/exception',
    name: 'Exception',
    meta: { title: '异常页', hidden: false, icon: 'icon-aim' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/exception/403',
        name: 'HTTPERROR',
        meta: { title: '403', hidden: false },
        component: () => import('@/views/result/403/index.vue'),
      },
      {
        path: '/exception/404',
        name: 'NotFound',
        meta: { title: '404', hidden: false },
        component: () => import('@/views/result/404/index.vue'),
      },
      {
        path: '/exception/500',
        name: 'ServerError',
        meta: { title: '500', hidden: false },
        component: () => import('@/views/result/500/index.vue'),
      },
    ],
  },
]
