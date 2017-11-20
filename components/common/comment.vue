<template>
  <div class="comment">
    <div class="comment-box">
      <div class="toolbar">
        <div class="left">
          <span>{{ comment.data.total || 0 }}条评论</span>
          <span style="cursor:pointer" :class="{ liked: pageLiked }" @click.stop.prevent="likePage">
            <i class="iconfont icon-love"></i>
            {{ likes || 0 }}人喜欢
          </span>
        </div>
        <div class="right">
          <a href="" class="sort-btn" :class="{ actived: Object.is(sortMode, -1) }" @click.stop.prevent="sortComments(-1)">最新</a>
          <a href="" class="sort-btn" :class="{ actived: Object.is(sortMode, 2) }" @click.stop.prevent="sortComments(2)">最热</a>
        </div>
      </div>
      <div class="empty-box" v-if="!comment.data.comments.length && !comment.fetching">
        You're first, no one can replace you.
      </div>
      <div class="list">
        <ul>
          <li class="comment-item" :id="`comment-item-${comment.id}`" :key="index" v-for="(comment, index) in comment.data.comments">
            <div class="cm-avatar">
              <a target="_blank" rel="external nofollow" :href="comment.author.site" @click.stop="clickUser($event, comment.author)">
                <img :alt="comment.author.name || '匿名用户'" :src="gravatar(comment.author.email) || '/images/anonymous.jpg'">
              </a>
            </div>
            <div class="cm-body">
              <div class="cm-header">
                <a class="user-name" target="_blank" rel="external nofollow" :href="comment.author.site" @click.stop="clickUser($event, comment.author)">
                  {{ comment.author.name }}
                </a>
                <span class="os" v-if="comment.agent">
                  <i class="iconfont" :class="OSClass(comment.agent)"></i>
                  <span>{{OSParse(comment.agent)}}</span>
                </span>
                <span class="ua" v-if="comment.agent">
                  <i class="iconfont icon-internet"></i>
                  <span>{{UAParse(comment.agent)}}</span>
                </span>
                <span class="location" v-if="comment.ip_location">
                  <span>{{ comment.ip_location.country }}</span>
                  <span v-if="comment.ip_location.country && comment.ip_location.city">&nbsp;-&nbsp;</span>
                  <span>{{ comment.ip_location.city }}</span>
                </span>
                <span class="id">#{{ comment.id }}</span>
              </div>
              <div class="cm-content">
                <p class="reply" v-if="!!comment.pid">
                  <span>回复 </span>
                  <a href="" @click.stop.prevent="toSomeAnchorById(`comment-item-${comment.pid}`)">
                    <span>#{{ comment.pid }}&nbsp;</span>
                    <strong v-if="getReply(comment.pid)">@{{ getReply(comment.pid) }}</strong>
                  </a>
                  <span>：</span>
                </p>
                <div v-html="marked(comment.content)"></div>
              </div>
              <div class="cm-footer">
                <span class="create_at">{{new Date(comment.createAt).toLocaleDateString()}}</span>
                <a href="" class="reply" @click.stop.prevent="replyComment(comment)">
                  <i class="iconfont icon-reply"></i>
                  <span>回复</span>
                </a>
                <a href="" class="like" :class="{ liked: commentLiked(comment.id), actived: !!comment.likes }" @click.stop.prevent="likeComment(comment)">
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
            <a href="" class="pagination-btn" :class="{ 'actived disabled': paginationReverseActive(item) }" @click.stop.prevent="paginationReverseActive(item) ? false : loadCommentList({ page: comment.data.pages + 1 - item})">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>
      <form class="post" id="post" name="comment">
        <div class="user" v-if="!userCacheMode || userCacheEditing">
          <div class="name">
            <input required type="text" name="name" placeholder="name *" v-model="user.name">
          </div>
          <div class="email">
            <input required type="email" name="email" placeholder="email *" v-model="user.email" @blur="updateGravatar">
          </div>
          <div class="site">
            <input type="url" name="url" placeholder="site" v-model="user.site">
          </div>
          <div class="save" v-if="userCacheEditing">
            <button type="submit" @click="updateUserCache($event)">
              <i class="iconfont icon-confirm"></i>
            </button>
          </div>
        </div>
        <div class="user" v-else-if="userCacheMode && !userCacheEditing">
          <div class="edit">
            <strong class="name">{{ user.name }}</strong>
            <a href="" class="setting" @click.stop.prevent>
              <i class="iconfont icon-setting"></i>
              <span>账户设置</span>
              <ul class="user-tool">
                <li @click.stop.prevent="userCacheEditing = true">编辑信息</li>
                <li @click.stop.prevent="clearUserCache">清空信息</li>
              </ul>
            </a>
          </div>
        </div>
        <div class="editor-box">
          <div class="user">
            <div class="gravatar">
              <img :alt="user.name || '匿名用户'" :src="user.gravatar || '/images/anonymous.jpg'">
            </div>
          </div>
          <div class="editor">
            <div class="will-reply" v-if="!!pid">
              <div class="reply-user">
                <span>
                  <span>回复 </span>
                  <a href="" @click.stop.prevent="toSomeAnchorById(`comment-item-${replyCommentSelf.id}`)">
                    <strong>#{{ replyCommentSelf.id }} @{{ replyCommentSelf.author.name }}:</strong>
                  </a>
                </span>
                <a href="" class="cancel iconfont icon-close" @click.stop.prevent="closeCommentReply"></a>
              </div>
              <div class="reply-preview" v-html="marked(replyCommentSelf.content)"></div>
            </div>
            <div class="markdown">
              <div class="markdown-editor" ref="markdown" contenteditable="true" placeholder="凡事三思而后言" @keyup="commentContentChange($event)">
              </div>
              <div class="markdown-preview" :class="{ actived: previewMode }" v-html="previewContent">
              </div>
            </div>
            <div class="editor-tools">
              <a href="" class="emoji" title="插入emoji表情" @click.stop.prevent>
                <i class="iconfont icon-emoji"></i>
                <div class="emoji-box">
                  <ul class="emoji-list">
                    <li class="item" @click="insertEmoji('😃')">😃</li>
                    <li class="item" @click="insertEmoji('😂')">😂</li>
                    <li class="item" @click="insertEmoji('😅')">😅</li>
                    <li class="item" @click="insertEmoji('😉')">😉</li>
                    <li class="item" @click="insertEmoji('😌')">😌</li>
                    <li class="item" @click="insertEmoji('😔')">😔</li>
                    <li class="item" @click="insertEmoji('😓')">😓</li>
                    <li class="item" @click="insertEmoji('😢')">😢</li>
                    <li class="item" @click="insertEmoji('😍')">😍</li>
                    <li class="item" @click="insertEmoji('😘')">😘</li>
                    <li class="item" @click="insertEmoji('😜')">😜</li>
                    <li class="item" @click="insertEmoji('😡')">😡</li>
                    <li class="item" @click="insertEmoji('😭')">😭</li>
                    <li class="item" @click="insertEmoji('😱')">😱</li>
                    <li class="item" @click="insertEmoji('😳')">😳</li>
                    <li class="item" @click="insertEmoji('😵')">😵</li>
                    <li class="item" @click="insertEmoji('🌚')">🌚</li>
                    <li class="item" @click="insertEmoji('👻')">👻</li>
                    <li class="item" @click="insertEmoji('🙏')">🙏</li>
                    <li class="item" @click="insertEmoji('👆')">👆</li>
                    <li class="item" @click="insertEmoji('👇')">👇</li>
                    <li class="item" @click="insertEmoji('👌')">👌</li>
                    <li class="item" @click="insertEmoji('👍')">👍</li>
                    <li class="item" @click="insertEmoji('👎')">👎</li>
                    <li class="item" @click="insertEmoji('💪')">💪</li>
                    <li class="item" @click="insertEmoji('👏')">👏</li>
                    <li class="item" @click="insertEmoji('🌻')">🌻</li>
                    <li class="item" @click="insertEmoji('🌹')">🌹</li>
                    <li class="item" @click="insertEmoji('💊')">💊</li>
                    <li class="item" @click="insertEmoji('🇨🇳')">🇨🇳</li>
                    <li class="item" @click="insertEmoji('🇺🇸')">🇺🇸</li>
                  </ul>
                </div>
              </a>
              <a href="" class="image" title="插入图片" @click.stop.prevent="insertContent('image')">
                <i class="iconfont icon-image"></i>
              </a>
              <a href="" class="link" title="插入链接" @click.stop.prevent="insertContent('link')">
                <i class="iconfont icon-link"></i>
              </a>
              <a href="" class="code" title="插入代码" @click.stop.prevent="insertContent('code')">
                <i class="iconfont icon-code"></i>
              </a>
              <a href="" class="preview" :class="{ actived: previewMode }" title="预览评论" @click.stop.prevent="togglePreviewMode">
                <i class="iconfont icon-view"></i>
              </a>
              <button type="submit" class="submit" :disabled="comment.posting" @click="submitComment($event)">
                <span>{{ comment.posting ? '发布中...' : '发布' }}</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import marked from '~/plugins/marked'
import gravatar from '~/plugins/gravatar'
import UA from 'ua-device'
import { scrollTo } from '~/utils/scroll-to-anywhere'

export default {
  name: 'comment',
  data () {
    return {
      // 回复的评论ID
      pid: 0,
      // 评论排序 -1:最新 2:最热
      sortMode: -1,
      // 编辑器相关
      commentContentHtml: '',
      commentContentText: '',
      previewContent: '',
      previewMode: false,
      // 用户相关
      userCacheMode: false,
      userCacheEditing: false,
      user: {
        name: '',
        email: '',
        site: '',
        gravatar: null
      },
      // 用户历史点赞数据
      historyLikes: {
        pages: [],
        comments: []
      },
      // 邮箱和地址校验正则
      regexs: {
        email: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
        url: /^((https|http):\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/
      }
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
    isArticlePage () {
      return !!this.$route.params.id
    },
    isGuestPage () {
      return Object.is(this.$route.name, 'guest')
    },
    pageLiked () {
      return this.historyLikes.pages.includes(this.postID)
    },
    comment () {
      return this.$store.state.comment
    },
    replyCommentSelf () {
      return this.comment.data.comments.find(comment => Object.is(comment.id, this.pid))
    }
  },
  mounted () {
    this.initUser()
    if (!this.comment.data.pages) {
      this.loadCommentList()
    }
  },
  destroyed () {
    this.$store.commit('comment/CLEAR_LIST')
  },
  methods: {
    // 初始化本地用户即本地用户的点赞历史
    initUser () {
      if (localStorage) {
        const user = localStorage.getItem('user')
        const historyLikes = localStorage.getItem('user_like_history')
        if (historyLikes) {
          this.historyLikes = JSON.parse(historyLikes)
        }
        if (user) {
          this.user = JSON.parse(user)
          this.updateGravatar()
          this.userCacheMode = true
        }
      }
    },
    // 头像服务
    gravatar (email) {
      if (!this.regexs.email.test(email)) {
        return null
      }
      let gravatar_url = gravatar.url(email, {
        protocol: 'https'
      })
      return gravatar_url
    },
    // 更新头像
    updateGravatar () {
      const isEmailVerified = this.regexs.email.test(this.user.email)
      this.user.gravatar = isEmailVerified ? this.gravatar(this.user.email) : null
    },
    // 更新用户数据
    updateUserCache (event) {
      event.preventDefault()
      if (!this.user.name) return alert('名字？')
      if (!this.user.email) return alert('邮箱？')
      if (!this.regexs.email.test(this.user.email)) return alert('邮箱不合法')
      if (this.user.site && !this.regexs.url.test(this.user.site)) return alert('链接不合法')
      localStorage.setItem('user', JSON.stringify(this.user))
      this.userCacheEditing = false
    },
    // 清空用户数据
    clearUserCache () {
      this.userCacheMode = false
      this.userCacheEditing = false
      localStorage.removeItem('user')
      Object.keys(this.user).forEach(key => {
        this.user[key] = ''
      })
    },
    // 点赞当前页面
    likePage () {
      if (this.pageLiked) {
        return false
      }

      this.$store.dispatch('addLike', { type: 2, id: this.postID })
        .then(data => {
          this.historyLikes.pages.push(this.postID)
          localStorage.setItem('user_like_history', JSON.stringify(this.historyLikes))
        })
        .catch(err => {
          console.warn('喜欢失败', err)
        })
    },
    // 排序评论
    sortComments (sort) {
      if (this.sortMode !== sort) {
        this.sortMode = sort
        this.loadCommentList()
      }
    },
    // 点击用户
    clickUser (event, user) {
      if (!user.site) event.preventDefault()
    },
    // 顶某条评论
    likeComment (comment) {
      if (this.commentLiked(comment.id)) return false
      this.$store.dispatch('addLike', { type: 1, id: comment.id })
        .then(data => {
          this.historyLikes.comments.push(comment.id)
          localStorage.setItem('user_like_history', JSON.stringify(this.historyLikes))
        })
        .catch(err => {
          console.warn('评论点赞失败', err)
        })
    },
    // 获取某条评论是否被点赞
    commentLiked (id) {
      return this.historyLikes.comments.includes(id)
    },
    // 获取评论列表
    loadCommentList (params = {}) {
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
        case /Win/.test(ua.os.name):
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
      return `${ua.browser.name} | ${ua.browser.version.original.split('.')[0]}`
    },
    marked (content) {
      return marked(content, null, false)
    },
    // 回复评论
    replyComment (comment) {
      this.pid = comment.id
      this.toSomeAnchorById('post')
    },
    // 取消回复
    closeCommentReply () {
      this.pid = 0
    },
    // 跳转到某条指定的id位置
    toSomeAnchorById (id) {
      const targetDom = document.getElementById(id)

      if (targetDom) {
        let isToEditor = Object.is(id, 'post')
        scrollTo(targetDom, 200, { offset: isToEditor ? 0 : -300 })
        // 如果是进入编辑模式，则需要激活光标
        if (isToEditor) {
          let p = this.$refs.markdown
          let s = window.getSelection()
          let r = document.createRange()
          r.setStart(p, p.childElementCount)
          r.setEnd(p, p.childElementCount)
          s.removeAllRanges()
          s.addRange(r)
        }
      }
    },
    // 找到回复来源
    getReply (id) {
      const src = this.comment.data.comments.find(comment => Object.is(comment.id, id))
      return src ? src.author.name : null
    },
    // 翻页反向计算
    paginationReverseActive (index) {
      const comment = this.comment.data
      return Object.is(index, comment.pages + 1 - comment.page)
    },
    // 编辑器相关
    commentContentChange () {
      const html = this.$refs.markdown.innerHTML
      const text = this.$refs.markdown.innerText
      if (!Object.is(html, this.comemntContentHtml)) {
        this.commentContentHtml = html
      }
      if (!Object.is(text, this.comemntContentText)) {
        this.commentContentText = text
      }
    },
    updateCommentContent ({ start = '', end = '' }) {
      if (!start && !end) return false
      // 如果选中了内容，则把选中的内容替换，否则在光标位置插入新内容
      const selectedText = (window.getSelection || document.getSelection)().toString()
      const currentText = this.$refs.markdown.innerText
      if (selectedText) {
        const newText = currentText.replace(selectedText, start + selectedText + end)
        this.$refs.markdown.innerText = newText
      } else {
        this.$refs.markdown.innerText = this.$refs.markdown.innerText += (start + end)
        this.$refs.markdown.scrollTop = this.$refs.markdown.scrollHeight
      }
      this.commentContentChange()
    },
    // 清空评论框
    clearCommentContent () {
      this.commentContentHtml = ''
      this.$refs.markdown.innerHTML = this.commentContentHtml
      this.commentContentChange()
    },
    // 切换预览模式
    togglePreviewMode () {
      this.previewContent = this.marked(this.commentContentText)
      this.previewMode = !this.previewMode
    },
    insertEmoji (emoji) {
      this.updateCommentContent({ end: emoji })
    },
    insertContent (type) {
      const contents = {
        image: {
          start: `![`,
          end: `](http://)`
        },
        link: {
          start: `[`,
          end: `](http://)`
        },
        code: {
          start: '\n```javascript\n',
          end: '\n```'
        }
      }
      this.updateCommentContent(contents[type])
    },
    // 提交评论
    submitComment (event) {
      // 为了使用原生表单拦截，不使用事件修饰符
      event.preventDefault()

      // 表单验证
      if (!this.user.name) return alert('名字？')
      if (!this.user.email) return alert('邮箱？')
      if (!this.regexs.email.test(this.user.email)) return alert('邮箱不合法')
      if (this.user.site && !this.regexs.url.test(this.user.site)) return alert('链接不合法')
      if (!this.commentContentText || !this.commentContentText.replace(/\s/g, '')) return alert('内容？')
      const lineOverflow = this.commentContentText.split('\n').length > 36
      const lengthOverflow = this.commentContentText.length > 2000
      if (lineOverflow || lengthOverflow) return alert('内容需要在2000字/36行以内')

      // TODO 使用服务单配置的黑名单在本地校验邮箱和关键字

      if (!this.user.site) {
        delete this.user.site
      }

      this.$store.dispatch('postComment', {
        pid: this.pid,
        postID: this.postID,
        content: this.commentContentText,
        author: this.user,
        agent: navigator.userAgent
      }).then(data => {
        // 发布成功后清空评论框内容并更新本地信息
        this.previewMode = false
        this.userCacheMode = true
        this.closeCommentReply()
        this.clearCommentContent()
        localStorage.setItem('user', JSON.stringify(this.user))
      }).catch(err => {
        console.warn('评论发布失败', err)
        alert('发布失败，原因 => 控制台')
      })
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

.empty-box {
  font-weight: bold;
  text-align: center;
  height: 5rem;
  line-height: 5rem;
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
      height: 2rem;
      line-height: 2rem;

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
        display: inline-block;
        height: 2rem;
        line-height: 2rem;
        color: $disabled;
        margin-right: .5rem;
        font-size: 0.9rem;

        .iconfont {
          font-size: 0.9rem;
          margin-right: .2rem;
        }
      }

      >.id {
        color: $dividers;
        font-weight: 900;
        float: right;
      }

      @media screen and (max-width: 480px) {
        >.os,
        >.ua {
          span {
            display: none
          }
        }
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
      line-height: 2rem;

      >.create_at,
      >.reply,
      >.like {
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

@media screen and (max-width: 400px) {
  .comment-item {
    padding: .6em 0;
    >.cm-avatar {
      display: none;
    }
    >.cm-body {
      padding: .6rem;
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

.post {
  display: block;
  border-top: 1px dashed darken($module-hover-bg, 30%);
  margin-top: 1rem;
  padding-top: 1rem;

  >.user {
    width: 100%;
    height: 2em;
    line-height: 2em;
    display: flex;
    margin-bottom: 1rem;
    padding-left: 5.2rem;

    >.edit {
      flex-grow: 1;
      text-align: right;
      line-height: 2em;
      position: relative;

      >.name {
        font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
      }

      >.setting {
        margin-left: 1rem;
        font-size: 1rem;
        display: inline-block;

        &:hover {

          >.user-tool {
            display: block;
          }
        }

        >.iconfont {
          margin-right: .5rem;
        }

        >.user-tool {
          display: none;
          position: absolute;
          right: 0;
          top: 2em;
          margin: 0;
          padding: 0;
          padding-top: .5rem;
          list-style-type: square;
          z-index: 99;
        }
      }
    }

    >.save {
      width: 10%;
      margin-left: 1em;
      flex-grow: 1;
      line-height: 2em;
      text-align: center;
      font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;

      >button {
        display: block;
        width: 100%;
        background-color: $module-hover-bg;

        &:hover {
          background-color: darken($module-hover-bg, 10%);
        }
      }
    }

    >.name,
    >.email,
    >.site {
      font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
      flex-grow: 1;

      >input {
        width: 100%;
        height: 2em;
        background-color: $module-hover-bg;

        &:focus,
        &:hover {
          background-color: darken($module-hover-bg, 10%);
        }
      }
    }

    >.name,
    >.email {
      margin-right: 1em;
    }
  }

  @media screen and (max-width: 480px) {
    >.user {
      display: block;
      height: auto;
      padding-left: 0;
      >.name,
      >.email,
      >.site {
        margin-right: 4rem;
        margin-bottom: .5rem;
      }
      >.save {
        margin-left: 0;
      }
    }
  }

  >.editor-box {
    width: 100%;
    display: flex;

    >.user {
      margin-right: 1em;

      >.gravatar {
        display: block;
        margin-bottom: .5em;
        width: 4rem;
        height: 4rem;
        background-color: darken($module-hover-bg, 20%);

        >img {
          width: 100%;
          height: 100%;
          transition: transform .5s ease-out;
        }
      }
    }

    @media screen and (max-width: 400px) {
      >.user {
        display: none;
      }
    }

    >.editor {
      flex-grow: 1;
      position: relative;
      overflow: hidden;

      >.will-reply {
        font-size: .95em;
        margin-bottom: 1em;

        >.reply-user {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding: 0 1rem;
          height: 2.6em;
          line-height: 2.6em;
          background-color: $module-hover-bg;

          &:hover {
            background-color: darken($module-hover-bg, 10%);
          }
        }

        >.reply-preview {
          max-height: 10em;
          overflow: auto;
          padding: 1rem;

          background-color: $module-hover-bg;

          &:hover {
            background-color: darken($module-hover-bg, 10%);
          }
        }
      }

      >.markdown {
        position: relative;
        overflow: hidden;

        >.markdown-editor {
          min-height: 6em;
          max-height: 36em;
          overflow: auto;
          outline: none;
          padding: .5em;
          cursor: auto;
          font-size: .95em;
          line-height: 1.8em;
          background-color: $module-hover-bg;

          &:empty:before {
            content: attr(placeholder);
            color: $disabled;
          }

          &:focus {
            content: none;
          }

          &:hover {
            background-color: darken($module-hover-bg, 10%);
          }
        }

        >.markdown-preview {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0;
          overflow: auto;
          margin: 0;
          padding: .5em;
          @include css3-prefix(transform, translateY(-100%));
          background-color: rgba(235, 235, 235, 0.85);
          transition: transform .2s;

          &.actived {
            height: 100%;
            transition: transform .2s;
            @include css3-prefix(transform, translateY(0));
          }
        }
      }

      >.editor-tools {
        height: 2rem;
        line-height: 2rem;
        background-color: darken($module-hover-bg, 20%);

        >.emoji {

          >.emoji-box {
            display: none;
            position: absolute;
            bottom: 2rem;
            left: 0;
            background-color: $module-bg;

            >.emoji-list {
              list-style: none;
              padding: 0;
              margin: 0;
              font-size: 1.4rem;
              display: flex;
              flex-wrap: wrap;

              >.item {
                padding: 0 .4rem;
                cursor: pointer;

                &:hover {
                  background-color: $module-hover-bg;
                }
              }
            }
          }

          &:hover {
            >.emoji-box {
              display: block;
            }
          }
        }

        >.emoji,
        >.image,
        >.link,
        >.code,
        >.preview {
          width: 2.5rem;
          height: 2.5rem;
          text-align: center;
          display: inline-block;

          &:hover {
            background-color: darken($module-hover-bg, 20%);
          }

          i {
            font-size: 1.5rem;
          }

          &.actived {
            i {
              font-weight: bold;
            }
          }
        }

        >.submit {
          float: right;
          width: 8rem;
          background-color: darken($module-hover-bg, 15%);

          &:hover {
            background-color: darken($module-hover-bg, 40%);
          }
        }
      }
    }
  }
}
</style>
