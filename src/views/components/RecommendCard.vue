<template>
  <div class="topicle">

    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <div id="asideHotArticle" class="aside-box">
      <h3 class="aside-title">热门内容</h3>
      <div class="aside-content">
        <ul class="hotArticle-list" v-for="item in topList">
          <li>
            <a class="name" :href="item.href" :title="item.title">{{ item.title }}</a>
            <span class="read">{{ item.counts }}</span>
          </li>
        </ul>
        <!-- <ul class="hotArticle-list">
          <li>
            <a href="https://wosls.com/qq_16945475/article/details/121180200" target="_blank"
              data-report-click="{https://wosls.com/qq_16945475/article/details/121180200}">
              mysql分组查询排序实现排名（全）
              <img src="https://wosls.com/release/blogv2/dist/pc/img/readCountWhite.png" alt="">
              <span class="read">14682</span>
            </a>
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const topList = reactive([
  { href: 'about:blank', title: ' mysql 分组查询排序实现排名（全）', counts: '7806' },
  { href: 'about:blank', title: ' controller使用map接收参数注意事项', counts: '8125' },
  { href: 'about:blank', title: ' Mysql递归查询子级（父子级结构）从子级ID查询所有父级（及扩展知识）', counts: '11205' },
  { href: 'about:blank', title: ' vue3的props和defineProps', counts: '4807' },
  { href: 'about:blank', title: ' AntPathMatcher', counts: '9942' },
  { href: 'about:blank', title: ' elementui实现corn表达式', counts: '9706' },

])
</script>

<style lang="scss" scoped>
.topicle {
  width: 100%;
  height: 300px;
  padding: 0 16px 0 16px;
  background-color: #fff;

  .aside-box {
    ul {
      padding: 0;
    }

    li {
      list-style: none;
      padding: 5px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .name {
        display: inline-block;
        width: 75%;
        white-space: nowrap;
        /* 不自动换行 */
        overflow: hidden;
        /* 超出容器大小的部分隐藏 */
        text-overflow: ellipsis;
        /* 当内容被隐藏时显示省略号 */
      }

      .read {
        font-size: 14px;
      }

    }
  }
}
</style>