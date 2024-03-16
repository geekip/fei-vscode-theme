const { ui } = require("../config")

module.exports = {

  // 面板显示在编辑器区域下方，包含输出和集成终端等视图
  "panel.background": ui.barBackground.rgb,
  "panel.border": ui.border.rgb,
  "panelTitle.activeBorder": ui.base.rgb,
  "panelTitle.activeForeground": ui.base.rgb,
  "panelTitle.inactiveForeground": ui.disableForeground.rgb,
  "panelInput.border": ui.border.rgb,

  // 集成终端
  "terminal.background": ui.barBackground.rgb,
  "terminal.border": ui.border.rgb,
  "terminal.foreground": ui.foreground.rgb,
  "terminal.selectionBackground": ui.selection.rgb,
  "terminalCursor.background": ui.base.rgb,
  "terminalCursor.foreground": ui.base.rgb
}
