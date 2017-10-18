<template>
  <div class="article-header">
    <div class="logo">
      <!-- tag -->
      <i class="iconfont" :class="[currentTag.extends.find(t => Object.is(t.name, 'icon')).value]" v-if="currentTag"></i>
      <!-- category -->
      <i class="iconfont" :class="[currentCategory.extends.find(t => Object.is(t.name, 'icon')).value]" v-else-if="currentCategory"></i>
      <!-- search -->
      <i class="iconfont icon-search" v-else-if="currentKeyword"></i>
    </div>
    <h5 class="description" v-if="currentTag">{{ currentTag.description || 'Nothing.' }}</h5>
    <h5 class="description" v-if="currentCategory">{{ currentCategory.description || 'Nothing.' }}</h5>
    <h5 class="description" v-if="currentKeyword">和&nbsp;"{{ currentKeyword }}"&nbsp;有关的所有文章</h5>
  </div>
</template>

<script>
import Card from './card'

export default {
  name: 'List',
  components: {
    Card
  },
  data () {
    return {
    }
  },
  computed: {
    currentTag () {
      return this.$store.state.tag.data.tags.find(tag => tag.name === this.$route.params.name)
    },
    currentCategory () {
      return this.$store.state.category.data.categories.find(category => category.name === this.$route.params.name)
    },
    currentKeyword () {
      return this.$route.params.keyword
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/mixins';

.article-header {
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: hsla(0, 0%, 100%, .6);
  text-align: center;
  color: #555;

  @keyframes logo-rotate {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    33% {
      opacity: .8;
      transform: scale(.9) rotateY(0deg);
    }
    66% {
      opacity: .8;
      transform: scale(.9) rotateY(360deg);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  .logo {
    i {
      font-size: 4rem;
      display: inline-block;
      animation: logo-rotate 5s infinite;
    }
  }
  h5 {
    font-size: 16px;
    font-weight: 300;
  }
}
</style>
