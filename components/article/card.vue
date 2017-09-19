<template>
  <div class="article-card">
    <div class="container">
      <div class="date">
        <div class="detail">
          <span class="date-day">04</span>
          <span class="date-month">Oct</span>
        </div>
      </div>
      <div class="content">
        <h2>
          <a href="">应该是展望</a>
        </h2>
        <p class="excerpt">
          > 生存压力以外的理想主义到底是不是耍流氓\n> 脱离知识分子的气韵来黑知识分子的虚伪外表是不是耍流氓\n> 抛弃雅俗共赏的勇气勾勒出一个不完整的人性思考轴是不是耍流氓
        </p>
        <div class="info">
          <div class="left">
            <span class="tag">
              <i class="iconfont icon-tag"></i>
              <a href="">前端</a>
            </span>
            <span class="author">
              <img src="http://7xpot0.com1.z0.glb.clouddn.com/16-12-20/28956487-file_1482226716996_dc59.jpg" alt="">
              <a href="">Littlewin</a>
            </span>
          </div>
          <div class="right">
            <span class="tag">
              <i class="iconfont icon-view"></i>
              <a href="">122</a>
            </span>
            <span class="tag">
              <i class="iconfont icon-love"></i>
              <a href="">122</a>
            </span>
            <span class="tag">
              <i class="iconfont icon-comment"></i>
              <a href="">22</a>
            </span>
          </div>
        </div>
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
  display: inline-block;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: hsla(0, 0%, 100%, .6);
  &:hover {
    background-color: hsla(0, 0%, 77%, .4);
  }
  .container {
    display: flex;
    .date {
      flex: 0 0 70px;
      .detail {
        padding: 0 20px;
        border-right: 1px solid #ebebeb;
        .date-day {
          font-size: 21px;
          font-weight: 600;
          color: #303030;
          padding-bottom: 5px;
        }
        .date-day,
        .date-month {
          display: block;
        }
      }
    }
    .content {
      flex: 1;
      padding: 0 35px 0 20px;
      h2 {
        margin: 0;
        font-family: Raleway;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      .info {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #222222;
        margin-top: 30px;
        padding-top: 15px;
        border-top: 1px solid #ebebeb;
        span {
          margin: 0 4px;
        }
        i {
          color: #8d8d8d;
          font-size: 14px;
          margin-right: 2px;
        }
        .author {
          position: relative;
          padding-left: 22px;
          img {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
