import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: '视频工具',
      path: '/video',
      component: './video',
      routes: [
        {
          name: '视频合并',
          path: '/video/videoMerge',
          component: './video/components/videoMerge',
        },
      ],
    },
  ],
  npmClient: 'yarn',
});
