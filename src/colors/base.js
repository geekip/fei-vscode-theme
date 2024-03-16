const { pick } = require("../utils")
const { colors, ui } = require("../config")

module.exports = {
  // 聚焦边框颜色
  "focusBorder": ui.base.rgb,

  // 整体前景色
  "foreground": ui.foreground.rgb,

  // 禁用状态前景色
  "disabledForeground": ui.disableForeground.rgb,

  // 查找/替换等小部件边框颜色
  "widget.border": ui.border.rgb,

  // 查找/替换等小部件阴影颜色
  "widget.shadow": colors.black.alpha(70),

  // 工作台中文本选择的背景颜色
  "selection.background": ui.selection.rgb,

  // 描述文字颜色
  "descriptionForeground": colors.gray.darken(30),

  // 错误消息颜色
  "errorForeground": colors.red.lighten(40),

  // 图标的默认颜色 
  "icon.foreground": ui.foreground.rgb,

  // 可拖动窗框的悬停边框颜色
  "sash.hoverBorder": ui.border.rgb,

  // 徽章
  "badge.foreground": colors.white.rgb,
  "badge.background": ui.base.rgb,

  "profileBadge.background": ui.base.rgb,
  "profileBadge.foreground": colors.white.rgb,

  // 进度条
  "progressBar.background": ui.base.rgb,

  // 设置页面lighten
  "settings.headerForeground": ui.base.rgb,
  // 设置页面已修改左边框
  "settings.modifiedItemIndicator": pick({
    light: colors.orange.lighten(50),
    dark: colors.orange.darken(40)
  })
}
