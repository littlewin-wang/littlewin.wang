<template>
  <div class="article-card">
    <div class="article-thumb">
      <img src="http://7xpot0.com1.z0.glb.clouddn.com/16-11-7/16133495.jpg" alt="">
      <div class="background">
        <span class="read-more">
          文章详情
        </span>
      </div>
    </div>
    <div class="article-info">
      <div class="article-meta">
        <i class="iconfont icon-category">
        </i>
        前端
      </div>
      <div class="article-title">
        应该是展望
      </div>
      <div class="article-desc">
        > 生存压力以外的理想主义到底是不是耍流氓\n> 脱离知识分子的气韵来黑知识分子的虚伪外表是不是耍流氓\n> 抛弃雅俗共赏的勇气勾勒出一个不完整的人性思考轴是不是耍流氓
      </div>
      <div class="article-meta">
        <i class="iconfont icon-time">
        </i>{{new Date().toLocaleDateString()}}&nbsp&nbsp&nbsp&nbsp
        <i class="iconfont icon-love">
        </i>9&nbsp&nbsp&nbsp&nbsp
        <i class="iconfont icon-comment">
        </i>4
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.article-card {
  width: 240px;
  position: relative;
  border-radius: 5px;
  .article-thumb {
    position: relative;
    .background {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      opacity: 0;
      .read-more {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        &:before {
          content: '';
          display: block;
          width: 2px;
          height: 1px;
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          transition: all 0.5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        }
        &:after {
          content: '';
          display: block;
          width: 2px;
          height: 1px;
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          transition: all 0.5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        }
      }
    }
  }
  .article-info {
    .article-meta {
      margin: 10px 0;
      height: 16px;
      line-height: 16px;
      font-size: 14px;
      color: #777;
      i {
        font-size: 14px;
        margin-right: 4px;
      }
    }
    .article-title {
      margin: 10px 0;
      font-size: 18px;
      font-weight: bold;
    }
    .article-desc {
      font-size: 14px;
      font-weight: 300;
      color: #777;
    }
  }
  &:hover {
    .article-thumb {
      .background {
        opacity: 1;
        .read-more {
          &:before {
            width: 150%
          }
          &:after {
            width: 150%
          }
        }
      }
    }
  }
}
</style>
