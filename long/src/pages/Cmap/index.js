import Taro, {Component} from '@tarojs/taro'
import {View, Map} from '@tarojs/components'

import './index.scss'

class Cmap extends Component {
    constructor(props){
        super(props);
        this.state={
            latitude: '40.042500',
            longitude: '116.274040'
        }
    }

    config={
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#00f',
        navigationBarTitleText: '我的地图',
        navigationBarTextStyle: 'black'
    }
    

    // 已加载组件收到新的参数时调用</View>
componentWillReceiveProps(nextProps) {
}

// 当组件要被从界面上移除的时候，就会调用componentWillUnmount(),在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等
componentWillUnmount() { }

componentDidShow() { }

componentDidHide() { }


    render(){
        return <View className="wrap">
                    <Map id="myMap"
                        style="width: 100%"
                        scale="{{scale}}"
                        longitude="{{longitude}}"
                        latitude="{{latitude}}"
                        markers="{{markers}}"
                        position="{{position}}"
                        showLocation="{{showLocation}}"
                        polyline="{{polyline}}"
                        controls="{{controls}}"
                        circles="{{circles}}">
                    </Map>
              </View>
    }
}