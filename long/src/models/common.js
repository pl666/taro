import Taro from '@tarojs/taro';

export default {
  namespace: 'common',  //namespace是model state在全局state中所用到的key
  state: {
    access_token: Taro.getStorageSync('access_token'),
    mobile: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').mobile : '186132213',
    nickname: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').nickname : '',
    new_user: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').new_user : '',
    is_has_buy_card: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').is_has_buy_card : '',
    erroMessage: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').erroMessage : '',
  },
  effects: {
    //分页
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
