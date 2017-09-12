<template>
  <div class="select">
    <div class="select-content" @click="handleOpen">
      <span>{{value ? value : placeholder}}</span>
      <i class="iconfont" :class="classObject">
      </i>
    </div>
    <div class="select-options" v-if="isOpen">
      <div class="select-option" @click="handleClick('')">
        <span>(取消选择)</span>
      </div>
      <div class="select-option" :class="{active : activeIndex === index}" v-for="(option, index) in options" :key="index" @click="handleClick(index)">
        <span>{{option}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Select',
  data () {
    return {
      isOpen: false,
      placeholder: '选择分类',
      value: '',
      activeIndex: '',
      options: ['生活', '学习', '编程', '学习']
    }
  },
  computed: {
    classObject () {
      return {
        'icon-up': this.isOpen,
        'icon-down': !this.isOpen
      }
    }
  },
  methods: {
    handleOpen () {
      this.isOpen = !this.isOpen
    },
    handleClick (index) {
      this.value = this.options[index]
      this.activeIndex = index
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  max-width: 120px;

  .select-content {
    position: relative;
    padding: 6px 1rem 6px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    i {
      position: absolute;
      right: 0;
    }
  }

  .select-options {
    max-height: 140px;
    opacity: .5;
    overflow-y: auto;
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
      width: 4px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #0ae;
      background-image: -webkit-gradient(linear, 0 0, 0 100%,
      color-stop(.5, rgba(255, 255, 255, .2)),
      color-stop(.5, transparent), to(transparent));
    }

    .select-option {
      padding: 6px 0;
      color: #747474;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        background: #cff;
      }
      &.active {
        color: #fff;
        background: #6cf;
      }
    }
  }
}
</style>

