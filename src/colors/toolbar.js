const { colors, ui } = require("../config")
const { pick } = require("../utils")

// 工具栏按钮
module.exports = {
   // 悬停背景
   "toolbar.hoverBackground": pick({
      light: ui.barBackground.darken(10),
      dark: ui.barBackground.lighten(60),
   }),
   // 悬停边框
   "toolbar.hoverOutline": ui.transparent.rgb,
   // 选中背景
   "toolbar.activeBackground": pick({
      light: ui.barBackground.darken(15),
      dark: ui.barBackground.lighten(75),
   }),
   // 操作栏中切换的操作项的背景色
   // "actionBar.toggledBackground":"#f00"
}
