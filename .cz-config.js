module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复bug' },
    { value: 'perf', name: 'perf:     优化相关，比如提升性能、体验' },
    { value: 'docs', name: 'docs:     文档新增/改动' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    { value: 'refactor', name: 'refactor: 重构某个功能' },
    { value: 'update', name: 'update:     更新某功能' },
    { value: 'optimize', name: 'optimize:   优化构建工具或运行时性能' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
  },
  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72,
};
