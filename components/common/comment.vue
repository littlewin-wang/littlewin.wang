<template>
  <div class="comment">
    <div class="comment-box">
      <div class="toolbar">
        <div class="left">
          <span>{{comment.data.total}}条评论</span>
          <span>
            <i class="iconfont icon-love"></i>
            11人喜欢
          </span>
        </div>
        <div class="right">
          <a href="" class="sort-btn" :class="{ actived: Object.is(sortMode, -1) }">最新</a>
          <a href="" class="sort-btn" :class="{ actived: Object.is(sortMode, 2) }">最热</a>
        </div>
      </div>
      <div class="list">
        <ul>
          <li class="comment-item" :id="`comment-item-${comment.id}`" :key="index" v-for="(comment, index) in comment.data.comments">
            <div class="cm-avatar">
              <a target="_blank" rel="external nofollow" :href="comment.author.site">
                <img :alt="comment.author.name || '匿名用户'" :src="'/images/anonymous.png'">
              </a>
            </div>
            <div class="cm-body">
              <div class="cm-header">
                <a class="user-name" target="_blank" rel="external nofollow" :href="comment.author.site">
                  {{ comment.author.name }}
                </a>
                <span class="os" v-if="comment.agent">
                  <i class="iconfont" :class="OSClass(comment.agent)"></i>
                  {{OSParse(comment.agent)}}
                </span>
                <span class="ua" v-if="comment.agent">
                  <i class="iconfont icon-internet"></i>
                  {{UAParse(comment.agent)}}
                </span>
                <span class="id">#{{ comment.id }}</span>
              </div>
              <div class="cm-content">
                <p class="reply" v-if="!!comment.pid">
                  <span>回复 </span>
                  <a href="">
                    <span>#{{ comment.pid }}&nbsp;</span>
                  </a>
                  <span>：</span>
                </p>
                <div v-html="marked(comment.content)"></div>
              </div>
              <div class="cm-footer">
                <span class="create_at">{{new Date(comment.createAt).toLocaleDateString()}}</span>
                <a href="" class="reply">
                  <i class="iconfont icon-reply"></i>
                  <span>回复</span>
                </a>
                <a href="" class="like">
                  <i class="iconfont icon-zan"></i>
                  <span>顶&nbsp;({{ comment.likes }})</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="pagination" v-if="comment.data.pages > 1">
        <ul class="list">
          <li class="item" v-for="(item, index) in comment.data.pages" :key="index">
            <a href="" class="pagination-btn" :class="{ 'actived disabled': paginationReverseActive(item) }" @click.stop.prevent="paginationReverseActive(item)
                                ? false
                                : loadComemntList({
                                    page: comment.data.pages + 1 - item
                                })">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import marked from '~/plugins/marked'
import UA from 'ua-device'

export default {
  name: 'comment',
  data () {
    return {
      sortMode: -1
    }
  },
  props: {
    likes: {
      type: [String, Number],
      required: true
    },
    postID: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    comment () {
      return this.$store.state.comment
    }
  },
  mounted () {
    if (!this.comment.data.pages) {
      this.loadComemntList()
    }
  },
  methods: {
    // 获取评论列表
    loadComemntList (params = {}) {
      params.sort = this.sortMode
      this.$store.dispatch('loadCommentsByPostId', Object.assign(params, { postID: this.postID }))
    },
    OSParse (agent) {
      let ua = new UA(agent)
      return ua.os.name
    },
    OSClass (agent) {
      let ua = new UA(agent)
      switch (true) {
        case /win/.test(ua.os.name):
          return 'icon-windows'
          break
        case /Mac/.test(ua.os.name):
          return 'icon-mac'
          break
        case /Android/.test(ua.os.name):
          return 'icon-android'
          break
        case /iOS/.test(ua.os.name):
          return 'icon-mac'
          break
        case /Linux/.test(ua.os.name):
          return 'icon-linux'
          break
        default:
          return 'icon-device'
          break
      }
    },
    UAParse (agent) {
      let ua = new UA(agent)
      return `${ua.browser.name} - ${ua.browser.version.original.split('.')[0]}`
    },
    marked (content) {
      return marked(content, null, false)
    },
    // 翻页反向计算
    paginationReverseActive (index) {
      const comment = this.comment.data
      return Object.is(index, comment.pages + 1 - comment.page)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/mixins';
@import '~assets/sass/variables';
.toolbar {
  display: flex;
  justify-content: space-between;
  padding: .5rem 0 1rem 0;
  border-bottom: 1px solid hsla(0, 0%, 77%, .4);
  .left {
    span {
      padding: .2em .5em;
      background-color: hsla(0, 0%, 77%, .4);
      margin-right: .5rem;
      >i {
        font-size: 1.3rem;
      }
      &:hover {
        background-color: darken(hsla(0, 0%, 77%, .4), 20%);
      }
      &.liked {
        >i {
          color: #f44336;
        }
      }
    }
  }
  .right {
    .sort-btn {
      margin-left: .5rem;
      &.actived {
        color: #000;
        font-weight: bold;
      }
    }
  }
}

.comment-item {
  position: relative;
  padding: .6em 0 .6em 1.5em;

  &:hover {

    >.cm-avatar {
      >a {
        >img {
          transition: transform .5s ease-out;
          transform: rotate(360deg);
        }
      }
    }

    >.cm-body {
      background-color: darken($module-hover-bg, 20%);
    }
  }

  >.cm-avatar {
    display: block;
    position: absolute;
    left: 0;
    top: 2em;
    background-color: $module-hover-bg;

    >a {
      display: block;
      border: .3em solid $module-bg;
      width: 4em;
      height: 4em;

      >img {
        width: 100%;
        height: 100%;
        transition: transform .5s ease-out;
      }
    }
  }

  >.cm-body {
    display: block;
    width: 100%;
    height: 100%;
    padding: .6rem .6rem .6rem 3.2rem;
    background-color: $module-hover-bg;

    >.cm-header {
      display: block;
      position: relative;

      >.user-name {
        font-weight: bold;
        margin-right: .8rem;
        &:hover {
          text-decoration: underline;
        }
      }

      >.os,
      >.ua,
      >.location {
        color: $disabled;
        font-size: .8rem;
        margin-right: .8rem;

        .iconfont {
          font-size: .8rem;
          margin-right: .2rem;
        }
      }

      >.id {
        color: $dividers;
        font-weight: 900;
        font-size: .8rem;
        display: inline-block;
        line-height: 2rem;
        float: right;
      }
    }

    >.cm-content {
      font-size: .95rem;

      >.reply {
        color: $disabled;
        font-weight: bold;

        >a {
          text-decoration: none;
        }
      }
    }

    >.cm-footer {
      display: flex;
      line-height: 1.5rem;

      >.create_at,
      >.reply,
      >.like {
        font-size: .8rem;
        margin-right: 1rem;
      }

      >.create_at {
        color: $disabled;
      }

      >.like {

        &:hover {
          color: $red;
        }

        &.liked {
          color: $red;
          font-weight: bold;
        }

        &.actived {
          font-weight: bold;

          &:hover {
            color: $red;
          }
        }
      }

      >.reply,
      >.like {
        opacity: .8;

        >.iconfont {
          opacity: .8;
          margin-right: .2rem;
        }

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}

.pagination {
  margin-top: .5rem;

  >.list {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style-type: none;

    >.item {
      margin: 0 0.5em;

      >.pagination-btn {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        display: inline-block;
        line-height: 2rem;
        text-align: center;

        &.prev,
        &.next {
          width: 5em;
          font-size: .9em;

          &:hover {
            background: none;
          }
        }

        &.disabled {
          cursor: no-drop;
          opacity: .5;
        }

        &.actived,
        &:hover {
          background-color: $module-hover-bg;
        }
      }
    }
  }
}
</style>
