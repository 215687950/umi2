import { defineConfig } from 'umi';
import routes from './src/routes';

export default defineConfig({
  alias: {
    '@components': '/src/components',
  },
  favicon: '/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {}, // 按需加载
  // chunks: ['styles', 'vendors', 'umi', 'antdesigns'], // 代码拆分
  chainWebpack(memo) {
    // ...
  },
  theme: {}, // antd 样式主题
  routes, // 路由
  fastRefresh: {},
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  scripts: [
    'https://unpkg.com/react@17.0.1/umd/react.production.min.js',
    'https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js',
  ],
});
