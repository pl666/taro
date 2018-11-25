import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

// import dva from './utils/dva'
// import models from './models'

import Index from './pages/index'
import Cview from './pages/Cview'
import CscrollView from './pages/CscrollView'
import Cswiper from './pages/Cswiper'
import Cicon from './pages/Cicon'
import Ctext from './pages/Ctext'
import Cprogress from './pages/Cprogress'
import Ccomponents from './pages/Ccomponents'
import Cmap from './pages/Cmap'

import configStore from './store'

import './app.scss'

// const dvaApp = dva.createApp({
//   initialState: {},
//   models: models,
// });


// const store = dvaApp.getStore();

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/Cview/index',
      'pages/CscrollView/index',
      'pages/Cswiper/index' ,
      'pages/Cicon/index',
      'pages/Ctext/index',
      'pages/Cprogress/index',
      'pages/Ccomponents/index',
      'pages/Cmap/index'

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/Ccomponents/index",
        text: "组件",
        iconPath: "./asset/images/component_normal.png",
        selectedIconPath: "./asset/images/component_selected.png"
      }, {
        pagePath: "pages/index/index",
        text: "接口",
        iconPath: "./asset/images/API_normal.png",
        selectedIconPath: "./asset/images/API_selected.png"
      }],
      color: '#a2a2a2',
      selectedColor: '#3388ff',
      backgroundColor: '#ffffff',
      borderStyle: '#black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
        <Cview />
        <CscrollView />
        <Cswiper />
        <Cicon />
        <Ctext />
        <Cprogress />
        <Ccomponents />
        <Cmap />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
