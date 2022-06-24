import { IRoute } from 'umi';

const routes: IRoute = [
  { path: '/', redirect: '/home' },
  { title: '首页', path: '/home', component: '@/pages/Home/index' },
];
export default routes;
