const { pick } = require("../utils")
const { colors, ui } = require("../config")

const listActiveSelectionBackground = pick({
  light: colors.gray.lighten(5),
  dark: colors.gray.darken(70)
})

module.exports = {

  // 菜单栏背景
  "activityBar.background": ui.barBackground.rgb,
  // 拖动占位颜色
  "activityBar.dropBorder": ui.base.rgb,
  // 菜单栏边框
  "activityBar.border": ui.border.rgb,
  // 菜单前景色
  "activityBar.foreground": ui.base.rgb,
  // 菜单图标颜色
  "activityBar.inactiveForeground": colors.gray.darken(30),

  // 菜单选中边框
  "activityBar.activeBorder": ui.transparent.rgb,
  //菜单选中背景
  "activityBar.activeBackground": ui.transparent.rgb,

  // 菜单栏角标文字
  "activityBarBadge.foreground": colors.white.rgb,
  // 菜单栏角标背景
  "activityBarBadge.background": ui.base.rgb,



  // 列表文字
  "sideBar.foreground": ui.foreground.rgb,
  // 列表背景
  "sideBar.background": ui.barBackground.rgb,
  // 列表边线
  "sideBar.border": ui.border.rgb,
  //文件分类标题
  "sideBarTitle.foreground": colors.gray.darken(40),
  // 文件分类标题
  "sideBarSectionHeader.foreground": colors.gray.darken(40),
  // 文件分类标题背景
  "sideBarSectionHeader.background": ui.barBackground.rgb,
  // 文件分类标题分隔线
  "sideBarSectionHeader.border": ui.border.rgb,

  // 当列表/树处于活动状态时，所选项目的列表/树背景颜色
  "list.activeSelectionBackground": listActiveSelectionBackground,
  // 当列表/树处于活动状态时，所选项目的列表/树前景色
  "list.activeSelectionForeground": ui.base.rgb,
  // 
  // "list.activeSelectionIconForeground":ui.foreground.rgb,
  "list.dropBackground": pick({
    light:colors.blue.lighten(90),
    dark: colors.blue.alpha(70),
  }),
  "list.focusBackground": pick({
    light: colors.gray.lighten(10),
    dark: colors.gray.darken(75)
  }),
  // "list.focusForeground": ui.base.rgb,
  // "list.focusHighlightForeground": ui.base.rgb,
  "list.focusOutline": ui.transparent.rgb,
  // 选中项边框颜色
  // "list.focusAndSelectionOutline": "#f00",
  // "list.highlightForeground": ui.base.rgb,
  "list.hoverBackground": pick({
    light: colors.gray.lighten(10),
    dark: colors.gray.darken(75)
  }),
  "list.hoverForeground": ui.base.rgb,
  "list.inactiveSelectionBackground": listActiveSelectionBackground,
  "list.inactiveSelectionForeground": ui.base.rgb,
  "list.inactiveSelectionIconForeground": colors.gray.darken(30),
  "list.inactiveFocusBackground": listActiveSelectionBackground,
  "list.inactiveFocusOutline": ui.transparent.rgb,
  // "list.invalidItemForeground": "#f00",
  "list.errorForeground": colors.red.rgb,
  "list.warningForeground": colors.orange.rgb,
  // 过滤输入框背景
  "listFilterWidget.background": pick({
    light: colors.gray.lighten(10),
    dark: colors.gray.darken(75)
  }),
  // "listFilterWidget.outline": "#00f",
  // "listFilterWidget.noMatchesOutline": colors.red.rgb,
  // "listFilterWidget.shadow": "#f00",
  // 过滤文件背景
  "list.filterMatchBackground": ui.selection.alpha(70),
  // 过滤文件边框
  // "list.filterMatchBorder": colors.blue.rgb,
  // "list.deemphasizedForeground": "#f00",
  // "list.dropBetweenBackground": "#f00",
  // 缩进参考线
  "tree.indentGuidesStroke": pick({
    light: colors.white.darken(20),
    dark: colors.gray.darken(60)
  }),
  // "tree.inactiveIndentGuidesStroke": "#f00",
  // "tree.tableColumnsBorder": "#f00",
  // "tree.tableOddRowsBackground": "#f00"

}