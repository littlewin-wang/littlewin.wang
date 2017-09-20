<template>
  <div class="article-sidear">
    <h5>热门文章</h5>
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
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
.article-sidear {
  padding: 1rem;
  background-color: hsla(0, 0%, 100%, .6);

  .container {
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
  }
}
</style>
