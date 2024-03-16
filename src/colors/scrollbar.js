const { pick } = require("../utils")
const { colors } = require("../config")

module.exports = {
  // 顶部阴影
  "scrollbar.shadow": pick({
    light: colors.white.darken(30),
    dark: colors.black.darken(100)
  }),
  // 背景颜色
  "scrollbarSlider.background": pick({
    light: colors.black.alpha(85),
    dark: colors.white.alpha(85)
  }),
  // 鼠标移动背景色
  "scrollbarSlider.hoverBackground": pick({
    light: colors.black.alpha(70),
    dark: colors.white.alpha(70)
  }),
  // 鼠标点击背景色
  "scrollbarSlider.activeBackground": pick({
    light: colors.black.alpha(50),
    dark: colors.white.alpha(50)
  }),
}

