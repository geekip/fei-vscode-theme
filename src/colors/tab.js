const { ui } = require("../config")

// 顶部导航
module.exports = {
  // 编辑器组分割线
  "editorGroup.border": ui.border.rgb,
  // 拖动编辑器时的背景颜色
  "editorGroup.dropBackground": ui.background.rgb,
  // 禁用选项卡背景颜色（设置 "workbench.editor.showTabs": false ）
  "editorGroupHeader.noTabsBackground": ui.barBackground.rgb,
  // tab栏背景色
  "editorGroupHeader.tabsBackground": ui.barBackground.rgb,
  // tab栏下边框
  "editorGroupHeader.tabsBorder": ui.border.rgb,
  // 编辑器组分割线
  "editorGroupHeader.border": ui.border.rgb,
  // 空编辑器组的背景颜色
  "editorGroup.emptyBackground": ui.background.rgb,
  // 聚焦的空编辑器组的边框颜色
  "editorGroup.focusedEmptyBorder": ui.base.rgb,


  // 活动组中的活动选项卡背景颜色。
  "tab.activeBackground": ui.background.rgb,
  // 非活动编辑器组中的活动选项卡背景颜色
  "tab.unfocusedActiveBackground": ui.background.rgb,
  // 活动组中的活动选项卡前景色
  "tab.activeForeground": ui.base.rgb,
  // 用于将标签彼此分开的边框。
  "tab.border": ui.border.rgb,
  // 活动选项卡的底部边框
  "tab.activeBorder": ui.background.rgb,
  // 拖动选项卡时边框
  "tab.dragAndDropBorder": ui.base.rgb,
  // 非活动编辑器组中活动选项卡的底部边框
  "tab.unfocusedActiveBorder": ui.background.rgb,
  // 活动选项卡的顶部边框
  "tab.activeBorderTop": ui.transparent.rgb,
  // 非活动编辑器组中活动选项卡的顶部边框
  "tab.unfocusedActiveBorderTop": ui.transparent.rgb,
  // 最后一个固定编辑器右侧的边框以与未固定编辑器分开。
  // "tab.lastPinnedBorder":"#00f", 
  // 非活动标签背景颜色。
  "tab.inactiveBackground": ui.transparent.rgb,
  // 未聚焦组中的非活动选项卡背景颜色 
  // "tab.unfocusedInactiveBackground": ui.transparent.rgb,
  // 活动组中的非活动选项卡前景色。
  "tab.inactiveForeground": ui.disableForeground.rgb,
  // 非活动编辑器组中的活动选项卡前景色。
  "tab.unfocusedActiveForeground": ui.disableForeground.rgb,
  // 非活动编辑器组中的非活动选项卡前景色。
  "tab.unfocusedInactiveForeground": ui.disableForeground.rgb,
  // 悬停时的标签背景颜色
  // "tab.hoverBackground": ui.background.rgb,
  // 悬停时未聚焦组中的选项卡背景颜色
  // "tab.unfocusedHoverBackground": ui.background.rgb,
  // 悬停时标签前景色
  // "tab.hoverForeground": ui.base.rgb,
  // 悬停时未聚焦组中的选项卡前景色
  "tab.unfocusedHoverForeground": ui.base.rgb,
  // 悬停时突出显示选项卡的边框 
  // "tab.hoverBorder": ui.transparent.rgb,
  // 悬停时突出显示未聚焦组中的选项卡的边框
  // "tab.unfocusedHoverBorder": ui.transparent.rgb,
  // 活动组中已修改（脏）活动选项卡顶部的边框。
  // "tab.activeModifiedBorder":"#f00",
  // 活动组中已修改（脏）的非活动选项卡顶部的边框。
  // "tab.inactiveModifiedBorder": "#f00",
  // 未聚焦组中已修改（脏）活动选项卡顶部的边框。
  // "tab.unfocusedActiveModifiedBorder": "#f00",
  // 未聚焦组中已修改（脏）的非活动选项卡顶部的边
  // "tab.unfocusedInactiveModifiedBorder": "#f00",
  // 在居中编辑器布局的左侧和右侧可见的编辑器窗格的背景颜色。
  "editorPane.background": ui.background.rgb,
  "sideBySideEditor.horizontalBorder": ui.border.rgb,
  "sideBySideEditor.verticalBorder": ui.border.rgb,

  // 面包屑导航
  "breadcrumb.foreground": ui.disableForeground.rgb,
  "breadcrumb.focusForeground": ui.base.rgb,
  "breadcrumb.activeSelectionForeground": ui.base.rgb,
  "breadcrumbPicker.background": ui.background.rgb,
}
