<template>
  <transition :enter-active-class="'animated slideInDown'" :leave-active-class="'animated slideOutUp'">
    <header class="bg-white">
      <div class="header-container" :class="{'open-nav': isOpen}">
        <div class="header-logo">
          <div class="logo">
            <img src="http://7xpot0.com1.z0.glb.clouddn.com/17-9-17/58691829.jpg" alt="琪中有不凡">
          </div>
          <div class="title">
            <img src="http://7xpot0.com1.z0.glb.clouddn.com/17-9-17/40516074.jpg" alt="琪中有不凡">
          </div>
        </div>
        <div class="mobile-toggle" @click="handleOpen">
          <span></span>
          <span></span>
          <span class="last"></span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" @click="handleOpen">首页</a>
            </li>
            <li>
              <a href="#" @click="handleOpen">分类</a>
            </li>
            <li>
              <a href="#" @click="handleOpen">标签</a>
            </li>
            <li>
              <a href="#" @click="handleOpen">关于</a>
            </li>
            <li>
              <Search></Search>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </transition>
</template>

<script>
import Search from '~/components/common/search.vue'
export default {
  name: 'Header',
  components: {
    Search
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    handleOpen () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin small {
  @media only screen and (max-width: 766px) {
    @content;
  }
}

header {
  display: block;
  width: 100%;
  height: 70px;
  line-height: 70px;
  padding: 0;
  text-align: right;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
  .header-container {
    max-width: 980px;
    height: 100%;
    margin: 0 auto;
    position: relative;

    .header-logo {
      height: 60%;
      width: 60px;
      position: absolute;
      top: 20%;
      left: 30px;
      overflow: hidden;
      cursor: pointer;
      .logo {
        height: 60%;
        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }
      .title {
        height: 40%;
        line-height: 16px;
        vertical-align: middle;
        text-align: center;
        font-size: 14px;
      }
    }

    .mobile-toggle {
      display: none;
      cursor: pointer;
      font-size: 20px;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      transition: all 200ms ease-in;
      @include small {
        display: block;
      }

      span {
        width: 30px;
        height: 4px;
        border-radius: 1000px;
        background: #8f8f8f;
        display: block;
      }

      span:not(.last) {
        margin-bottom: 6px;
      }
    }

    nav {
      position: absolute;
      right: 0;
      @include small {
        display: none;
        top: 100%;
        width: 100%;
        opacity: 0.4;
      }

      ul {
        margin-bottom: 0;
        list-style: none;
        overflow: hidden;
        text-align: right;
        float: right;
        @include small {
          padding-top: 10px;
          padding-left: 0;
          margin-bottom: 20px;
          float: left;
          text-align: center;
          width: 100%;
        }

        li {
          display: inline-block;
          margin-left: 35px;
          line-height: 1.5;
          vertical-align: middle;
          @include small {
            display: block;
            width: 100%;
            padding: 7px 0;
            margin: 0;
          }
        }
        a {
          color: #888888;
          text-transform: uppercase;
          font-size: 16px;
        }
      }
    }
  }

  .open-nav {
    .mobile-toggle {
      transform: translateY(-50%) rotate(-90deg);
    }
    nav {
      display: block;
    }
  }
}
</style>

