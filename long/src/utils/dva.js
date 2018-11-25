import Taro from '@tarojs/taro';
//dva解决了我们使用redux管理数据的那些繁杂的步骤，它把所有的步骤都整合到一个model文件里，在这个文件里你可以管理你的state，处理你的同步action还有异步action，而且还整合了redux-saga，让你的异步处理变得更简洁。
import { create } from 'dva-core';
import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;

function createApp(opt) {
  // redux日志
  // opt.onAction = [createLogger()];

  // 实例化dva
  app = create(opt);

  //配置 hooks 或者注册插件
  app.use(createLoading({}));

  // 适配支付宝小程序
  if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
    global = {};
  }

  //注册 model
  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;

  //启动应用
  app.start();

  store = app._store;
  
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
}
