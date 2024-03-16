const { ui } = require("../config")

module.exports = {
  // 透视图边框和箭头的颜色。
  "peekView.border": ui.base.rgb,

  // 查看视图编辑器的背景颜色。
  "peekViewEditor.background" :ui.barBackground.lighten(2),

  // 透视视图编辑器中装订线的背景颜色。
  // "peekViewEditorGutter.background" :"#f00",

  // 在预览视图编辑器中匹配高亮颜色。
  "peekViewEditor.matchHighlightBackground" : ui.selection.rgb,

  // 在预览视图编辑器中匹配高亮边框颜色。
  // "peekViewEditor.matchHighlightBorder" :"#f00",

  // 预览视图结果列表的背景颜色。
  "peekViewResult.background" :ui.barBackground.rgb,

  // 预览视图结果列表中文件节点的前景色。
  // "peekViewResult.fileForeground" :"#f00",

  // 透视视图结果列表中线节点的前景色。
  // "peekViewResult.lineForeground" :"#f00",

  // 匹配预览视图结果列表中的高亮颜色。
  "peekViewResult.matchHighlightBackground" :ui.selection.rgb,

  // 预览视图结果列表中所选条目的背景颜色。
  // "peekViewResult.selectionBackground" :"#f00",

  // 预览视图结果列表中所选条目的前景色。
  "peekViewResult.selectionForeground" : ui.base.rgb,

  // 预览视图标题区域的背景颜色。
  "peekViewTitle.background" :ui.barBackground.rgb,

  // 查看视图标题信息的颜色。
  // "peekViewTitleDescription.foreground" :"#f00",

  // 预览视图标题的颜色。
  // "peekViewTitleLabel.foreground" :"#f00",
}
