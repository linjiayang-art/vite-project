import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import useStore from "@/store";
export const Layout = () => import('@/layout/index.vue')

// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
     {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
          {
            path: 'dashboard',
            component: () => import('@/views/dashboard/index.vue'),
            name: 'Dashboard',
            meta: { title: 'dashboard', icon: 'homepage', affix: true }
          },
          {
            path: '401',
            component: () => import('@/views/error-page/401.vue'),
            meta: { hidden: true }
          },
          {
            path: '/404',
            component: () => import('@/views/error-page/404.vue'),
            meta: { hidden: true }
        },
        ]
      }
  
]

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes as RouteRecordRaw[],
    // 刷新时，滚动条位置还原
    scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router