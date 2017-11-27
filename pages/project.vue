<template>
  <div class="project">
    <ul class="project-list">
      <li class="project-item" v-for="item in projects" :key="item.name">
        <div class="content">
          <a target="_blank" rel="external nofollow" :href="item.html_url" :title="item.description">
            <h5 class="title" :style="{ background: colors[Math.floor(Math.random()*colors.length)] }">{{item.name[0].toUpperCase()}}</h5>
            <div class="main">
              <p class="description" style="-webkit-box-orient: vertical;">{{ item.description.replace(/:.*:/g, '') }}</p>
              <p class="meta">
                <span class="item star">
                  <i class="iconfont icon-star"></i>
                  <span>{{ item.stargazers_count }}</span>
                </span>
                <span class="item fork">
                  <i class="iconfont icon-fork"></i>
                  <span>{{ item.forks_count }}</span>
                </span>
                <span class="item issues">
                  <i class="iconfont icon-issue-opened"></i>
                  <span>{{ item.open_issues_count }}</span>
                </span>
              </p>

            </div>
          </a>
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
          '#FFFFCC',
          '#CCFFFF',
          '#FFCCCC',
          '#CCCCFF',
          '#FFFF99',
          '#FFCC99',
          '#CCFFCC'
        ]
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
        width: 200px;
        height: 200px;
        padding: .5rem;
        .content {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: .5rem;
          background: #ccc;
          .title {
            margin: 0;
            line-height: calc(200px-1rem);
            text-align: center;
            font-size: 4rem;
            font-weight: 300;
          }
          .main {
            position: absolute;
            width: 100%;
            bottom: .5rem;
            color: #888;
            font-size: 13px;
            font-weight: 300;

            .description {
              width: 90%;
              margin: 0 auto .5rem auto;
              text-align: center;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            .meta {
              width: 60%;
              height: 2rem;
              line-height: 2rem;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
              .item {
                i {
                  margin-right: .5rem;
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
