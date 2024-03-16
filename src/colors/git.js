const { colors } = require("../config")

module.exports = {
  // 添加
  "gitDecoration.addedResourceForeground": colors.green.darken(60),
  // 重命名或复制
  "gitDecoration.renamedResourceForeground": colors.blue.darken(30),
  // 分阶段修改
  "gitDecoration.stageModifiedResourceForeground": colors.orange.darken(30),
  // 分阶段删除
  "gitDecoration.stageDeletedResourceForeground": colors.red.darken(10),
  // 修改
  "gitDecoration.modifiedResourceForeground": colors.orange.darken(30),
  // 删除
  "gitDecoration.deletedResourceForeground": colors.red.darken(10),
  // 未跟踪
  "gitDecoration.untrackedResourceForeground": colors.green.darken(60),
  // 忽略
  "gitDecoration.ignoredResourceForeground": colors.gray.darken(40),
  // 冲突
  "gitDecoration.conflictingResourceForeground": colors.red.darken(10),
  // 子模块
  "gitDecoration.submoduleResourceForeground": colors.gray.darken(40)
}
