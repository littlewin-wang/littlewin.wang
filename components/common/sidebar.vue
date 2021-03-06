<template>
  <div class="article-sidebar">
    <div class="article-sidebar-box">
      <div class="container">
        <div class="player">
          <div class="img">
            <img :class="playerState.playing? 'active' : ''" :src="currentSongPic" :alt="currentSong ? currentSong.name : 'No current song'">
            <div class="center"></div>
          </div>
          <div class="main">
            <div class="ctrl">
              <i class="iconfont icon-prev" @click="handlePrev"></i>
              <i class="iconfont" :class="playerState.playing ? 'icon-pause' : 'icon-play'" @click="handlePlay"></i>
              <i class="iconfont icon-next" @click="handleNext"></i>
              <i class="iconfont" :class="!playerState.muted ? 'icon-volume' : 'icon-mute'" @click="handleMute"></i>
            </div>
            <div class="progress">
              <div class="inner" :style="{width: `${currentSongProgress}%`}"></div>
            </div>
            <div class="content">
              <!-- <a target="_blank" rel="external nofollow" :href="currentSong ? `http://music.163.com/#/song?id=${currentSong.id}` : ''">{{ currentSong ? currentSong.name : '' }}</a> -->
              <nuxt-link to="/music">{{ currentSong ? currentSong.name : '' }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="full-screen">
        <nuxt-link to="/music"><i class="iconfont icon-fullscreen"></i></nuxt-link>
      </div>
    </div>
    <div class="article-sidebar-box">
      <h5 class="title">
        <i class="iconfont icon-menu"></i>
        热门文章
      </h5>
      <div class="container" v-if="!articles.data.articles.length">
        <p>暂无热门文章</p>
      </div>
      <div class="container">
        <ul>
          <li>
            <div class="post" v-for="(article, index) in articles.data.articles" :key="index">
              <div class="content">
                <h5>
                  <nuxt-link :to="`/article/${article.id}`">{{article.title}}</nuxt-link>
                </h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="article-sidebar-box">
      <h5 class="title">
        <i class="iconfont icon-menu"></i>
        标签
      </h5>
      <div class="container" v-if="!tags.data.tags.length">
        <p>暂无标签</p>
      </div>
      <div class="container">
        <ul>
          <li class="tag-container" v-for="(tag, index) in tags.data.tags" :key="index">
            <nuxt-link :to="`/tag/${tag.name}`" class="tag">
              <i class="iconfont" :class="[tag.extends.find(t => Object.is(t.name, 'icon')).value]"></i>
              <span data-v-3a678449="">&nbsp;</span>
              <span data-v-3a678449="">{{tag.name}}</span>
              <span data-v-3a678449="">({{tag.count}})</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="article-sidebar-box">
      <h5 class="title">
        <i class="iconfont icon-menu"></i>
        最新评论
      </h5>
      <div class="container" v-if="!comments.comments.length">
        <p>暂无最新评论</p>
      </div>
      <div class="container">
        <ul>
          <li>
            <div class="comment" :class="{'right': !comment.author.email || comment.author.email !== 'littlewin.wang@gmail.com'}" v-for="(comment,index) in this.comments.comments" :key="index">
              <div class="comment-avatar">
                <a target="_blank" rel="external nofollow" :href="comment.author.site" @click.stop="clickUser($event, comment.author)"><img :alt="comment.author.name || '匿名用户'" :src="gravatar(comment.author.email) || '/images/anonymous.jpg'"></a>
              </div>
              <div class="comment-content">
                <nuxt-link :to="`/article/${comment.postID}`" v-if="comment.postTitle">
                  <div v-html="marked(comment.content)"></div>
                </nuxt-link>
                <nuxt-link :to="`/guest`" v-else>
                  <div v-html="marked(comment.content)"></div>
                </nuxt-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import marked from '~/plugins/marked'
import global from '~/utils/global'
import gravatar from '~/plugins/gravatar'

export default {
  name: 'Sidebar',
  props: {
    articles: Object,
    tags: Object,
    comments: Object
  },
  computed: {
    player () {
      return global.music.player
    },
    playerState () {
      return global.music.playerState
    },
    currentSong () {
      return global.currentSong
    },
    currentSongPic () {
      if (this.currentSong) {
        const picUrl = this.currentSong.album.picUrl
        return picUrl ? picUrl.replace('http://', 'https://littlewin.wang/proxy/') + '?param=600y600' : 'https://static.littlewin.wang/blog/music-bg.jpeg'
      } else {
        return 'https://static.littlewin.wang/blog/music-bg.jpeg'
      }
    },
    currentSongProgress () {
      return this.playerState.progress || 0
    }
  },
  methods: {
    // 上一曲
    handlePrev () {
      this.player.prev()
    },
    // 音乐播放控制
    handlePlay () {
      this.player.toggle()
    },
    // 下一曲
    handleNext () {
      this.player.next()
    },
    // mute控制
    handleMute () {
      this.player.mute()
    },
    // markdown转义
    marked (content) {
      return marked(content, null, false)
    },
    // 点击用户
    clickUser (event, user) {
      if (!user.site) event.preventDefault()
    },
    // 头像服务
    gravatar (email) {
      if (!/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(email)) {
        return null
      }
      let gravatarUrl = gravatar.url(email, {
        protocol: 'https'
      })
      return gravatarUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.article-sidebar {
  .article-sidebar-box {
    position: relative;
    margin-bottom: 1rem;
    background-color: hsla(0, 0%, 100%, .6);
    .full-screen {
      position: absolute;
      top: .5rem;
      right: .5rem;
      cursor: pointer;
      i {
        font-size: 12px;
        font-weight: 500;
        color: #ccc;
      }
      &:hover {
        i {
          color: #48494d;
        }
      }
    }
  }
  .title {
    margin: 0;
    padding-left: 1rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 14px;
    font-weight: 400;
    color: #48494d;
    border-bottom: 1px dashed #eee;
    i {
      font-size: 14px;
    }
  }
  .container {
    padding: .8rem 1rem;
    .post {
      &:hover {
        background-color: hsla(0, 0%, 77%, .4);
      }
      .content {
        padding: .5rem 1rem;
        h5 {
          margin: .2rem 0;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .tag-container {
      display: inline-block;
      margin-right: 1rem;
      margin-bottom: 1rem;
      .tag {
        display: inline-block;
        height: 2em;
        padding: 0 .5em;
        line-height: 2em;
        font-size: 13px;
        background-color: hsla(0, 0%, 77%, .4);
        &:hover {
          background-color: rgba(95, 95, 95, .4);
        }
      }
    }
    .comment {
      display: flex;
      align-items: center;
      .comment-avatar {
        margin-right: .5rem;
        width: 2rem;
        height: 2rem;
        a {
          display: inline-block;
          width: 2rem;
          height: 2rem;
          img {
            border-radius: 50%;
          }
        }
      }
      .comment-content {
        margin: 0;
        padding: .2rem .5rem;
        border-radius: .4rem;
        color: #555;
        background-color: rgba(102, 204, 255, .4);
        &:hover {
          background-color: rgba(102, 153, 204, .4);
        }
        a {
          text-decoration: none;
        }
      }

      &.right {
        justify-content: flex-end;
        .comment-avatar {
          order: 2;
          margin-left: .5rem;
        }
        .comment-content {
          color: #555;
          background-color: hsla(0, 0%, 77%, .4);
          &:hover {
            background-color: rgba(95, 95, 95, .4);
          }
          a {
            text-decoration: none;
          }
        }
      }

      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
    .player {
      display: flex;
      height: 60px;
      padding: .4rem 0;
      .img {
        position: relative;
        flex: 0 0 calc(60px - 0.8rem);
        img {
          border-radius: 50%;
          &.active {
            animation: rotate 12s infinite linear;
          }
        }
        .center {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
        }
      }
      .main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        color: #ccc;
        .ctrl {
          i {
            cursor: pointer;
            padding: .4rem;
            &:hover {
              color: #777;
            }
          }
        }
        .progress {
          height: 2px;
          margin: 0 1rem;
          background: #eee;
          .inner {
            height: 100%;
            background: #bbb;
          }
        }
        .content {
          a {
            white-space: nowrap;
            color: #ccc;
            &:hover {
              color: #777;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
