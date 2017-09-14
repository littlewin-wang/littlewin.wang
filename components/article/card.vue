<template>
  <div class="article-card">
    <div class="article-thumb">
      <img src="http://7xpot0.com1.z0.glb.clouddn.com/16-11-7/16133495.jpg" alt="">
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
      <div class="article-meta">
        <i class="iconfont icon-time">
        </i>{{new Date().toLocaleDateString()}}&nbsp
        <i class="iconfont icon-love">
        </i>9&nbsp
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
  height: 240px;
  position: relative;
  border-radius: 5px;
  background-color: hsla(0, 0%, 100%, .6);
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15);
  .article-info {
    background: #fff;
    width: 80%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 20px;
    box-shadow: -3px -2px 5px #777;
    .article-meta {
      margin: 10px 0;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: #777;
      i {
        font-size: 14px;
        margin-right: 4px;
      }
    }
    .article-title {
      margin: 20px 0;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
