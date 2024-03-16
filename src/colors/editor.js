const { pick } = require("../utils")
const { colors, ui, token } = require("../config")

module.exports = {

  // 代码颜色
  "editor.foreground": ui.foreground.rgb,

  // 编辑区域背景色
  "editor.background": ui.background.rgb,

  // 提示背景色
  "editorWidget.background": pick({
    light: colors.white.rgb,
    dark: colors.gray.darken(90)
  }),

  // 提示边框色
  "editorWidget.border": ui.border.rgb,

  // 折叠行背景色
  "editor.foldBackground": pick({
    light: colors.green.lighten(95),
    dark: colors.green.alpha(85),
  }),

  // 当前行背景色
  "editor.lineHighlightBackground": pick({
    light:  ui.background.darken(3),
    dark: ui.background.lighten(30),
  }),

  // 代码行数
  "editorLineNumber.foreground": ui.foreground.alpha(40),

  // 代码行数当前选中
  "editorLineNumber.activeForeground": ui.foreground.rgb,

  // 标尺颜色
  "editorRuler.foreground": colors.red.alpha(80),

  // 连接线
  "editorIndentGuide.background": pick({
    light: ui.border.lighten(10),
    dark: ui.foreground.darken(70),
  }),
  // 连接线选中
  "editorIndentGuide.activeBackground": pick({
    light: ui.border.rgb,
    dark: ui.foreground.darken(30),
  }),
  // 空白符
  "editorWhitespace.foreground": ui.foreground.alpha(50),
  // 光标颜色
  "editorCursor.foreground": ui.base.rgb,

  // 搜索高亮
  "editor.findMatchBackground": ui.selection.rgb,
  "editor.findMatchHighlightBackground": ui.selection.rgb,

  // 选择高亮
  "editor.inactiveSelectionBackground": ui.selection.rgb,
  "editor.selectionBackground": ui.selection.rgb,

  // 选择匹配
  "editor.selectionHighlightBackground": ui.transparent.rgb,
  "editor.selectionHighlightBorder": colors.blue.rgb,

  // 选择匹配变量
  "editor.wordHighlightBackground": ui.transparent.rgb,
  "editor.wordHighlightStrongBackground": ui.transparent.rgb,
  "editor.wordHighlightBorder": ui.transparent.rgb,
  "editor.wordHighlightStrongBorder": ui.transparent.rgb,

  // 配对括号背景色
  "editorBracketMatch.background": colors.black.alpha(90),
  "editorBracketMatch.border": colors.black.alpha(50),

  // 滚动条边框
  "editorOverviewRuler.border": ui.transparent.rgb
}
