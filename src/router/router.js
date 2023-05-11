import VueRouter from 'vue-router'

import { Notification } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

const routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/test'),
        meta: {
            title: '测试页面'
        }
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import('../views/signin'),
        meta: {
            title: '用户注册'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login'),
        meta: {
            title: '用户登录'
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile'),
        meta: {
            title: '个人中心'
        }
    },
    {
        path: '/zone',
        name: 'zone',
        component: () => import('../views/zone'),
        meta: {
            title: '我的空间'
        }
    },
    {
        path: '/container',
        name: 'container',
        component: () => import('../views/container'),
        meta: {
            title: '容器详情'
        }
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// FIXME: 全局路由守卫
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