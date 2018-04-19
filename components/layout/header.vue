<template>
  <transition :enter-active-class="'animated slideInDown'" :leave-active-class="'animated slideOutUp'">
    <header class="bg-white">
      <div class="header-container" :class="{'open-nav': isOpen}">
        <nuxt-link to="/">
          <div class="header-logo">
            <h3>LITTLEWIN</h3>
          </div>
        </nuxt-link>
        <div class="mobile-toggle" @click="handleOpen">
          <span></span>
          <span></span>
          <span class="last"></span>
        </div>
        <nav>
          <ul>
            <li @click="handleClick">
              <nuxt-link to="/simple">极简</nuxt-link>
            </li>
            <li @click="handleClick">
              <nuxt-link to="/notes">学记</nuxt-link>
            </li>
            <li @click="handleClick">
              <nuxt-link to="/project">项目</nuxt-link>
            </li>
            <li @click="handleClick">
              <nuxt-link to="/about">关于</nuxt-link>
            </li>
            <li @click="handleClick">
              <nuxt-link to="/guest">留言</nuxt-link>
            </li>
            <li>
              <Search @search="goSearch"></Search>
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
    handleClick (e) {
      this.isOpen = false
    },
    handleOpen () {
      this.isOpen = !this.isOpen
    },
    goSearch (str) {
      this.isOpen = false
      this.$router.push(`/search/${str}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin small {
  @media only screen and (max-width: 768px) {
    @content;
  }
}

header {
  position: fixed;
  display: block;
  width: 100%;
  height: 70px;
  line-height: 70px;
  padding: 0;
  text-align: right;
  background-color: hsla(0, 0%, 100%, .8);
  z-index: 999;
  .header-container {
    max-width: 980px;
    height: 100%;
    margin: 0 auto;
    position: relative;

    .header-logo {
      position: absolute;
      top: 0;
      left: 30px;
      cursor: pointer;
      h3 {
        position: relative;
        margin: 0;
        padding: 0;
        font-size: 2rem;
        &:after {
          position: absolute;
          content: ".WANG";
          font-size: 16px;
          top: -8px;
          left: 100%;
        }
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
        color: #000;
        background-color: hsla(0, 0%, 100%, .9);
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
          font-weight: 300;
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

