<!--
 * @Author: wosls
 * @Date: 2023-09-20 16:50:44
 * @LastEditors: wosls
 * @LastEditTime: 2023-12-28 16:38:57
 * @FilePath: \myblog\src\views\content\ArticleDetails.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div id="article-details">

    <blog-header></blog-header>
    <div class="main-container">
      <side-bar>
        <catalog-content></catalog-content>
      </side-bar>

      <!-- 文章内容 -->
      <div class="post-body">
        <div class="article-content" v-html="articleDetails.content"></div>
      </div>
      <!-- 侧边栏 -->
      <side-bar>
        <div class="sticky-layout">
          <catalog-card></catalog-card>
          <recommend-card></recommend-card>
          <blog-footer></blog-footer>
        </div>
      </side-bar>
    </div>
    <comment-content></comment-content>
    <to-top></to-top>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineProps, ref, nextTick, onMounted } from 'vue'
import CatalogCard from '../../components/CatalogCard.vue'
import RecommendCard from '../components/RecommendCard.vue'
import BlogHeader from '../components/BlogHeader.vue'
import BlogFooter from '../components/BlogFooter.vue'
import CommentContent from '../components/CommentContent.vue'
import ToTop from '../components/ToTop.vue'
import SideBar from '../components/SideBar.vue'
import { renderByMathjax, initMathJax } from '../../utils/mathjax'
import CatalogContent from '../components/CatalogContent.vue'
// import buildCodeBlock from "../../utils/code-block";
const articleDetails = reactive({
  createTime: '',
  content: `"<h1>字符效果1</h1>
<ul>
<li>
<p><s>删除线</s> <s>删除线（开启识别HTML标签时）</s></p>
</li>
<li>
<p><em>斜体字</em> <em>斜体字</em></p>
</li>
<li>
<p><strong>粗体</strong> <strong>粗体</strong></p>
</li>
<li>
<p><em><strong>粗斜体</strong></em> <em><strong>粗斜体</strong></em></p>
</li>
<li>
<p>上标：X<sub>2</sub>，下标：O<sup>2</sup></p>
</li>
<li>
<p><mark>高亮</mark></p>
</li>
<li>
<p><code>Inline Code</code></p>
</li>
</ul>
<blockquote>
<p>引用：如果想要插入空白换行（即 <code>&lt;br&gt;</code> 标签），在插入处先键入两个以上的空格然后回车即可</p>
</blockquote>
<h1>超链接</h1>
<ul>
<li><a href="https://www.cnblogs.com/zhiyiYo/">普通链接</a></li>
<li><a href="https://www.cnblogs.com/zhiyiYo/"><em>斜体链接</em></a></li>
<li><a href="https://www.cnblogs.com/zhiyiYo/"><strong>粗体链接</strong></a></li>
</ul>
<h1>脚注</h1>
<p>这是一个简单的脚注 <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> 而这是一个更长的脚注 <sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>.</p>
<h1>图像</h1>
<p>下面是一张我家硝子的壁纸?:<br />

<h1>代码</h1>
<h2>行内代码</h2>
<p>在 VS Code 中按下 <kbd>Alt</kbd> + <kbd>T</kbd> + <kbd>R</kbd> 执行命令：<code>npm install marked</code></p>
<h2>代码片</h2>
<h3>Python 代码</h3>
<pre><code class="lang-python">class Animal:
    &quot;&quot;&quot; 动物类 &quot;&quot;&quot;

    def __init__(self, age: int, name: str):
        self.age = age
        self.name = name

    def getInfo(self) -&gt; str:
        &quot;&quot;&quot; 返回信息 &quot;&quot;&quot;
        return f'age: {self.age}; name: {self.name}'


class Dog(Animal):
    &quot;&quot;&quot; 狗狗类 &quot;&quot;&quot;

    def __init__(self, age: int, name: str, gender='female', color='white'):
        super().__init__(age, name)
        self.gender = gender
        self.__color = color

    def bark(self):
        &quot;&quot;&quot; 狗叫 &quot;&quot;&quot;
        print('lololo')

    @property
    def color(self):
        return self.__color

    @color.setter
    def color(self, color: str):
        if color not in ['red', 'white', 'black']:
            raise ValueError('颜色不符合要求')
        self.__color = color


if __name__ == '__main__':
    dog = Dog(16, '啸天', gender='male')
    # 狗叫
    dog.bark()
    # 设置狗狗毛色
    dog.color = 'blue'
</code></pre>
<h3>HTML 代码</h3>
<pre><code class="lang-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;mate charest=&quot;utf-8&quot; /&gt;
        &lt;title&gt;Hello world!&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;Hello world!&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<h1>列表</h1>
<h2>无序列表</h2>
<ul>
<li>福建
<ul>
<li>厦门</li>
<li>福州</li>
</ul>
</li>
<li>浙江</li>
<li>江苏</li>
</ul>
<h2>有序列表</h2>
<ol>
<li>动物
<ol>
<li>人类</li>
<li>犬类</li>
</ol>
</li>
<li>植物</li>
<li>微生物</li>
</ol>
<h2>任务列表</h2>
<ul class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 预习计算机网络</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 复习现代控制理论</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 刷现代控制理论历年卷
<ul class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 2019 年期末试卷</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 2020 年期末试卷</li>
</ul>
</li>
</ul>
<h1>表格</h1>
<table>
<thead>
<tr>
<th>项目</th>
<th style="text-align:right">价格</th>
<th style="text-align:center">数量</th>
</tr>
</thead>
<tbody>
<tr>
<td>计算机</td>
<td style="text-align:right">$1600</td>
<td style="text-align:center">5</td>
</tr>
<tr>
<td>手机</td>
<td style="text-align:right">$12</td>
<td style="text-align:center">12</td>
</tr>
<tr>
<td>管线</td>
<td style="text-align:right">$1</td>
<td style="text-align:center">234</td>
</tr>
</tbody>
</table>
<hr />
<h1>特殊符号</h1>
<p>© &amp;  ¨ ™ ¡ £<br />
&amp; &lt; &gt; ¥ € ® ± ¶ § ¦ ¯ « ·</p>
<p>X² Y³ ¾ ¼  ×  ÷   »</p>
<p>18ºC  &quot;  '</p>
<h1>Emoji表情 😆</h1>
<ul>
<li>马：🐴</li>
<li>星星：🌟</li>
<li>笑脸：😄</li>
<li>跑步：🏃</li>
</ul>
<h1>数学公式</h1>
<p>行间公式：<br />
$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$<br />
行内公式 $E=mc^2$</p>
<h1>绘图</h1>
<h2>时序图</h2>
<div class="mermaid"><svg id="render794185409" width="100%" xmlns="http://www.w3.org/2000/svg" height="593" style="max-width: 712px;" viewBox="-50 -10 712 593"><style>#render794185409 {font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#333;}#render794185409 .error-icon{fill:#552222;}#render794185409 .error-text{fill:#552222;stroke:#552222;}#render794185409 .edge-thickness-normal{stroke-width:2px;}#render794185409 .edge-thickness-thick{stroke-width:3.5px;}#render794185409 .edge-pattern-solid{stroke-dasharray:0;}#render794185409 .edge-pattern-dashed{stroke-dasharray:3;}#render794185409 .edge-pattern-dotted{stroke-dasharray:2;}#render794185409 .marker{fill:#333333;stroke:#333333;}#render794185409 .marker.cross{stroke:#333333;}#render794185409 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#render794185409 .actor{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#render794185409 text.actor>tspan{fill:black;stroke:none;}#render794185409 .actor-line{stroke:grey;}#render794185409 .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:#333;}#render794185409 .messageLine1{stroke-width:1.5;stroke-dasharray:2,2;stroke:#333;}#render794185409 #arrowhead path{fill:#333;stroke:#333;}#render794185409 .sequenceNumber{fill:white;}#render794185409 #sequencenumber{fill:#333;}#render794185409 #crosshead path{fill:#333;stroke:#333;}#render794185409 .messageText{fill:#333;stroke:#333;}#render794185409 .labelBox{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#render794185409 .labelText,#render794185409 .labelText>tspan{fill:black;stroke:none;}#render794185409 .loopText,#render794185409 .loopText>tspan{fill:black;stroke:none;}#render794185409 .loopLine{stroke-width:2px;stroke-dasharray:2,2;stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);}#render794185409 .note{stroke:#aaaa33;fill:#fff5ad;}#render794185409 .noteText,#render794185409 .noteText>tspan{fill:black;stroke:none;}#render794185409 .activation0{fill:#f4f4f4;stroke:#666;}#render794185409 .activation1{fill:#f4f4f4;stroke:#666;}#render794185409 .activation2{fill:#f4f4f4;stroke:#666;}#render794185409 #render794185409 .actorPopupMenuPanel{fill:#ECECFF;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);filter:drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));}#render794185409 .actor-man line{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#render794185409 .actor-man circle,#render794185409 line{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;stroke-width:2px;}#render794185409 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style><g></g><defs><symbol id="computer" width="24" height="24"><path transform="scale(.5)" d="M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z"></path></symbol></defs><defs><symbol id="database" fill-rule="evenodd" clip-rule="evenodd"><path transform="scale(.5)" d="M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.0…"`
})
let lightBoxRef = ref()

let articleLoaded = ref(false)
const props = defineProps({})
const handleData = () => {
  nextTick(() => {
    initMathJax({}, () => {
      renderByMathjax('.article-content')
      renderByMathjax('.comment-item-content')
    })
    // buildCodeBlock(".article-content");
    articleLoaded.value = true
  }).then(() => {
    // lightBoxRef.value.addImageClickedListener()
  })
}
onMounted(() => {
  handleData()
})
</script>

<style scoped>
#article-details {
  width: 100%;
  position: absolute;
}

.main-container {
  display: flex;
  justify-content: space-between;
}

.sticky-layout {
  width: 100%;
  height: 300px;
  position: sticky;
  top: 70px;
}

.post-body {
  width: calc(75% - 20px);
  padding: 0 20px 0 50px;

  .article-content {
    margin-top: 90px;
  }
}
</style>