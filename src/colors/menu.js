const { colors, ui } = require("../config")
const { pick } = require("../utils")

// 工具栏按钮
module.exports = {
  // 菜单栏中所选菜单项的前景色。
  "menubar.selectionForeground": ui.foreground.rgb,

  // 菜单栏中所选菜单项的背景颜色。
  // "menubar.selectionBackground":"#f00",

  // 菜单栏中所选菜单项的边框颜色。
  "menubar.selectionBorder":ui.transparent.rgb,

  // 菜单项的前景色。
  "menu.foreground": ui.foreground.rgb,

  // 菜单项的背景颜色。
  "menu.background": pick({
    light: ui.background.rgb,
    dark: ui.barBackground.lighten(80),
  }),

  // 菜单中所选菜单项的前景色。
  "menu.selectionForeground":  ui.base.rgb,

  // 菜单中所选菜单项的背景颜色。
  "menu.selectionBackground": pick({
    light: colors.gray.lighten(5),
    dark: colors.gray.darken(65),
  }),

  // 菜单中所选菜单项的边框颜色。
  "menu.selectionBorder": ui.transparent.rgb,

  // 菜单中分隔符菜单项的颜色。
  "menu.separatorBackground": pick({
    light: ui.border.rgb,
    dark: colors.gray.darken(65),
  }),

  // 菜单的边框颜色。
  "menu.border": ui.border.rgb,

  // "keybindingLabel.foreground":"#f00"
}
