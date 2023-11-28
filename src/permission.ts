import router from '../src/router' //导入路由
// 白名单,
const whiteList = ['/home', '/ArticleDetails', '/login', '/applylist', '/rules', '/about', '/main', '/admin', '/spefevue']; //定义白名单

// 路由守卫
router.beforeEach((to, from, next) => {
    console.log('toooo',to);
    console.log('from',from);
    if (to.name === "home") {
        next('FirstPage');
    } else {
        next();
    }
});
router.afterEach(() => {
    console.log('路由加载完成！');
});
