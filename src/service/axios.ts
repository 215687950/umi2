import axios from 'axios';
import { message } from 'antd';

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json';

// 无需token请求白名单
const whiteList: string[] = [];

// 请求拦截 - 添加token
instance.interceptors.request.use(
  (config: any) => {
    if (!whiteList.includes(config.url)) {
      const Token = sessionStorage.getItem('authToken');
      if (Token) {
        config.headers.authToken = Token;
      }
    }
    return config;
  },
  error => Promise.reject(error),
);

// 响应拦截 - 处理异常
instance.interceptors.response.use(
  res => res,
  error => {
    if (error.response) {
      message.error(`服务错误(${error.response.status})`);
    } else if (error.message) {
      message.error(error.message);
    }
    return Promise.reject(error);
  },
);

const Axios = (opts: { url: string; data: any }) => {
  const promise = new Promise((resolve, reject) => {
    instance({
      baseURL: process.env.BASE_URL,
      url: opts.url,
      method: 'post',
      data: opts.data || {},
    })
      .then(res => {
        if (res.data.flag) {
          resolve(res.data.data);
        } else {
          message.error(res.data.message);
          reject(res.data);
        }
      })
      .catch(res => {
        reject(res);
      });
  });
  return promise;
};

export default Axios;
