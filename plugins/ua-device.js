/**
 * @file 通过plugin引入ua-device.js插件
 * @author littlewin(littlewin.wang@gmail.com)
 */

const UA = require('ua-device')

if (process.browser) {
  window.UA = UA
}

export default {}
