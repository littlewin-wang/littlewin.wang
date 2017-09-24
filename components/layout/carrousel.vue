<template>
  <div>
    <div class="swiper" v-swiper:swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide item" v-for="(article, index) in articles" :key="index">
          <img src="http://7xpot0.com1.z0.glb.clouddn.com/16-11-7/16133495.jpg" alt="">
          <span>
            <a href="">应该是展望</a>
          </span>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articles: [
        {
          content: '123'
        },
        {
          content: '123'
        },
        {
          content: '123'
        },
        {
          content: '123'
        },
        {
          content: '123'
        },
        {
          content: '123'
        },
        {
          content: '123'
        },
        {
          content: '123'
        },
        {
          content: '123'
        }
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
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
