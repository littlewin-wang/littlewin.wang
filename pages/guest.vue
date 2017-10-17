<template>
  <div class="main">
    <div class="main-container">
      <div class="page-container">
        <div class="guest-banner">
          <img src="/images/hello.png" alt="">
        </div>
        <div class="guest-comment">
          <Comment :likes="$store.state.site.site.data.meta.likes" :postID="0"></Comment>
        </div>
      </div>
      <div class="sidebar">
        <div>
          <Sidebar :articles="hotArticles" :tags="tags" :comments="LatestComments"></Sidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from '~/components/common/comment.vue'
import Sidebar from '~/components/common/sidebar.vue'

export default {
  name: 'guest',
  head: {
    title: '留言板'
  },
  components: {
    Comment,
    Sidebar
  },
  computed: {
    hotArticles () {
      return this.$store.state.article.hot
    },
    tags () {
      return this.$store.state.tag
    },
    LatestComments () {
      return this.$store.state.comment.latest
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/mixins';

.guest-banner {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 16rem;
  margin-bottom: 1rem;
  img {
    position: absolute;
    bottom: 0;
    opacity: 0.6;
    @include css3-prefix(transition, all 1.5s);

    &:hover {
      opacity: 1;
      @include css3-prefix(transform, translateY(10rem));
    }
  }
  @media screen and (max-width: 600px) {
    img:hover {
      @include css3-prefix(transform, translateY(6rem));
    }
  }
  @media screen and (max-width: 480px) {
    img:hover {
      @include css3-prefix(transform, translateY(0));
    }
  }
}

.guest-comment {
  background-color: hsla(0, 0%, 100%, .6);
  padding: 1em;
}
</style>
