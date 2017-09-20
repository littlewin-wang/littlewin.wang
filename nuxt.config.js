module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'littlewin.wang',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A blog FE project built with Nuxt.js.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
      'vue-waterfall',
      'particles.js'
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
    { src: '~plugins/vue-waterfall', ssr: false },
    { src: '~plugins/swiper.js', ssr: false },
    { src: '~plugins/particles.js', ssr: false }
  ],
  css: [
    'swiper/dist/css/swiper.css',
    { src: '~assets/css/animate.css', lang: 'css' },
    { src: '~assets/sass/app.scss', lang: 'sass' }
  ]
}
