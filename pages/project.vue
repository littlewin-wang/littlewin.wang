<template>
  <div class="project">
    <ul class="project-list">
      <li class="project-item" v-for="item in projects" :key="item.name">
        <div class="content">
          <div class="header">
            <span>{{new Date(item.created_at).toLocaleDateString()}}</span>
            <a target="_blank" rel="external nofollow" :href="item.html_url" :title="item.description">
              <i class="iconfont icon-star"></i>
            </a>
          </div>
          <div class="language">
            <i class="iconfont" :class="getIcon(item.language)" :style="{color: getColor(item.language)}"></i>
          </div>
          <a class="title" target="_blank" rel="external nofollow" :href="item.html_url" :title="item.description">
            <h5>{{item.name}}</h5>
            <p class="description" style="-webkit-box-orient: vertical;">
              {{ item.description.replace(/:.*:/g, '') }}
            </p>
          </a>
          <div class="meta">
            <a class="item" target="_blank" rel="external nofollow" :href="item.html_url.concat('/stargazers')" :title="item.name.concat(': stargazers')">
              <i class="iconfont icon-star"></i>
              <span class="label">
                <span class="number">{{ item.stargazers_count }}</span>
                <span>Stars</span>
              </span>
            </a>
            <a class="item" target="_blank" rel="external nofollow" :href="item.html_url.concat('/network')" :title="item.name.concat(': forks')">
              <i class="iconfont icon-fork"></i>
              <span class="label">
                <span class="number">{{ item.forks_count }}</span>
                <span>Forks</span>
              </span>
            </a>
            <a class="item" target="_blank" rel="external nofollow" :href="item.html_url.concat('/issues')" :title="item.name.concat(': issues')">
              <i class="iconfont icon-issue-opened"></i>
              <span class="label">
                <span class="number">{{ item.open_issues_count }}</span>
                <span>Issues</span>
              </span>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'project',
    head: {
      title: '开源项目'
    },
    fetch ({ store }) {
      return store.dispatch('getProjects')
    },
    computed: {
      projects () {
        return this.$store.state.project.data
      },
      colors () {
        return [
          '#F4E9F7',
          '#DFEFFE',
          '#DFF7F7',
          '#F8EFEA',
          '#F7F5EA',
          '#FBF1FA',
          '#E9EBF7',
          '#F8E9EC'
        ]
      }
    },
    methods: {
      getIcon (language) {
        let lang = language.toLowerCase()
        if (['html', 'javascript', 'css', 'vue'].includes(lang)) {
          return 'icon-'.concat(lang)
        } else {
          return 'icon-code'
        }
      },
      getColor (language) {
        let lang = language.toLowerCase()
        if (lang === 'html') {
          return '#FF9900'
        } else if (lang === 'javascript') {
          return '#FFCC00'
        } else if (lang === 'css') {
          return '#0099CC'
        } else if (lang === 'vue') {
          return '#99CC33'
        } else {
          return '#666699'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .project {
    margin-bottom: 1rem;
    .project-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      .project-item {
        display: inline-block;
        width: 300px;
        height: 300px;
        padding: .5rem;
        .content {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 1rem;
          background: #fff;
          .header {
            display: flex;
            justify-content: space-between;
            height: 2rem;
            font-size: 13px;
            span,i {
              color: #888;
              line-height: 2rem;
            }
            i {
              font-size: 2rem;
              cursor: pointer;
              &:hover {
                color: #0366d6;
              }
            }
          }
          .language {
            height: 4rem;
            text-align: center;
            i {
              display: inline-block;
              font-size: 3rem;
              line-height: 4rem;
            }
          }
          .title {
            font-size: 1rem;
            text-align: center;
            h5 {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .description {
            max-height: 100px;
            overflow: auto;
            color: #888;
            text-align: center;
          }
          .meta {
            position: absolute;
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 52px;
            left: 0;
            bottom: 0;
            .item {
              display: flex;
              justify-content: center;
              flex: 0 0 33%;
              border-top: 2px solid #fff;

              &:hover {
                border-top: 2px solid #0366d6
              }

              i {
                padding: 0 .5rem;
                line-height: 50px;
              }
              .label {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 .5rem;
                .number {
                  font-size: 14px;
                  font-weight: 700;
                }
                span {
                  font-size: 13px;
                  text-align: center;
                }
              }
            }
          }
        }
      }
      @media screen and (max-width: 420px) {
        .project-item {
          width: 100%;
        }
      }
    }
  }
</style>
