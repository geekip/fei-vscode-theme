const { token } = require("../config")

module.exports = [

  // 选择器
  {
    "scope": [
      "entity.other.attribute-name.class.css",
      "entity.other.attribute-name.class.mixin.css",
      "entity.other.attribute-name.id.css",
      "entity.other.attribute-name.parent-selector.css",
      "entity.other.attribute-name.pseudo-element.css",
      "source.css.less entity.other.attribute-name.id",
      "entity.other.attribute-name.scss"
    ],
    "settings": {
      "foreground": token.keyword.rgb
    }
  },
  // 伪类选择器
  {
    "scope": [
      "entity.other.attribute-name.pseudo-class.css"
    ],
    "settings": {
      "foreground": token.comment.rgb
    }
  },
  // 属性名
  {
    "scope": [
      "support.type.property-name.css"
    ],
    "settings": {
      "foreground": token.entity.rgb
    }
  },
  // 样式值
  {
    "scope": [
      "entity.name.tag.custom.css",
      "support.constant.property-value",
      "support.constant.font-name",
      "support.constant.media-type",
      "support.constant.media",
      "support.constant.color",
      "constant.other.color.rgb-value",
      "constant.other.rgb-value"
    ],
    "settings": {
      "foreground": token.functionName.rgb
    }
  },
  // 单位
  {
    "scope": [
      "keyword.other.unit"
    ],
    "settings": {
      "foreground": token.numeric.rgb,
      "fontStyle": "normal"
    }
  },
  // 变量
  {
    "scope": [
      "variable.css",
      "variable.scss",
      "variable.other.less",
    ],
    "settings": {
      "foreground": token.variable.rgb
    }
  }
]