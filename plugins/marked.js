import marked from 'marked'
import highligher from '~/plugins/highlight.js'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight (code) {
    return highligher.highlightAuto(code).value
  }
})

const renderer = new marked.Renderer()

// 段落解析
const paragraphParse = text => `<p>${text}</p>`

// A链接解析
const linkParse = (href, title, text) => {
  const isSelf = href.includes('littlewin.wang')
  const isImage = text.includes('<img>')

  return `<a href="${href}"
             target="_blank"
             class="${isImage ? 'image-link' : 'link'}"
             title="${title || (isImage ? href : text)}"
             ${isSelf ? '' : 'rel="external nofollow"'}>${text}</a>`.replace(/\s+/g, ' ').replace('\n', '')
}

// 图片解析
const imageParse = (src, title, alt) => {
  return `<img src="${src}"
               title="${title || alt || 'littlewin.wang'}"
               alt="${alt || title || src}"
               onclick="if(window.utils) window.utils.openImgPopup('${src}')"/>`.replace(/\s+/g, ' ').replace('\n', '')
}

// 代码解析器（增加行号）
const codeParse = function (code, lang, escaped) {
  if (this.options.highlight) {
    const out = this.options.highlight(code, lang)
    if (out != null && out !== code) {
      escaped = true
      code = out
    }
  }
  const lineNums = code.split('\n').map((l, i) => {
    return `<li class="code-line-number">${i + 1}</li>`.replace(/\s+/g, ' ')
  }).join('')
  if (!lang) {
    return `<pre>
              <ul class="code-lines">${lineNums}</ul>
              <code>${(escaped ? code : escape(code, true))}\n</code>
            </pre>`.replace('\n', '')
  } else {
    return `<pre data-lang="${lang}">
              <ul class="code-lines">${lineNums}</ul>
              <code class="${this.options.langPrefix}${escape(lang, true)}">${(escaped ? code : escape(code, true))}\n</code>
            </pre>\n`.replace('\n', '')
  }
}

renderer.link = linkParse
renderer.code = codeParse
renderer.image = imageParse
renderer.paragraph = paragraphParse

export default (content, tags, parseHtml = false) => {
  renderer.text = text => text

  // 如果是解析评论，则不解析html内容
  marked.setOptions({ sanitize: !parseHtml })

  if (typeof content !== 'string') {
    return ''
  }

  // 返回解析内容
  return marked(content, { renderer })
}
