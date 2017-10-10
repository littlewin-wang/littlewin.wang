module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'littlewin.wang - 琪中有不凡',
    titleTemplate: '%s | littlewin.wang',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { name: 'author', content: 'littlewin.wang@gmail.com' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: 'littlewin,前端,多特蒙德,javascript,Node.js' },
      { hid: 'description', name: 'description', content: '为可能而追求可能，为不能而独善其身' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'author', type: 'text/plain', href: '/humans.txt' }
    ],
    noscript: [
      { innerHTML: 'Where is JavaScript?' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
    extend (webpackConfig, { isDev, isClient, isServer }) {
    },
    vendor: [
      'axios',
      'vue-waterfall',
      'clipboard',
      'particles.js',
      'swiper',
      'marked',
      'highlight.js'
    ],
    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: [
        'transform-async-to-generator',
        'transform-runtime'
      ],
      comments: true
    }
  },
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~plugins/vue-waterfall', ssr: false },
    { src: '~/plugins/clipboard.js' },
    { src: '~plugins/swiper.js', ssr: false },
    { src: '~plugins/particles.js', ssr: false },
    { src: '~/plugins/marked.js' }
  ],
  css: [
    'swiper/dist/css/swiper.css',
    { src: '~assets/css/animate.css', lang: 'css' },
    { src: '~assets/sass/app.scss', lang: 'sass' }
  ]
}
