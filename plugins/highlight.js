const highligher = require('highlight.js/lib/highlight')

highligher.registerLanguage('go', require('highlight.js/lib/languages/go'))
highligher.registerLanguage('css', require('highlight.js/lib/languages/css'))
highligher.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
highligher.registerLanguage('json', require('highlight.js/lib/languages/json'))
highligher.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
highligher.registerLanguage('less', require('highlight.js/lib/languages/less'))
highligher.registerLanguage('scss', require('highlight.js/lib/languages/scss'))
highligher.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
highligher.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'))
highligher.registerLanguage('stylus', require('highlight.js/lib/languages/stylus'))
highligher.registerLanguage('python', require('highlight.js/lib/languages/python'))
highligher.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
highligher.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'))

module.exports = highligher
