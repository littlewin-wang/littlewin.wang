/**
 * @file 音乐播放控制
 * @author littlewin(littlewin.wang@gmail.com)
 */

import howler from '~/plugins/howler'
import { Service } from '~/plugins/axios'

const { Howler, Howl } = howler

export default state => {
  // 播放器初始化
  if (!state.player) {
    const playList = state.list.data.tracks
    const proxyPath = 'https://littlewin.wang/proxy/'

    // 播放列表为空，退出
    if (!playList.length) return

    // 播放列表内容格式化
    const playerList = playList.map(song => {
      return {
        howl: null,
        id: song.id,
        html5: true,
        name: song.name,
        album: song.al || {},
        artists: song.ar || [],
        duration: song.dt || 200,
        src: null
      }
    })

    // 更新全局变量列表数据
    state.list.data.tracks = playerList

    // 进度条的一帧帧更新
    const playerStep = () => {
      const play = playerList[state.playerState.index].howl

      // 确定进度百分比
      const seek = play.seek() || 0
      state.playerState.progress = ((seek / play.duration()) * 100) || 0

      // 音乐播放期间继续更新
      if (play.playing()) {
        requestAnimationFrame(playerStep)
      }
    }

    state.player = {
      // 播放
      play (index) {
        // 实例播放轨方法
        const buildHowl = song => {
          song.howl = song.howl || new Howl({
            loop: false,
            html5: true,
            autoplay: false,
            volume: state.playerState.volume,
            src: [(song.src || ' ').replace(/(http:\/\/|https:\/\/)/ig, proxyPath)],
            onplay () {
              state.playerState.ready = true
              state.playerState.wave = true
              state.playerState.loading = false
              state.playerState.playing = true
              state.playerState.progress = 0
              requestAnimationFrame(playerStep)
            },
            onload () {
              state.playerState.wave = true
              state.playerState.playing = true
            },
            onend () {
              state.playerState.wave = false
              state.playerState.playing = true
              state.player.next()
            },
            onpause () {
              state.playerState.wave = false
              state.playerState.playing = false
            },
            onstop () {
              state.playerState.wave = false
              state.playerState.playing = false
              state.playerState.progress = 100
            },
            onloaderror () {
              // 切换到下一首正常歌曲
            },
            onvolume () {
              state.playerState.volume = Howler.volume()
            }
          })

          song.song_id = song.howl.play()
          song.howl.fade(0, state.playerState.volume, 3000, song.song_id)

          // 更新播放器状态
          if (song.howl.state() === 'loaded') {
            state.playerState.loading = false
            state.playerState.playing = true
          } else {
            state.playerState.loading = true
            state.playerState.playing = false
          }

          // 更新当前活动歌曲的索引（在歌曲实例并播放成功的情况下才完成）
          state.playerState.index = index
          state.playerState.targetIndex = index
        }

        // 从播放列表移除无效歌曲
        const errAndNext = song => {
          // 当前歌曲退载
          if (song.howl) {
            song.howl.stop()
            song.howl.unload()
          }

          song.howl = null
          playerList.splice(playerList.findIndex(s => Object.is(s.id, song.id)), 1)
          state.list.data.tracks.splice(state.list.data.tracks.findIndex(s => Object.is(s.name, song.name)), 1)

          state.playerState.wave = false
          state.playerState.playing = true
          // 重新找下一首歌曲
          const index = state.playerState.index - 1
          state.playerState.index = (index < 0) ? 0 : index
          // 播放下一首歌曲
          state.player.next()
          state.playerState.ready = true
        }

        // 规范输入index
        index = Object.is(typeof index, 'number') ? index : state.playerState.index

        // 目标歌曲
        state.playerState.targetIndex = index
        const currentSong = playerList[state.playerState.index]

        // 如果目标歌曲已存在实例
        if (currentSong && currentSong.howl) {
          // 如果目标歌曲和正在当前实例歌曲相同，且处于播放状态，则终止
          if (Object.is(index, state.playerState.index)) {
            // 如果没有播放，则开始播放
            if (!currentSong.howl.playing()) {
              currentSong.song_id = currentSong.howl.play()
              currentSong.howl.fade(0, state.playerState.volume, 1000, currentSong.song_id)
            }
            return false

          // 否则停止当前正在播放歌曲，停止所有正在播放的歌曲
          } else if (currentSong.howl.playing()) {
            currentSong.howl.stop()
            Howler._howls.forEach(h => h.stop())
          }
        }

        // 实例化播放轨
        const song = playerList[index]
        // 如果目标歌曲不存在则不进行
        if (!song) return false

        // 如果已有有效地址，则进入实例阶段，否则请求地址后进行
        if (song.src) {
          buildHowl(song)
        } else {
          state.playerState.ready = false

          // 请求音乐url
          Service.get(`/music/url/${song.id}`).then(res => {
            const success = res.status &&
              res.data &&
              Object.is(res.data.data.code, 200) &&
              res.data.data.data.length

            if (success) {
              song.src = res.data.data.data[0].url

              if (song.id === playerList[state.playerState.targetIndex].id) {
                buildHowl(song)
              }
            } else {
              // console.log('地址无效', res)
              errAndNext(song)
            }
          }, err => {
            console.log('请求失败', err)
            errAndNext(song)
          })
        }
      },

      // 暂停
      pause () {
        const song = playerList[state.playerState.index]

        if (song.howl && song.howl.playing()) {
          song.howl.pause()
        }

        // pause all tracks
        Howler._howls.forEach(h => h.pause())
      },

      // 播放切换
      toggle () {
        const play = playerList[state.playerState.index].howl

        if (play && play.playing()) {
          state.player.pause()
        } else {
          state.player.play()
        }
      },

      // 音量控制
      volume (val) {
        Howler.volume(val)
      },

      // 静音控制
      mute () {
        Howler.mute(!state.playerState.muted)
        state.playerState.muted = !state.playerState.muted
      },

      // 跳到某首歌播放
      skipTo (index) {
        // 停止当前播放
        const current = playerList[state.playerState.index]
        if (current && current.howl) {
          current.howl.stop()
        }

        // 停止所有播放
        Howler._howls.forEach(h => h.stop())

        // 重置进度
        state.playerState.progress = 0

        // 播放
        state.player.play(index)
      },

      // 上一首
      prev () {
        let index = state.playerState.targetIndex - 1
        index = (index < 0) ? playerList.length - 1 : index
        state.player.skipTo(index)
      },

      // 下一首
      next () {
        let index = state.playerState.targetIndex + 1
        index = (index >= playerList.length) ? 0 : index
        state.player.skipTo(index)
      }
    }

    state.playerState.ready = true
  }
}
