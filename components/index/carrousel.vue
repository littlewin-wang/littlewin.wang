<template>
  <div>
    <div class="swiper" v-swiper:swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide item" v-for="(article, index) in articles.data.articles" :key="index">
          <img :src="article.thumb" alt="">
          <span>
            <a href="">{{article.title}}</a>
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
    articles: Object
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        spaceBetween: 30,
        paginationClickable: true,
        mousewheelControl: true,
        autoplayDisableOnInteraction: false,
        lazyLoading: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      img {
        height: 100%
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
    }
  }
}
</style>
