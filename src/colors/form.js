const { pick } = require("../utils")
const { colors, ui } = require("../config")

module.exports = {
  // 按钮背景色
  "button.background": pick({
    'light': ui.base.rgb,
    'dark': ui.base.darken(60),
  }),
  // 按钮悬停
  "button.hoverBackground": pick({
    'light': ui.base.lighten(90),
    'dark': ui.base.darken(50),
  }),
  // 按钮文字颜色
  "button.foreground": colors.white.rgb,
  // 按钮边框颜色
  "button.border": pick({
    'light': ui.base.rgb,
    'dark': ui.base.darken(60),
  }),
  // "button.separator":"#f00",
  // 辅助按钮前景色
  "button.secondaryForeground": ui.base.rgb,
  // 辅助按钮背景色
  "button.secondaryBackground": ui.transparent.rgb,
  // 辅助按钮悬停背景
  "button.secondaryHoverBackground": ui.base.alpha(90),

  // 复选框背景色
  "checkbox.background": ui.inputBackground.rgb,
  // 复选框前景色
  "checkbox.foreground": ui.base.rgb,
  // 复选框边框
  "checkbox.border": ui.inputBorder.rgb,
  // "checkbox.selectBackground":"#f00",
  "checkbox.selectBorder": ui.inputBorder.rgb,

  // 下拉框
  "dropdown.background": ui.inputBackground.rgb,
  "dropdown.border": ui.inputBorder.rgb,
  "dropdown.foreground": pick({
    light: colors.black.rgb,
    dark: ui.foreground.rgb
  }),
  "dropdown.listBackground": ui.inputBackground.rgb,

  // 输入框
  "input.background": ui.inputBackground.rgb,
  "input.border": ui.inputBorder.rgb,
  "input.foreground": ui.foreground.rgb,
  "input.placeholderForeground": colors.gray.darken(40),

  // 输入框按钮选中
  "inputOption.activeBackground": ui.base.rgb,
  "inputOption.activeBorder": ui.base.rgb,
  "inputOption.activeForeground": colors.white.rgb,

  // 输入框按钮悬停
  // "inputOption.hoverBackground": colors.gray.rgb,

  "inputValidation.errorBackground": ui.inputBackground.rgb,
  "inputValidation.errorForeground": colors.red.rgb,
  "inputValidation.errorBorder": colors.red.rgb,

  "inputValidation.infoBackground": ui.inputBackground.rgb,
  "inputValidation.infoForeground": colors.blue.rgb,
  "inputValidation.infoBorder": colors.blue.rgb,

  "inputValidation.warningBackground": ui.inputBackground.rgb,
  "inputValidation.warningForeground": colors.orange.rgb,
  "inputValidation.warningBorder": colors.orange.rgb

}
