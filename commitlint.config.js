/**
 * feat：新功能
 * fix：修复bug
 * perf：优化相关，比如提升性能、体验
 * docs：仅文档新增/改动
 * style：仅样式改动
 * refactor：重构某个功能
 * update：更新某功能
 * optimize: 优化构建工具或运行时性能
 * chore：构建过程或辅助工具的变动
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "docs",
        "style",
        "refactor",
        "update",
        "optimize",
        "chore",
      ],
    ],
    "type-case": [0],
    "type-empty": [0],
    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
    "header-max-length": [0, "always", 72],
  },
};
