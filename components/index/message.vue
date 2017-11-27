<template>
  <div class="container">
    <div class="logo">
      <i class="iconfont icon-announce"></i>
    </div>
    <transition :name="transitionName">
      <div class="content" v-if="show" v-html="markedContent(messages[active].content)"></div>
    </transition>
    <div class="control">
      <i class="iconfont icon-up" @click="prev"></i>
      <i class="iconfont icon-down" @click="next"></i>
    </div>
  </div>
</template>

<script>
import marked from '~/plugins/marked'

export default {
  name: 'Message',
  props: {
    messages: Array
  },
  data () {
    return {
      show: true,
      active: 0,
      transitionName: 'slide-down-fade'
    }
  },
  methods: {
    markedContent (content) {
      return marked(content, null, true)
    },
    prev () {
      this.transitionName = 'slide-up-fade'
      this.$nextTick(() => {
        this.show = false
      })
      setTimeout(() => {
        this.active = (this.active === 0 ? this.messages.length - 1 : this.active - 1)
        this.show = true
      }, 500)
    },
    next () {
      this.transitionName = 'slide-down-fade'
      this.$nextTick(() => {
        this.show = false
      })
      setTimeout(() => {
        this.active = (this.active === this.messages.length - 1 ? 0 : this.active + 1)
        this.show = true
      }, 500)
    }
  },
  mounted () {
    this.autoRun = setInterval(() => {
      this.transitionName === 'slide-up-fade' ? this.prev() : this.next()
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;
    line-height: 28px;
    padding: .5rem 1rem;
    overflow: hidden;
    background-color: hsla(0, 0%, 100%, .6);
    .content {
      max-width: 90%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .control {
      display: flex;
      flex-direction: column;
      i {
        line-height: 14px;
        color: hsla(0,0%,77%,.4);
        &:hover {
          color: #555
        }
      }
    }
  }

// slide down transition
.slide-down-fade-enter-active {
  transition: all .5s ease;
}
.slide-down-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-down-fade-enter {
  transform: translateY(-14px);
  opacity: 0;
}
.slide-down-fade-leave-to{
  transform: translateY(14px);
  opacity: 0;
}

// slide up transition
.slide-up-fade-enter-active {
  transition: all .5s ease;
}
.slide-up-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-up-fade-enter {
  transform: translateY(14px);
  opacity: 0;
}
.slide-up-fade-leave-to{
  transform: translateY(-14px);
  opacity: 0;
}
</style>

