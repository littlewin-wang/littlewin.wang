<template>
  <div>
    <div class="swiper" v-swiper:swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide item" v-for="(article, index) in articles.data.articles" :key="index">
          <img :src="article.thumb">
          <span>
            <nuxt-link :to="`/article/${article.id}`">{{article.title}}</nuxt-link>
          </span>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: Object,
    clientWidth: Number
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        slidesPerView: this.clientWidth > 768 ? 3 : this.clientWidth > 500 ? 2 : 1,
        spaceBetween: this.clientWidth > 768 ? 30 : this.clientWidth > 500 ? 10 : 0,
        paginationClickable: true,
        mousewheelControl: true,
        autoplayDisableOnInteraction: false,
        lazyLoading: true
      }
    }
  },
  computed: {
    slidesPerView () {
      return this.clientWidth > 768 ? 3 : this.clientWidth > 500 ? 2 : 1
    },
    spaceBetween () {
      return this.clientWidth > 768 ? 30 : this.clientWidth > 500 ? 10 : 0
    }
  },
  watch: {
    clientWidth () {
      this.$set(this.swiperOption, 'slidesPerView', this.slidesPerView)
      this.$set(this.swiperOption, 'spaceBetween', this.spaceBetween)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/mixins';

.swiper {
  position: relative;
  height: 200px;
  width: 100%;
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
      img {
        height: 100%;
        margin: 0 auto;
        @include css3-prefix(transform, rotate(0deg) scale(1));
        @include css3-prefix(transition, transform 1s);

        &:hover {
          @include css3-prefix(transform, rotate(2deg) scale(1.1));
        }
      }
      span {
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-size: 14px;
        a {
          display: inline-block;
          padding: .5rem;
          background-color: hsla(0, 0%, 100%, .6);
          &:hover {
            background-color: hsla(0, 0%, 77%, .4);
          }
        }
      }
      @media screen and (max-width: 768px) {
        span {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
}
</style>
