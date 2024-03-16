const { colors, ui } = require("../config")

// 状态栏
module.exports = {

  // 标准状态栏背景颜色。
  "statusBar.background": ui.barBackground.rgb,
  // 状态栏前景色
  "statusBar.foreground": ui.foreground.rgb,
  // 状态栏上边框
  "statusBar.border": ui.border.rgb,

  // 调试程序时的状态栏背景颜色
  "statusBar.debuggingBackground": colors.green.lighten(60),
  // 调试程序时的状态栏前景色
  // "statusBar.debuggingForeground":ui.foreground.rgb,
  // 调试状态栏上边框
  // "statusBar.debuggingBorder":ui.border.rgb,

  //未打开文件夹时的状态栏前景色。
  "statusBar.noFolderForeground": ui.foreground.rgb,
  //未打开文件夹时的状态栏背景颜色。
  "statusBar.noFolderBackground": ui.barBackground.rgb,
  // 未打开文件夹时状态栏上边框
  "statusBar.noFolderBorder": ui.border.rgb,

  // 点击时状态栏项目的背景颜色
  "statusBarItem.activeBackground": ui.barBackground.rgb,
  // 悬停时的状态栏项目前景颜色
  "statusBarItem.hoverForeground": ui.foreground.rgb,
  // 悬停时的状态栏项目背前景色。
  "statusBarItem.hoverBackground": ui.background.rgb,

  // 状态栏突出项目的前景色
  // "statusBarItem.prominentForeground": "#f00",
  // 状态栏突出项目的背景色
  // "statusBarItem.prominentBackground": "#f00",
  // 悬停时状态栏突出项目的前景色
  // "statusBarItem.prominentHoverForeground":"#f00", 
  // 悬停时状态栏突出项目的背景色
  // "statusBarItem.prominentHoverBackground":"#f00", 

  // 远程指示器的背景色
  "statusBarItem.remoteBackground": ui.barBackground.rgb,
  // 远程指示器的前景色
  "statusBarItem.remoteForeground": ui.foreground.rgb,
  // 悬停时远程指示器的背景色
  // "statusBarItem.remoteHoverBackground":"#f00", 
  // 悬停时远程指示器的前景色
  // "statusBarItem.remoteHoverForeground":"#f00", 

  // 状态栏错误项背景色
  "statusBarItem.errorBackground": colors.red.lighten(60),
  // 状态栏错误项前景色
  // "statusBarItem.errorForeground":"#f00", 
  // 悬停时状态栏错误项背景色
  "statusBarItem.errorHoverBackground": colors.red.lighten(60),
  // 悬停时状态栏错误项前景色
  // "statusBarItem.errorHoverForeground":"#f00", 

  // 状态栏警告项背景色
  "statusBarItem.warningBackground": colors.yellow.lighten(60),
  // 状态栏警告项前景色
  // "statusBarItem.warningForeground":"#f00", 
  // 悬停时状态栏警告项背景色
  "statusBarItem.warningHoverBackground": colors.yellow.lighten(60),
  // 悬停时状态栏警告项前景色
  // "statusBarItem.warningHoverForeground":"#f00", 


  // "statusBarItem.compactHoverBackground": "#f00",
  "statusBarItem.focusBorder": ui.border.rgb,
  "statusBar.focusBorder": ui.border.rgb,
  // "statusBarItem.offlineBackground":"#f00", 
  // "statusBarItem.offlineForeground":"#f00", 
  // "statusBarItem.offlineHoverForeground":"#f00", 
  // "statusBarItem.offlineHoverBackground":"#f00", 
}
