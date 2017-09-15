const WaterfallComponent = require('vue-waterfall')
const waterfall = {
  install: function (Vue) {
    Vue.component('waterfall', WaterfallComponent.waterfall)
    Vue.component('waterfall-slot', WaterfallComponent.waterfallSlot)
  }
}

module.exports = waterfall
