const { token } = require("../config")

module.exports = [
  {
    "scope": [
      "source.java storage.type",
      "source.java storage.modifier.import"
    ],
    "settings": {
      "foreground": token.entity.rgb,
      "fontStyle": "italic"
    }
  }
]