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
            src: song.src,
            onplay () {
              state.playerState.ready = true
              state.playerState.wave = true
              state.playerState.loading = false
              state.playerState.playing = true
              state.playerState.progress = 0
            },
            onload () {
              state.playerState.wave = true
              state.playerState.playing = true
            },
            onend () {
              state.playerState.wave = false
              state.playerState.playing = true
              // 播放下一首歌曲
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
              console.log('地址无效', res)
            }
          }, err => {
            console.log('请求失败', err)
          })
        }
      }
    }

    state.playerState.ready = true
  }
}
