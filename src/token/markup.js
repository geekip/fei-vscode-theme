const { colors, ui, token } = require("../config")

module.exports = [
  // 标题文字
  {
    "scope": "markup.heading entity.name",
    "settings": {
      "fontStyle": "bold",
      "foreground": ui.foreground.rgb
    }
  },
  // 标题符号#
  {
    "scope": "markup.heading",
    "settings": {
      "fontStyle": "bold",
      "foreground": ui.foreground.rgb
    }
  },
  // 引用
  {
    "scope": "markup.quote",
    "settings": {
      "foreground": token.entity.rgb
    }
  },
  // 下划线
  {
    "scope": "markup.underline",
    "settings": {
      "fontStyle": "underline"
    }
  },
  // 删除线
  {
    "scope": "markup.strikethrough",
    "settings": {
      "fontStyle": "strikethrough"
    }
  },
  // 链接
  {
    "scope": "markup.underline.link",
    "settings": {
      "foreground": token.string.rgb,
      "fontStyle": "underline"
    }
  },
  // 斜体
  {
    "scope": "markup.italic",
    "settings": {
      "fontStyle": "italic"
    }
  },
  // 粗体
  {
    "scope": "markup.bold",
    "settings": {
      "fontStyle": "bold"
    }
  },
  // 粗斜体
  {
    "scope": "markup.bold markup.italic",
    "settings": {
      "fontStyle": "bold italic"
    }
  },
  // 插入
  {
    "scope": "markup.inserted",
    "settings": {
      "foreground": token.entity.rgb
    }
  },
  // 删除
  {
    "scope": "markup.deleted",
    "settings": {
      "foreground": colors.red.rgb,
      "fontStyle": "strikethrough"
    }
  },
  // 代码块
  {
    "scope": "markup.raw",
    "settings": {
      "foreground": ui.foreground.rgb
    }
  },
  // 代码
  {
    "scope": "markup.inline.raw",
    "settings": {
      "foreground": token.functionName.rgb
    }
  }

]