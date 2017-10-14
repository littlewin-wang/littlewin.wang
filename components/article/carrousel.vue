<template>
  <div>
    <div class="swiper" v-swiper:swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide item" v-for="(article, index) in articles" :key="index">
          <img :src="article.thumb">
          <span>
            <nuxt-link :to="`/article/${article.id}`">{{article.title}}</nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        slidesPerView: 4,
        spaceBetween: 10,
        mousewheelControl: true,
        autoplayDisableOnInteraction: false,
        lazyLoading: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/mixins';

.swiper {
  position: relative;
  height: 120px;
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
  .swiper-wrapper {
    .swiper-slide {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      &:hover {
        img {
          opacity: 1;
          @include css3-prefix(transform, scale(1.2) rotate(3deg));
          @include css3-prefix(transition, all 1s);
        }
      }
      img {
        height: 100%;
        opacity: .8;
      }
      span {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 12px;
        a {
          display: inline-block;
          padding: .2rem 0;
          width: 100%;
          color: #fff;
          font-weight: 300;
          background-color: hsla(0, 0%, 65%, .5);
        }
      }
    }
  }
}
</style>
