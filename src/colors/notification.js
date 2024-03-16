const {colors, ui } = require("../config")

module.exports = {
  // 标题前景
  "notificationCenterHeader.foreground": ui.base.rgb,
  // 标题背景
  "notificationCenterHeader.background": ui.background.rgb,

  // 通知吐司边框颜色
  "notificationToast.border": ui.border.rgb,

  // 正文前景
  "notifications.foreground": ui.foreground.rgb,
  // 正文背景
  "notifications.background": ui.background.rgb,
  // 正文边框
  "notifications.border": ui.border.rgb,
  // 图标错误
  "notificationsErrorIcon.foreground": colors.red.rgb,
  // 图标警告
  "notificationsWarningIcon.foreground": colors.orange.rgb,
  // 图标信息
  "notificationsInfoIcon.foreground": colors.blue.rgb,
}