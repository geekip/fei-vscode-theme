const { pick } = require("../utils")
const { colors } = require("../config")

module.exports = {
  // 文本链接
  "textLink.foreground": pick({
    'light': colors.blue.darken(30),
    'dark': colors.blue.rgb,
  }),
  "textLink.activeForeground": pick({
    'light': colors.blue.darken(10),
    'dark': colors.blue.lighten(20),
  }),
  // 引用背景颜色
  "textBlockQuote.background": pick({
    'light': colors.blue.lighten(96),
    'dark': colors.black.darken(50),
  }),
  // 引用左侧边框
  "textBlockQuote.border": colors.blue.lighten(50),
  // 代码块背景色
  "textCodeBlock.background": pick({
    'light': colors.gray.lighten(15),
    'dark': colors.gray.darken(80),
  }),
  // 代码背景颜色
  "textPreformat.background": pick({
    'light': colors.gray.lighten(15),
    'dark': colors.gray.darken(80),
  }),
  // 代码颜色
  "textPreformat.foreground": pick({
    'light': colors.red.darken(20),
    'dark': colors.green.darken(20),
  }),
  // 分隔符
  "textSeparator.foreground": colors.white.darken(100)
}
