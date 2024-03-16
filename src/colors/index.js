const path = require('path')
const glob = require('glob')

const files = path.resolve(__dirname, '!(index)*.js')
const modules = glob.sync(files).map(file => require(file))

const colors = {}
modules.forEach(item => Object.assign(colors, item))
module.exports = colors