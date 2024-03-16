const { pick, Color, genColor } = require("./utils")

const colors = genColor({
  black: "#1b1f23",
  white: "#ffffff",
  gray: "#d1d5da",
  blue: ["#0066ff", '#0000ff', '#45CCEF'],
  green: ["#00ff00", '#008077'],
  yellow: ["#ffff00", "#DCBF09"],
  orange: "#f66a0a",
  red: "#ff0000",
  purple: "#ff00ff"
})

const ui = genColor({
  // 基色 
  base: pick({
    light: "#000000",
    dark: colors.blue.lighten(40),
  }),
  // 透明
  transparent: new Color('#000000').alpha(100),

  // 前景色
  foreground: pick({
    light: colors.white.darken(80),
    dark: colors.white.darken(20)
  }),

  // 背景色
  background: pick({
    light: colors.white.rgb,
    dark: colors.gray.darken(84)
  }),

  // 主体背景色
  barBackground: pick({
    light: colors.gray.lighten(16),
    dark: colors.gray.darken(87)
  }),

  // 边框色
  border: pick({
    light: colors.gray.lighten(5),
    dark: colors.gray.darken(90)
  }),

  // 范围选择背景色
  selection: pick({
    light: colors.blue.alpha(70),
    dark: colors.blue.alpha(30)
  }),

  // 输入框背景色
  inputBackground: pick({
    light: colors.white.rgb,
    dark: colors.gray.darken(75)
  }),

  // 输入框边框
  inputBorder: pick({
    light: colors.gray.darken(10),
    dark: colors.gray.darken(85)
  }),

  // 禁用颜色
  disableForeground: pick({
    light: colors.gray.darken(30),
    dark: colors.white.darken(50)
  }),

})

const token = genColor({
  // 注释
  comment: pick({
    light: colors.gray.darken(30),
    dark: colors.gray.darken(40)
  }),
  // 函数名
  functionName: pick({
    light: colors.purple.darken(20),
    dark: colors.purple.darken(10)
  }),
  // 关键字
  keyword: pick({
    light: colors.blue[1].darken(25),
    dark: colors.blue[2].darken(25)
  }),
  // 变量
  variable: pick({
    light: colors.blue.rgb,
    dark: colors.green.darken(25)
  }),
  // 常量
  constant: pick({
    light: colors.orange.darken(5),
    dark: colors.orange.lighten(40)
  }),
  // 实体
  entity: pick({
    light: colors.green[1].rgb,
    dark: colors.green[1].lighten(40)
  }),
  // 字符
  string: pick({
    light: colors.blue[1].rgb,
    dark: colors.blue.lighten(50)
  }),
  // 数字
  numeric: pick({
    light: colors.red.rgb,
    dark: colors.red.lighten(30)
  }),
})

module.exports = { colors, ui, token }
