import VueRouter from 'vue-router'

import { Notification } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

const routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        name: 'test',
        path: '/test',
        component: () => import('../views/test'),
        meta: {
            title: '测试页面'
        }
    },
    {
        name: 'signin',
        path: '/signin',
        component: () => import('../views/signin'),
        meta: {
            title: '用户注册'
        }
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/login'),
        meta: {
            title: '用户登录'
        }
    },
    {
        path: '/zone',
        component: () => import('../views/zone'),
        meta: {
            title: '我的空间'
        },
    },
    {

        path: '/manage',
        component: () => import('../views/zone-list'),
        meta: {
            title: '空间管理'
        },
    },
    {
        path: '/manage/info/:zid',
        component: () => import('../views/zone-info'),
        meta: {
            title: '空间资料'
        },
    },
    {
        name: 'profile',
        path: '/profile',
        component: () => import('../views/profile'),
        meta: {
            title: '个人中心'
        }
    },
    {
        name: 'container',
        path: '/container/:cid',
        component: () => import('../views/container'),
        meta: {
            title: '容器详情'
        }
    },

    {

        path: '/item',
        component: () => import('../views/item'),
        meta: {
            title: '物品添加页'
        }
    },
    {

        path: '/category',
        component: () => import('../views/category'),
        meta: {
            title: '种类管理'
        }
    },
    {

        path: '/application',
        component: () => import('../views/application'),
        meta: {
            title: '应用'
        }
    },
    {

        path: '/search',
        component: () => import('../views/search'),
        meta: {
            title: '查找物品'
        }
    },

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// FIX: 全局路由守卫
// router.beforeEach((to, from, next) => {
//     const isLoggedIn = localStorage.getItem('authToken')
//     // 如果用户已登录（或者前往的是登录或注册页面），则允许访问
//     if (isLoggedIn || to.name === 'login' || to.name === 'signin') {
//         next();
//     } else {
//         // 否则跳转到登录页面
//         Notification({   
//             message: '请先登录',
//             offset: 115,
//             type: 'warning',
//             duration: 2000
//           })
//         next('/login');
//     }
// })

export default router