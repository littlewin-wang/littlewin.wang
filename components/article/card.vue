<template>
  <div class="article-card">
    <div class="container">
      <div class="img">
        <a href="">
          <img src="http://7xpot0.com1.z0.glb.clouddn.com/16-11-7/16133495.jpg" alt="">
        </a>
      </div>
      <div class="content">
        <h2>
          <a href="">应该是展望</a>
        </h2>
        <div class="text">
          > 生存压力以外的理想主义到底是不是耍流氓\n> 脱离知识分子的气韵来黑知识分子的虚伪外表是不是耍流氓\n> 抛弃雅俗共赏的勇气勾勒出一个不完整的人性思考轴是不是耍流氓
        </div>
        <div class="info">
          <ul>
            <li class="post-author">
              <div class="avatar">
                <img src="http://cdn.v2ex.com/gravatar/afa39accf8700cbbe7b13e1d01aa5b17?s=96&d=mm&r=g" alt="">
              </div>
              <a href="">Littlewin</a>
            </li>
            <li>
              <i class="iconfont icon-tag">
              </i>前端
            </li>
            <li>
              <i class="iconfont icon-time">
              </i>{{new Date().toLocaleDateString()}}
            </li>
            <li>
              <i class="iconfont icon-comment">
              </i>4
            </li>
            <li>
              <i class="iconfont icon-love">
              </i>9
            </li>
          </ul>
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
  position: relative;
  overflow: hidden;
  margin-bottom: 25px;
  background: #FFF;
  box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1);
  transition: all 0.6s ease;
  .container {
    display: flex;
    overflow: hidden;
    padding: 23px 20px;
    .img {
      flex: 0 0 240px;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
      }
    }
    .content {
      flex: 1;
      margin-left: 20px;
      h2 {
        position: relative;
        margin: 0 0 20px 0;
        font-size: 22px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .text {
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 20px;
        color: #566573;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .info {
        li.post-author {
          padding-left: 30px;
        }
        li {
          font-size: 12px;
          letter-spacing: .2px;
          padding: 0;
          margin: 0 10px 0 0;
          color: #748594;
          position: relative;
          line-height: 1.5;
          display: inline-block;
          .avatar {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            img {
              border: 1px solid #e5e5e5;
              border-radius: 50%;
              padding: 1px;
              width: 25px;
              height: 25px;
            }
          }
          a {
            color: #748594;
          }
          i {
            font-size: 12px;
            letter-spacing: -.2px;
            color: #748594;
            line-height: 1.5;
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>
