const fs = require("fs").promises
const { mode, type } = require('./utils')

const theme = {
  name: `Fei ${type}`,
  type,
  
  semanticHighlighting: true,
  // UI样式
  colors: require('./colors'),
  // 代码高亮
  tokenColors: require('./token')
}

// 创建目录
const mkThemeDir = fs.mkdir("./themes", { recursive: true })

// 写入文件
const minify = mode === 'development' ? 2 : 0
const content = JSON.stringify(theme, null, minify)
const fileName = `./themes/${type}.json`
mkThemeDir.then(() => fs.writeFile(fileName, content))

