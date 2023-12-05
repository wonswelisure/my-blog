import Layout from '@/layout/index.vue'
export default {
    path: '/wosls',
    component: Layout,
    children: [
        {
            path: '/wosls/about',
            component: () => import('../../views/AboutView.vue'),
        },
        {
            path: '/wosls/main',
            component: () => import('../../views/HomeView.vue'),
        }
    ]
}