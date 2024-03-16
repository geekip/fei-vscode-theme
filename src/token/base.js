const { type } = require("../utils")
const { colors, ui, token } = require("../config");

// 粗体
const fontBold = {
  fontStyle: 'bold'
}
// if (type === 'light') {
//   fontBold.fontStyle = "bold" //normal
// }

module.exports = [
  {
    "settings": {
      "foreground": ui.foreground.rgb
    }
  },
  {
    "scope": "emphasis",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "scope": "strong",
    "settings": {
      ...fontBold
    }
  },

  /******** 注释 ********/
  {
    scope: "comment",
    settings: {
      "foreground": token.comment.rgb,
    }
  },

  /******** 常量 ********/
  {
    scope: "constant",
    settings: {
      "foreground": token.constant.rgb
    }
  },
  {
    scope: "constant.numeric",
    settings: {
      "foreground": token.numeric.rgb
    }
  },
  /******** 实体 ********/
  {
    scope: "entity",
    settings: {
      "foreground": token.entity.rgb
    }
  },

  // 函数实体
  {
    scope: "entity.name.function",
    settings: {
      "foreground": token.functionName.rgb
    }
  },

  // 类型
  {
    scope: [
      "entity.name.class",
      "entity.name.type",
      "entity.name.namespace",
      "entity.name.scope-resolution"
    ],
    settings: {
      "fontStyle": "italic"
    }
  },
  // 标签, 例如html标签
  {
    scope: [
      "entity.name.tag",
      "punctuation.definition.tag"
    ],
    settings: {
      "foreground": token.keyword.rgb
    }
  },

  // 属性名
  {
    scope: ["entity.other.attribute-name"],
    settings: {
      "foreground": token.entity.rgb
    }
  },

  {
    scope: [
      "invalid.broken",
      "invalid.deprecated",
      "invalid.illegal",
      "invalid.unimplemented"
    ],
    settings: {
      foreground: colors.red.rgb,
      fontStyle: "italic"
    }
  },


  /******** 关键字 ********/
  {
    "scope": [
      "keyword",
      "keyword.operator.new",
      "keyword.operator.expression"
    ],
    "settings": {
      "foreground": token.keyword.rgb,
      ...fontBold
    }
  },
  {
    "scope": "keyword.operator",
    "settings": {
      "foreground": token.keyword.rgb,
      "fontStyle": "normal"
    }
  },

  // {
  //   "scope": "punctuation",
  //   "settings": {
  //     "fontStyle": "normal"
  //   }
  // },

  /******** storage ********/
  {
    "scope": "storage",
    "settings": {
      "foreground": token.keyword.rgb,
      ...fontBold
    }
  },
  /******** string ********/

  {
    "scope": "string",
    "settings": {
      "foreground": token.string.rgb
    }
  },
  // 正则
  {
    "scope": [
      "string.regexp",
      "string.regexp constant.character.escape",
      "string.regexp keyword",
      "string.regexp keyword.operator"
    ],
    "settings": {
      "foreground": token.constant.rgb,
      "fontStyle": "normal"
    }
  },
  /******** support ********/
  {
    "scope": "support",
    "settings": {
      "foreground": token.entity.rgb
    }
  },
  {
    "scope": "support.function",
    "settings": {
      "foreground": token.functionName.rgb
    }
  },

  /******** variable ********/
  // 变量
  {
    "scope": "variable",
    "settings": {
      "foreground": token.variable.rgb
    }
  },

  // 变量-保留
  {
    "scope": "variable.language",
    "settings": {
      "foreground": token.keyword.rgb
    }
  },
  {
    "scope": "variable.other",
    "settings": {
      "foreground": ui.foreground.rgb
    }
  }

]

