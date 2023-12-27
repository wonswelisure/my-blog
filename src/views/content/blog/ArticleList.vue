<!--
 * @Author: wosls
 * @Date: 2023-09-20 16:50:44
 * @LastEditors: wosls
 * @LastEditTime: 2023-12-27 18:06:28
 * @FilePath: \myblog\src\views\content\blog\ArticleList.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div id="article-details">
        <blog-header></blog-header>
        <div class="list-container row">
            <div v-for="info in listInfomation" class="col-sm-6 col-md-4 col-lg-3 ">
                <div class="thumbnail" style="height: 337px;">
                    <a class="name" :href="info.href" :title="info.mainTitles" target="_blank">
                        {{ info.name }}</a>
                    <div class="caption">
                        <h3>
                            <a href="" :title="info.mainTitles" target="_blank">{{ info.h3Content }}
                                <br><small>{{ info.smallCont }}</small></a>
                        </h3>
                        <p>{{ info.pContent }}</p>
                    </div>
                </div>
            </div>
            <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background"
                layout="->, total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
                <to-top></to-top>
        </div>

    </div>
</template>
  
<script lang="ts" setup>
import { onMounted, reactive, ref, } from 'vue'
import BlogHeader from '../../components/BlogHeader.vue'
import ToTop from '../../components/ToTop.vue'
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}
const listInfomation = reactive([{
    name: '百度',
    mainTitles: '全球最大的中文搜索引擎、最大的中文网站。',
    href: 'https://www.baidu.com',
    h3Content: 'Baidu',
    smallCont: '全球最大的中文搜索引擎',
    pContent: '百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
},
{
    name: 'Bootstrap网站实例',
    mainTitles: 'Bootstrap 优站精选',
    href: 'http://www.youzhan.org/',
    h3Content: '优站精选',
    smallCont: 'Bootstrap网站实例',
    pContent: 'Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。'
},
{
    name: 'webpack',
    mainTitles: 'Webpack 是前端资源模块化管理和打包工具',
    href: 'https://www.webpackjs.com/',
    h3Content: 'Webpack',
    smallCont: '前端资源模块化管理和打包工具',
    pContent: 'Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。'
},
{
    name: 'react',
    mainTitles: 'React - 用于构建用户界面的 JavaScript 框架',
    href: 'https://www.reactjscn.com/',
    h3Content: 'React',
    smallCont: '用于构建用户界面的 JavaScript 框架',
    pContent: 'React 起源于 Facebook 的内部项目，是一个用于构建用户界面的 JavaScript 库。'
},
{
    name: 'TypeScript手册',
    mainTitles: 'TypeScript 中文手册',
    href: 'https://typescript.bootcss.com/',
    h3Content: 'TypeScript',
    smallCont: '中文手册',
    pContent: 'TypeScript 是由微软开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。'
},
{
    name: 'jQuery文档',
    mainTitles: 'jQuery API 中文文档/手册',
    href: 'https://www.jquery123.com/',
    h3Content: 'jQuery API',
    smallCont: '中文手册',
    pContent: '根据最新的 jQuery 1.11.x 和 2.1.x 版本翻译的 jQuery API 中文文档/手册。'
},
{
    name: 'Next.js',
    mainTitles: 'Next.js 是一个轻量级的 React 服务端渲染应用框架。',
    href: 'https://www.nextjs.cn/',
    h3Content: 'Next.js',
    smallCont: '中文文档',
    pContent: 'Next.js 是一个轻量级的 React 服务端渲染应用框架。'
},
{
    name: 'Babel',
    mainTitles: 'Babel 是一个 JavaScript 编译器。',
    href: 'https://www.babeljs.cn',
    h3Content: 'Babel',
    smallCont: '是一个 JavaScript 编译器。',
    pContent: 'Babel 是一个 JavaScript 编译器。Babel 通过语法转换器支持最新版本的 JavaScript 语法。'
},
{
    name: 'Node.js',
    mainTitles: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。',
    href: 'https://www.nodeapp.cn/',
    h3Content: 'Node.js',
    smallCont: '中文文档 / 手册',
    pContent: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。'
},
{
    name: 'Yarn',
    mainTitles: 'Yarn 是一个快速、可靠、安全的依赖管理工具。是 NPM 的替代品。',
    href: 'https://yarn.bootcss.com/',
    h3Content: 'Yarn',
    smallCont: '中文手册',
    pContent: 'Yarn 是一个快速、可靠、安全的依赖管理工具。是 NPM 的替代品。'
},
{
    name: 'NPM',
    mainTitles: 'NPM 中文文档',
    href: 'https://www.npmjs.cn/',
    h3Content: 'NPM',
    smallCont: '中文文档',
    pContent: 'NPM（node package manager）是 Node.js 世界的包管理器。NPM 可以让 JavaScript 开发者在共享代码、复用代码以及更新共享的代码上更加方便。'
},
{
    name: 'Vue.js',
    mainTitles: 'Vue.js - 渐进式 JavaScript 框架',
    href: 'https://vuejs.bootcss.com/',
    h3Content: 'Vue.js',
    smallCont: '中文文档',
    pContent: 'Vue.js - 是一套构建用户界面的渐进式框架。'
},
{
    name: 'Browsersync',
    mainTitles: 'Browsersync 浏览器同步测试工具',
    href: 'https://browsersync.bootcss.com/',
    h3Content: 'Browsersync',
    smallCont: '浏览器同步测试工具',
    pContent: 'Browsersync 浏览器同步测试工具，很容易与 Web 平台、构建工具和其他 Node.js 项目集成，替代了大量重复测试劳动。'
},
{
    name: 'Parcel',
    mainTitles: 'Parcel - 极速、零配置的 web 应用打包工具。',
    href: 'https://www.parceljs.cn/',
    h3Content: 'Parcel',
    smallCont: '中文文档',
    pContent: 'Parcel - 极速、零配置的 web 应用打包工具。'
},
{
    name: 'Lodash',
    mainTitles: 'Lodash 是最流行的 JavaScript 工具库。',
    href: 'https://www.lodashjs.com/',
    h3Content: 'Lodash',
    smallCont: 'JavaScript 工具库',
    pContent: 'Lodash 是一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库。比相同功能的 Underscore.js 使用更广泛。'
},
{
    name: 'Pro Git',
    mainTitles: 'Pro Git 中文版（第二版）让你从 Git 初学者成为 Git 专家',
    href: 'https://progit.bootcss.com/',
    h3Content: 'Pro Git',
    smallCont: 'Git 入门到专家指南',
    pContent: '>Pro Git 中文版（第二版）是一本详细的 Git 指南，主要介绍了 Git 的使用基础和原理，让你从 Git 初学者成为 Git 专家。'
},
{
    name: 'Bootstrap编码规范',
    mainTitles: 'Bootstrap 编码规范',
    href: 'https://codeguide.bootcss.com',
    h3Content: 'Bootstrap 编码规范',
    smallCont: 'by @mdo',
    pContent: 'Bootstrap 编码规范：编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范。'
},
{
    name: 'rollup.js',
    mainTitles: 'rollup.js 是新一代的 JavaScript 模块打包工具。',
    href: 'https://www.rollupjs.com',
    h3Content: 'Rollup',
    smallCont: '新一代的 JavaScript 模块打包工具',
    pContent: 'Rollup 是一个 JavaScript 模块打包工具，可以将小块代码编译成大块复杂的代码。Rollup 对 JavaScript 代码模块使用新的 ES6 标准化格式，如 CommonJS 和 AMD。'
},
{
    name: 'Preact',
    mainTitles: 'Preact - 一个只有 3kB 大小的 React 替代品，拥有与 React 相同的 API、组件和虚拟 DOM。',
    href: 'https://preact.bootcss.com/',
    h3Content: 'Preact',
    smallCont: 'React 轻量替代方案。',
    pContent: 'Preact - 一个只有 3kB 大小的 React 替代品，拥有与 React 相同的 API、组件和虚拟 DOM。'
},
{
    name: 'Underscore.js',
    mainTitles: 'Underscore.js 是一个 JavaScript 工具库',
    href: 'https://www.bootcss.com/p/underscore/',
    h3Content: 'Underscore.js',
    smallCont: 'JavaScript 工具库',
    pContent: 'Underscore.js是一个 JavaScript 工具库，它提供了一整套函数式编程的实用功能，弥补了 jQuery 没有实现的功能，同时又是 Backbone 必不可少的部分。'
},
{
    name: 'gulp.js',
    mainTitles: 'gulp.js - 基于流的自动化构建工具。',
    href: 'https://www.gulpjs.com.cn/',
    h3Content: 'gulp.js',
    smallCont: '基于流的自动化构建工具。',
    pContent: 'gulp.js - 基于流(stream)的自动化构建工具。Grunt 采用配置文件的方式执行任务，而 Gulp 一切都通过代码实现。'
},
{
    name: 'Grunt',
    mainTitles: 'Grunt 是基于 Node.js 的项目构建工具',
    href: 'http://www.gruntjs.net',
    h3Content: 'Grunt',
    smallCont: '项目构建工具',
    pContent: 'Grunt 是基于 Node.js 的项目构建工具。它可以自动运行你所设定的任务。Grunt 拥有数量庞大的插件，几乎任何你所要做的事情都可以用 Grunt 实现。'
},
{
    name: 'ESLint',
    mainTitles: 'ESLint 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具。ESLint 能够帮你轻松写出高质量的 JavaScript 代码。',
    href: 'https://eslint.bootcss.com',
    h3Content: 'ESLint',
    smallCont: 'JavaScript 代码检查工具',
    pContent: 'ESLint 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具。ESLint 能够帮你轻松写出高质量的 JavaScript 代码。'
},
{
    name: 'Sass',
    mainTitles: 'Sass 是一个成熟、稳定、强大的 CSS 扩展语言解析器。',
    href: 'https://www.sasscss.com',
    h3Content: 'Sass',
    smallCont: '最流行的 CSS 扩展语言解析器',
    pContent: 'Sass 是一个成熟、稳定、强大的 CSS 扩展语言解析器。'
},
{
    name: 'LESS',
    mainTitles: 'LESS 一种动态样式语言',
    href: 'https://www.bootcss.com/p/lesscss/',
    h3Content: 'LESS',
    smallCont: '一种动态样式语言',
    pContent: 'LESS 为 CSS 赋予了动态语言的特性，如变量、继承、运算、函数。LESS 既可以在客户端上运行 (支持 IE 6+、Webkit、Firefox)，也可以借助 Node.js 或者 Rhino 在服务端运行。'
},
{
    name: 'Handlebars',
    mainTitles: 'Handlebars 模板引擎',
    href: 'https://handlebars.bootcss.com',
    h3Content: 'Handlebars',
    smallCont: '一个书写高效率、语义化的模板引擎',
    pContent: 'Handlebars 是一个书写高效率、语义化的模板引擎，与 Mustache 模板兼容。'
},
{
    name: 'Stylus',
    mainTitles: 'Stylus -- CSS 预处理语言',
    href: 'https://stylus.bootcss.com/',
    h3Content: 'Stylus',
    smallCont: 'CSS 预处理语言',
    pContent: 'Stylus - 富于表现力、健壮、功能丰富的 CSS 预处理语言。'
},
{
    name: 'Pug',
    mainTitles: 'Pug - 健壮、灵活、功能丰富的 Node.js 模板引擎',
    href: 'https://pug.bootcss.com/api/getting-started.html',
    h3Content: 'Pug',
    smallCont: 'Node.js 模板引擎',
    pContent: 'Pug 是一款健壮、灵活、功能丰富的模板引擎，专门为 Node.js 平台开发。Pug 是由 Jade 改名而来。'
},
{
    name: 'Liquid',
    mainTitles: 'Liquid - Jekyll 的模板语言。',
    href: 'https://liquid.bootcss.com/',
    h3Content: 'Liquid',
    smallCont: 'Jekyll 的模板语言。',
    pContent: 'Liquid - 最流行的模板语言。Jekyll、Github Pages 都在用。'
},
{
    name: 'Zepto.js',
    mainTitles: 'Zepto.js 是一个轻量级、兼容 jQuery 的 JavaScript 工具库',
    href: 'https://zeptojs.bootcss.com/',
    h3Content: 'Zepto.js',
    smallCont: 'JavaScript 工具库',
    pContent: 'Zepto.js 是一个轻量级、兼容 jQuery 的 JavaScript 工具库。'
},
{
    name: 'EJS文档',
    mainTitles: 'EJS 中文文档',
    href: 'https://ejs.bootcss.com/',
    h3Content: 'EJS',
    smallCont: '中文文档',
    pContent: 'EJS 是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面。EJS 没有再造一套迭代和控制流语法，有的只是普通的 JavaScript 代码而已。'
},
{
    name: 'Tailwind CSS中文网',
    mainTitles: 'Tailwind CSS 中文网 / 中文文档',
    href: 'https://www.tailwindcss.cn/',
    h3Content: 'Tailwind CSS',
    smallCont: '中文文档',
    pContent: 'Tailwind CSS 是一个用于快速UI开发的实用工具集 CSS 框架。与 Bootstrap 、Foundation 不同，Tailwind CSS 没有内置的 UI 组件。完全需要开发者根据自身情况来定制设计。'
},
{
    name: 'Jekyll',
    mainTitles: 'Jekyll 是最流行的静态站点生成工具。',
    href: 'https://www.jekyll.com.cn/',
    h3Content: 'Jekyll',
    smallCont: '中文文档',
    pContent: 'Jekyll 是一个静态站点生成工具。它将 Markdown （或者 Textile） 以及 Liquid 转化成一个完整的可发布的静态网站。'
},
{
    name: 'Hexo',
    mainTitles: 'Hexo 是一个快速、简洁且高效的博客框架',
    href: 'https://hexo.bootcss.com/',
    h3Content: 'Hexo',
    smallCont: '中文文档',
    pContent: 'Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。'
},
{
    name: 'PostCSS',
    mainTitles: 'PostCSS - 是一个用 JavaScript 工具和插件来转换 CSS 代码的工具',
    href: 'https://www.postcss.com.cn/',
    h3Content: 'PostCSS',
    smallCont: '中文网',
    pContent: 'PostCSS 利用 JavaScript 的强大编程能力对 CSS 代码进行转换。数以百计的 PostCSS 插件可以用来为 CSS 属性添加特定于浏览器厂商的前缀、支持未来 CSS 语法、模块化、代码检测等。'
},
{
    name: 'Chart.js',
    mainTitles: 'Chart.js 是为设计和开发人员准备的简单、灵活的 JavaScript 图表工具。',
    href: 'https://chartjs.bootcss.com/',
    h3Content: 'Chart.js',
    smallCont: '开源的 HTML5 图表工具',
    pContent: 'Chart.js 是为设计和开发人员准备的简单、灵活的 JavaScript 图表工具。'
},
{
    name: 'VuePress',
    mainTitles: 'VuePress 是基于 Vue 前端开发框架的静态站点生成工具。',
    href: 'https://www.vuepress.cn/',
    h3Content: 'VuePress',
    smallCont: '基于 Vue 前端开发框架的静态站点生成工具',
    pContent: 'VuePress 是基于 Vue 前端开发框架的静态站点生成工具。'
},
{
    name: 'Nunjucks',
    mainTitles: 'Nunjucks 是 JavaScript 专用的功能丰富、强大的模板引擎。',
    href: 'https://nunjucks.bootcss.com/',
    h3Content: 'Nunjucks',
    smallCont: '模板引擎',
    pContent: 'Nunjucks 是 JavaScript 专用的功能丰富、强大的模板引擎。'
},
{
    name: 'WebAssembly文档',
    mainTitles: 'WebAssembly 中文文档',
    href: 'https://wasm.bootcss.com',
    h3Content: 'WebAssembly',
    smallCont: '面向 web 应用的编译格式',
    pContent: 'WebAssembly 或者 wasm，是一种新型可移植，具有占用存储小，加载速度快等特点的面向 web 应用的编译格式。'
},
{
    name: 'Bundler',
    mainTitles: 'Bundler 是 Ruby 世界中最好的 gem 管理工具。',
    href: 'https://www.bundler.cn',
    h3Content: 'Bundler',
    smallCont: '是 Ruby 世界中最好的 gem 管理工具',
    pContent: 'Bundler 是 Ruby 世界中最好的 gem 管理工具。'
},
{
    name: 'w3schools.com',
    mainTitles: 'w3schools 原版国内镜像',
    href: 'https://www.quanzhanketang.com/',
    h3Content: 'w3schools',
    smallCont: '原版国内镜像',
    pContent: 'w3schools.com 是最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧！'
},
{
    name: 'Nginx中文文档',
    mainTitles: 'Nginx 中文参考手册 - Nginx 中文文档',
    href: 'https://nginx.bootcss.com',
    h3Content: 'Nginx',
    smallCont: '中文手册',
    pContent: 'Nginx (engine x) 是一个高性能的HTTP和反向代理服务，也是一个IMAP/POP3/SMTP服务。'
},
{
    name: 'Sphinx文档',
    mainTitles: 'Sphinx 中文文档',
    href: 'https://www.sphinx.org.cn',
    h3Content: 'Sphinx',
    smallCont: '中文文档',
    pContent: 'Sphinx 是一个用于构建文档的工具，最初是为 Python 文档而开发的。'
},
{
    name: 'stickUp',
    mainTitles: 'stickUp 能让页面目标元素“固定”在浏览器窗口的顶部',
    href: 'https://www.bootcss.com/p/stickup/',
    h3Content: 'stickUp',
    smallCont: '让页面元素“固定”位置',
    pContent: 'stickUp 能让页面目标元素“固定”在浏览器窗口的顶部，即便页面在滚动，目标元素仍然能出现在设定的位置。'
},
{
    name: '响应式导航',
    mainTitles: '响应式导航',
    href: 'https://www.bootcss.com/p/responsive-nav.js/',
    h3Content: 'Responsive Nav',
    smallCont: '响应式导航',
    pContent: '响应式导航（Responsive Nav）是一个很小的JS插件，压缩之后仅有1.7KB，能帮你创建针对小屏幕的可切换式导航'
},
{
    name: 'Unslider',
    mainTitles: 'Unslider',
    href: 'https://www.bootcss.com/p/unslider/',
    h3Content: 'Unslider',
    smallCont: 'jQuery轮播插件',
    pContent: 'Unslider - 一个超小的 jQuery 轮播（slider） 插件。支持主流浏览器、键盘导航、自动调整高度和响应式布局。'
},
{
    name: 'Flat UI',
    mainTitles: 'Flat UI',
    href: 'https://www.bootcss.com/p/flat-ui/',
    h3Content: 'Flat UI',
    smallCont: 'Metro 风格的 Bootstrap',
    pContent: 'Flat UI 是基于 Bootstrap 做的 Metro 化改造，由 Designmodo 提供。Flat UI包含了很多Bootstrap提供的组件，但是外观更加漂亮。在此强烈推荐！'
},
{
    name: 'Designmodo',
    mainTitles: '外观更加漂亮的Bootstrap',
    href: 'http://designmodo.com/',
    h3Content: 'Designmodo',
    smallCont: 'Flat UI提供者',
    pContent: 'Flat UI提供者'
},
{
    name: 'LayoutIt!',
    mainTitles: 'Bootstrap 可视化布局系统',
    href: 'https://www.bootcss.com/p/layoutit/',
    h3Content: 'LayoutIt!',
    smallCont: 'Bootstrap 可视化布局',
    pContent: 'LayoutIt! 可拖放排序在线编辑的Bootstrap可视化布局系统。'
},
{
    name: 'Bootstrap Switch',
    mainTitles: 'Bootstrap Switch',
    href: 'https://www.bootcss.com/p/bootstrap-switch/',
    h3Content: 'Bootstrap Switch',
    smallCont: 'Bootstrap 开关组件',
    pContent: 'Bootstrap Switch 是对 Bootstrap 控件的扩充。基于选 HTML 中基本的选择框控件实现只有开和关两种状态的单选按钮。'
},
{
    name: 'Sco.js',
    mainTitles: 'Sco.js',
    href: 'https://www.bootcss.com/p/sco.js/',
    h3Content: 'Sco.js',
    smallCont: 'Bootstrap 组件增强版',
    pContent: '由于大部分的 Bootstrap js 插件是无法扩展的，因此才有了 sco.js，它是对 Bootsrap 中 js 插件的增强实现。'
},
{
    name: 'iCheck',
    mainTitles: 'iCheck',
    href: 'https://www.bootcss.com/p/icheck/',
    h3Content: 'iCheck',
    smallCont: '增强复选框和单选按钮',
    pContent: 'iCheck 让不同浏览器下的复选框（checkboxes）和单选按钮（radio button）更美观、功能更强。'
},
{
    name: 'bootstrap-wysiwyg',
    mainTitles: 'bootstrap-wysiwyg',
    href: 'https://www.bootcss.com/p/bootstrap-wysiwyg/',
    h3Content: 'bootstrap-wysiwyg',
    smallCont: '为Bootstrap定制的可视编辑器',
    pContent: 'bootstrap-wysiwyg 是一个 jQuery Bootstrap 插件（5KB, 200 行代码）可以将任何一个 div 转变成一个 WYSIWYG 富文本编辑器。'
},
{
    name: 'Preboot',
    mainTitles: 'Preboot',
    href: 'https://www.bootcss.com/p/preboot/',
    h3Content: 'Preboot',
    smallCont: 'Bootstrap 的前世',
    pContent: 'Preboot 是一组用 less 语法书写的混合（mixin）和变量（variable）的集合，目的是辅助用户书写更优美的CSS。Bootstrap的前身就是Preboot。'
},
{
    name: 'jQuery.Pin',
    mainTitles: 'jQuery.Pin',
    href: 'https://www.bootcss.com/p/jquery.pin/',
    h3Content: 'jQuery.Pin',
    smallCont: '固定页面元素的 jQuery 插件',
    pContent: 'jQuery.Pin 能将任意页面元素“钉”在某个容器顶部，而且在尺寸小的屏幕上能够自动禁用这种效果。'
},
{
    name: 'Bsie',
    mainTitles: 'Bootstrap IE6兼容方案',
    href: 'https://www.bootcss.com/p/bsie/',
    h3Content: 'Bsie',
    smallCont: 'Bootstrap IE6 兼容方案',
    pContent: 'Bsie 弥补了 Bootstrap 对 IE6 的不兼容。目前，bsie 能在 IE6 上支持大部分 bootstrap 的特性，可惜，还有一些实在无法支持...'
},
{
    name: 'Messenger',
    mainTitles: '非常酷的弹框(Alert)组件',
    href: 'https://www.bootcss.com/p/messenger/',
    h3Content: 'Messenger',
    smallCont: '非常酷的弹框(Alert)组件',
    pContent: 'Messenger 是一个非常酷的弹框(Alert)组件，能够非常好的与 Bootstrap 融合，当然，单独使用效果也是非常棒。Messenger 自带4套皮肤。'
},
{
    name: '日期时间选择器',
    mainTitles: 'Bootstrap 日期时间选择器',
    href: 'https://www.bootcss.com/p/bootstrap-datetimepicker/',
    h3Content: 'DateTime Picker',
    smallCont: '日期时间选择器',
    pContent: 'Bootstrap 日期时间选择器（Bootstrap DateTime Picker）是一个 Bootstrap 组件，能够简化页面上日期、时间的输入。'
},
{
    name: 'jQuery UI控件',
    mainTitles: '基于 Bootstrap 样式的 jQuery UI 控件',
    href: 'https://www.bootcss.com/p/jquery-ui-bootstrap/',
    h3Content: 'jQuery UI Bootstrap',
    smallCont: '用 Bootstrap 美化 jQuery UI',
    pContent: '这套工具让你在使用 jQuery UI 控件时也能充分利用 Bootstrap 的样式，而且不会出现样式不统一的现象，Bootstrap 和 jQuery UI 可以完美融合在一起了！'
},
{
    name: 'Google UI',
    mainTitles: 'Google 风格的 Bootstrap',
    href: 'https://www.bootcss.com/p/google-bootstrap/',
    h3Content: 'Google Bootstrap',
    smallCont: 'Google 风格的 Bootstrap',
    pContent: 'Google 的 UI 素来以简洁著称，现在 Bootstrap 也来 Google Style 一把，喜欢 Google 的就来试试这套 Google Bootstrap 吧！'
},
{
    name: 'Metro UI CSS',
    mainTitles: 'Bootstrap Metro UI CSS',
    href: 'https://www.bootcss.com/p/metro-ui-css/',
    h3Content: 'Metro UI CSS',
    smallCont: 'Bootstrap 与 Metro 融合',
    pContent: 'Metro UI CSS 是一套用来创建类似于 Windows 8 Metro UI 风格网站的样式。现在，Metro UI CSS 项目在 Bootstrap 的基础上被开发成一个独立的解决方案。'
},
{
    name: 'Font Awesome',
    mainTitles: 'Font Awesome',
    href: 'https://www.bootcss.com/p/font-awesome/',
    h3Content: 'Font Awesome',
    smallCont: 'Bootstrap 专用图标字体',
    pContent: 'Font Awesome 中包含的所有图标都是矢量的，也就可以任意缩放，避免了一个图标做多种尺寸的麻烦。CSS 对字体可以设置的样式也同样能够运用到这些图标上了。'
},
{
    name: 'Simple Icons',
    mainTitles: 'Icon汇',
    href: 'https://www.bootcss.com/p/simple-icons/',
    h3Content: 'Simple Icons',
    smallCont: 'Icon汇',
    pContent: 'Simple Icons -- Icon汇。收集众多网站的 Logo，并提供高质量、不同尺寸的 png 格式图片给广大网友，所有 Icon 版权归其所属公司。'
},
{
    name: '在线表单构造器',
    mainTitles: 'Bootstrap 在线表单构造器',
    href: 'https://www.bootcss.com/p/bootstrap-form-builder/',
    h3Content: 'Form Builder',
    smallCont: '在线表单构造器',
    pContent: 'Bootstrap 在线表单构造器能够以鼠标拖拽的方式迅速生成一个基于 Bootstrap 的完整表单，减轻了各位码农手写HTML代码的劳动，而且不会出错。'
},
{
    name: 'HTML5 Boilerplate',
    mainTitles: 'HTML5 Boilerplate',
    href: 'https://www.bootcss.com/p/html5boilerplate/',
    h3Content: 'HTML5 Boilerplate',
    smallCont: '专业的前端模版',
    pContent: 'HTML5 Boilerplate 是一套专业的前端模版，用以开发快速、健壮、适应性强的 app 或网站。'
},
{
    name: 'Web安全色',
    mainTitles: 'Web 安全色',
    href: 'https://www.bootcss.com/p/websafecolors/',
    h3Content: 'Web Safe Colors',
    smallCont: 'Web安全色',
    pContent: '本表中列出的是 WEB 设计、开发中常用安全色。列于此是为了方便大家参考。'
},
{
    name: 'Bootstrap文档全集',
    mainTitles: 'Bootstrap 文档全集',
    href: 'http://docs.bootcss.com/',
    h3Content: 'Bootstrap Docs',
    smallCont: 'Bootstrap 文档全集',
    pContent: '这里收集了 Bootstrap 从 V1.0.0 版本到现在，整个文档的历史。Bootstrap 本身就是一个传奇，而这些文档就是传奇的见证！'
},
{
    name: 'Git简易指南',
    mainTitles: 'Git 简易指南',
    href: 'https://www.bootcss.com/p/git-guide/',
    h3Content: 'Git Guide',
    smallCont: 'Git 简易指南',
    pContent: 'Git简易指南 -- 帮助你开始使用 git 的简易指南，木有高深内容。'
},
{
    name: '(Tooltip)控件',
    mainTitles: '气泡形状的提示（Tooltip）控件',
    href: 'https://www.bootcss.com/p/grumblejs/',
    h3Content: 'Grumble.js',
    smallCont: '气泡形状的提示（Tooltip）控件',
    pContent: '一个气泡形状的提示（Tooltip）控件，可以在其围绕的元素周围做360度任意定位。'
},
{
    name: 'Cikonss',
    mainTitles: '纯 CSS 实现的 Icon',
    href: 'https://www.bootcss.com/p/cikonss/',
    h3Content: 'CIKONSS',
    smallCont: '纯 CSS 实现的 Icon',
    pContent: 'Cikonss 是纯 CSS 实现的响应式 Icon，兼容 IE8+。'
},
{
    name: 'Headroom.js',
    mainTitles: 'Headroom.js 是一个轻量级、纯 JavaScript 组件，用来隐藏或展现页面上的元素，为你的页面留下更多展示内容的空间。',
    href: 'https://www.bootcss.com/p/headroom.js/',
    h3Content: 'Headroom.js',
    smallCont: '隐藏或展示页面元素',
    pContent: 'Headroom.js 是一个轻量级、纯 JavaScript 组件，用来隐藏或展现页面上的元素，为你的页面留下更多展示内容的空间。'
},
{
    name: 'Buttons',
    mainTitles: '基于 Sass 和 Compass 构建的CSS按钮（button）样式库',
    href: 'https://www.bootcss.com/p/buttons/',
    h3Content: 'Buttons',
    smallCont: 'CSS 按钮样式库',
    pContent: 'Buttons 是一个基于 Sass 和 Compass 构建的CSS按钮（button）样式库，图标采用的是Font Awesome，可以和 Bootstrap 融合使用。'
},
{
    name: '',
    mainTitles: '',
    href: '',
    h3Content: '',
    smallCont: '',
    pContent: ''
},
{
    name: '',
    mainTitles: '',
    href: '',
    h3Content: '',
    smallCont: '',
    pContent: ''
},
{
    name: '',
    mainTitles: '',
    href: '',
    h3Content: '',
    smallCont: '',
    pContent: ''
},])
onMounted(() => { })
</script>

<style lang="scss" scoped>
#article-details {
    display: flex;
    /* align-items: center; */
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
}

.list-container {
    width: 70%;

    margin: 80px 0 10px 0;
}

.thumbnail {
    display: block;
    padding: 4px;
    height: 337px;
    margin-bottom: 20px;
    line-height: 1.42857143;
    text-align: center;
    // background-color: #fff;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    -webkit-transition: border .2s ease-in-out;
    -o-transition: border .2s ease-in-out;
    transition: border .2s ease-in-out;

    a {
        text-decoration: none;
    }

    a.name {
        display: inline-block;
        width: 100%;
        height: 120px;
        line-height: 120px;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        background-color: #535353;
    }

    .name {
        -webkit-transition: -webkit-transform .3s ease;
        -moz-transition: -moz-transform .3s ease;
        -ms-transition: -ms-transform .3s ease;
        transition: transform .3s ease;

        &:hover {
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2)
        }
    }
}

.caption p {
    font-size: 14px;
}

.caption a {
    font-size: 20px;
}
</style>