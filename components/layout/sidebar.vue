<template>
  <div class="article-sidebar">
    <div class="article-sidebar-box">
      <h5 class="title">
        <i class="iconfont icon-menu"></i>
        热门文章
      </h5>
      <div class="container">
        <ul>
          <li>
            <div class="post">
              <div class="thumb">
                <img src="http://demo.qodeinteractive.com/bridge106/wp-content/uploads/2013/10/b-10-best-productivity-secrets-revealed-150x150.jpg" alt="">
              </div>
              <div class="content">
                <h5>
                  <a href="">其实是展望</a>
                </h5>
                <span>{{new Date().toLocaleDateString()}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container">
        <ul>
          <li>
            <div class="post">
              <div class="thumb">
                <img src="http://demo.qodeinteractive.com/bridge106/wp-content/uploads/2013/10/b-10-best-productivity-secrets-revealed-150x150.jpg" alt="">
              </div>
              <div class="content">
                <h5>
                  <a href="">其实是展望</a>
                </h5>
                <span>{{new Date().toLocaleDateString()}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container">
        <ul>
          <li>
            <div class="post">
              <div class="thumb">
                <img src="http://demo.qodeinteractive.com/bridge106/wp-content/uploads/2013/10/b-10-best-productivity-secrets-revealed-150x150.jpg" alt="">
              </div>
              <div class="content">
                <h5>
                  <a href="">其实是展望</a>
                </h5>
                <span>{{new Date().toLocaleDateString()}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container">
        <ul>
          <li>
            <div class="post">
              <div class="thumb">
                <img src="http://demo.qodeinteractive.com/bridge106/wp-content/uploads/2013/10/b-10-best-productivity-secrets-revealed-150x150.jpg" alt="">
              </div>
              <div class="content">
                <h5>
                  <a href="">其实是展望</a>
                </h5>
                <span>{{new Date().toLocaleDateString()}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container">
        <ul>
          <li>
            <div class="post">
              <div class="thumb">
                <img src="http://demo.qodeinteractive.com/bridge106/wp-content/uploads/2013/10/b-10-best-productivity-secrets-revealed-150x150.jpg" alt="">
              </div>
              <div class="content">
                <h5>
                  <a href="">其实是展望</a>
                </h5>
                <span>{{new Date().toLocaleDateString()}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="article-sidebar-box">
      <h5 class="title">
        <i class="iconfont icon-menu"></i>
        标签
      </h5>
      <div class="container">
        <ul>
          <li class="tag-container">
            <a href="" class="tag">
              <i class="iconfont icon-user"></i>
              <span data-v-3a678449="">&nbsp;</span>
              <span data-v-3a678449="">灵魂</span>
              <span data-v-3a678449="">(3)</span>
            </a>
            </a>
          </li>
          <li class="tag-container">
            <a href="" class="tag">
              <i class="iconfont icon-user"></i>
              <span data-v-3a678449="">&nbsp;</span>
              <span data-v-3a678449="">灵魂</span>
              <span data-v-3a678449="">(3)</span>
            </a>
            </a>
          </li>
          <li class="tag-container">
            <a href="" class="tag">
              <i class="iconfont icon-user"></i>
              <span data-v-3a678449="">&nbsp;</span>
              <span data-v-3a678449="">灵魂</span>
              <span data-v-3a678449="">(3)</span>
            </a>
            </a>
          </li>
          <li class="tag-container">
            <a href="" class="tag">
              <i class="iconfont icon-user"></i>
              <span data-v-3a678449="">&nbsp;</span>
              <span data-v-3a678449="">灵魂</span>
              <span data-v-3a678449="">(3)</span>
            </a>
            </a>
          </li>
          <li class="tag-container">
            <a href="" class="tag">
              <i class="iconfont icon-user"></i>
              <span data-v-3a678449="">&nbsp;</span>
              <span data-v-3a678449="">灵魂</span>
              <span data-v-3a678449="">(3)</span>
            </a>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="article-sidebar-box">
      <h5 class="title">
        <i class="iconfont icon-menu"></i>
        最新评论
      </h5>
      <div class="container">
        <ul>
          <li>
            <div class="comment">
              <div class="title">
                <span>
                  <a href="">阿土</a>
                </span>
                在
                <span>
                  <a href="">应该是展望</a>
                </span>
              </div>
              <div class="content">
                <span>大诗人，你啥时候发表下一篇文章</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
.article-sidebar {
  .article-sidebar-box {
    margin-bottom: 2rem;
    background-color: hsla(0, 0%, 100%, .6);
  }
  .title {
    margin: 0;
    padding-left: 1rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 14px;
    font-weight: 400;
    color: #48494d;
    border-bottom: 1px dashed #eee;
    i {
      font-size: 14px;
    }
  }
  .container {
    padding: 1rem;
    .post {
      display: flex;
      &:hover {
        background-color: hsla(0, 0%, 77%, .4);
      }
      .thumb {
        flex: 0 0 80px;
        height: 80px;
      }
      .content {
        padding: 0 1rem;
        h5 {
          margin: .5rem 0 1rem 0;
        }
      }
    }
    .tag-container {
      display: inline-block;
      margin-right: 1rem;
      margin-bottom: 1rem;
      .tag {
        display: inline-block;
        height: 2em;
        padding: 0 .5em;
        line-height: 2em;
        background-color: hsla(0, 0%, 77%, .4);
        &:hover {
          background-color: rgba(95, 95, 95, .4);
        }
      }
    }
    .comment {
      &:hover {
        background-color: hsla(0, 0%, 77%, .4);
      }
      .content {
        padding: 0 1rem;
      }
    }
  }
}
</style>
