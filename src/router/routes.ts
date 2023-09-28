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
        meta: {
          title: '工作站',
          hidden: false,
          icon: 'icon-instagram',
          breadcrumb: false,
        },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录', hidden: true, breadcrumb: false },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/:pathmatch(.*)*',
    name: 'NotFound',
    meta: { title: 'Not Found', hidden: true, breadcrumb: false },
    component: () => import('@/views/exception/404/index.vue'),
  },
]

export const asyncRoutes = [
  {
    path: '/list',
    name: 'List',
    meta: {
      title: '列表页',
      hidden: false,
      icon: 'icon-orderedlist',
      breadcrumb: true,
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/list/search-table',
        name: 'SearchTable',
        meta: { title: '查询表格', hidden: false, breadcrumb: true },
        component: () => import('@/views/list/search-table/index.vue'),
      },
      {
        path: '/list/card',
        name: 'Card',
        meta: { title: '卡片列表', hidden: false, breadcrumb: true },
        component: () => import('@/views/list/card/index.vue'),
      },
    ],
  },
  {
    path: '/form',
    name: 'Form',
    meta: {
      title: '表单页',
      hidden: false,
      icon: 'icon-golden-fill',
      breadcrumb: true,
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/form/step',
        name: 'Step',
        meta: { title: '分步表单', hidden: false, breadcrumb: true },
        component: () => import('@/views/form/step/index.vue'),
      },
      {
        path: '/form/group',
        name: 'Group',
        meta: { title: '分组表单', hidden: false, breadcrumb: true },
        component: () => import('@/views/form/group/index.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      title: '个人中心',
      hidden: false,
      icon: 'icon-user',
      breadcrumb: true,
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/user/user-info',
        name: 'UserInfo',
        meta: { title: '用户信息', hidden: false, breadcrumb: true },
        component: () => import('@/views/user/user-info/index.vue'),
      },
      {
        path: '/user/setting',
        name: 'Setting',
        meta: { title: '用户设置', hidden: false, breadcrumb: true },
        component: () => import('@/views/user/setting/index.vue'),
      },
    ],
  },
  {
    path: '/result',
    name: 'Result',
    meta: {
      title: '结果页',
      hidden: false,
      icon: 'icon-check-square',
      breadcrumb: true,
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/result/success',
        name: 'Success',
        meta: { title: '成功页面', hidden: false, breadcrumb: true },
        component: () => import('@/views/result/success/index.vue'),
      },
      {
        path: '/result/error',
        name: 'Error',
        meta: { title: '错误页面', hidden: false, breadcrumb: true },
        component: () => import('@/views/result/error/index.vue'),
      },
    ],
  },
  {
    path: '/exception',
    name: 'Exception',
    meta: {
      title: '异常页',
      hidden: false,
      icon: 'icon-aim',
      breadcrumb: true,
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/exception/403',
        name: 'HttpError',
        meta: { title: '403', hidden: false, breadcrumb: true },
        component: () => import('@/views/exception/403/index.vue'),
      },
      {
        path: '/exception/404',
        name: 'NotFound',
        meta: { title: '404', hidden: false, breadcrumb: true },
        component: () => import('@/views/exception/404/index.vue'),
      },
      {
        path: '/exception/500',
        name: 'ServerError',
        meta: { title: '500', hidden: false, breadcrumb: true },
        component: () => import('@/views/exception/500/index.vue'),
      },
    ],
  },
  {
    path: '/component',
    name: 'Component',
    redirect: '/component/draggbale',
    meta: {
      title: '常用组件',
      hidden: false,
      icon: 'icon-group',
      breadcrumb: true,
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/component/draggbale',
        name: 'Draggable',
        meta: { title: '拖拽组件', hidden: false, breadcrumb: true },
        component: () => import('@/views/components/draggable/index.vue'),
      },
      {
        path: '/component/waterfall',
        name: 'Waterfall',
        meta: { title: '瀑布流组件', hidden: false, breadcrumb: true },
        component: () => import('@/views/components/waterfall/index.vue'),
      },
      {
        path: '/component/map',
        name: 'Map',
        meta: { title: '地图组件', hidden: false, breadcrumb: false },
        component: () => import('@/views/components/map/index.vue'),
      },
      {
        path: '/component/range',
        name: 'Range',
        meta: { title: '范围选择组件', hidden: false, breadcrumb: true },
        component: () => import('@/views/components/range/index.vue'),
      },
      {
        path: '/component/watermark',
        name: 'Watermark',
        meta: { title: '水印组件', hidden: false, breadcrumb: true },
        component: () => import('@/views/components/watermark/index.vue'),
      },
      {
        path: '/component/contextmenu',
        name: 'ContextMenu',
        meta: { title: '右键菜单组件', hidden: false, breadcrumb: true },
        component: () => import('@/views/components/contextmenu/index.vue'),
      },
      {
        path: '/component/countdown',
        name: 'CountDown',
        meta: { title: '倒计时组件', hidden: false, breadcrumb: true },
        component: () => import('@/views/components/countdown/index.vue'),
      },
    ],
  },
  {
    path: '/feature',
    name: 'Feature',
    redirect: '/feature/barcode',
    meta: {
      title: '常用功能',
      hidden: false,
      icon: 'icon-database-fill',
      breadcrumb: true,
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/feature/barcode',
        name: 'Barcode',
        meta: { title: '条形码', hidden: false, breadcrumb: true },
        component: () => import('@/views/feature/barcode/index.vue'),
      },
      {
        path: '/feature/qrcode',
        name: 'Qrcode',
        meta: { title: '二维码', hidden: false, breadcrumb: true },
        component: () => import('@/views/feature/qrcode/index.vue'),
      },
    ],
  },
]
