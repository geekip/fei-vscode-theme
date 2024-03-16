const { colors, ui } = require("../config")

// 顶部标题栏/菜单栏
module.exports = {
  // 窗口处于活动状态时的标题栏背景色
  "titleBar.activeBackground": ui.barBackground.rgb,
  // 窗口处于活动状态时的标题栏前景色
  "titleBar.activeForeground": ui.foreground.rgb,
  // 窗口处于非活动状态时的标题栏背景色
  "titleBar.inactiveBackground": ui.background.darken(2),
  // 窗口处于非活动状态时的标题栏前景色
  "titleBar.inactiveForeground": ui.foreground.alpha(40),
  // 标题栏边框颜色
  "titleBar.border": ui.border.rgb,

  // 命令中心前景色
  "commandCenter.foreground": ui.foreground.rgb,
  // 命令中心的活动前景色
  "commandCenter.activeForeground": ui.base.rgb,
  // 命令中心背景色
  "commandCenter.background": ui.barBackground.darken(5),
  // 命令中心的活动背景色
  "commandCenter.activeBackground": ui.barBackground.darken(10),
  // 命令中心的边框颜色
  "commandCenter.border": ui.border.rgb,
  // 窗口处于非活动状态时命令中心的前景色
  "commandCenter.inactiveForeground": ui.foreground.alpha(40),
  // 窗口处于非活动状态时命令中心的边框颜色
  "commandCenter.inactiveBorder": ui.border.alpha(50),
  // 命令中心的活动边框颜色
  "commandCenter.activeBorder": ui.border.rgb,
  // 调试程序时的命令中心背景色
  // "commandCenter.debuggingBackground": "#f00",
}
