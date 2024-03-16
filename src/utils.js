const color = require("color");
const [mode = 'development', type = 'light'] = process.argv.slice(2)
const pick = options => options[type] || ''

class Color {
  constructor(rgb) {
    this.rgb = rgb
    this.color = color(rgb)
  }
  lighten(ratio) {
    ratio = ratio / 100
    return this.color.lighten(ratio).hex()
  }
  darken(ratio) {
    ratio = ratio / 100
    return this.color.darken(ratio).hex()
  }
  alpha(ratio) {
    // const inst = this.color.alpha(ratio)
    if (!ratio) {
      ratio = ''
    } else if (ratio >= 100) {
      ratio = '00'
    } else {
      ratio = 100 - ratio
      if (ratio < 10) {
        ratio = '0' + ratio
      }
    }
    return this.color.hex() + ratio
  }
}

function genColor(obj) {
  Object.keys(obj).forEach(key => {
    let colorString = obj[key]
    if (colorString) {
      if ('string' === typeof colorString) {
        obj[key] = new Color(colorString)
      } else if (colorString instanceof Array) {
        colorString.forEach((rgb, i) => {
          let inst = new Color(rgb)
          if (i === 0) {
            obj[key] = inst
          }
          obj[key][i] = inst
        })
      }
    }
  })
  return obj
}

module.exports = { mode, type, pick, Color, genColor }
