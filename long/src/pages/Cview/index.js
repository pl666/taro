import Taro, { Component } from "@tarojs/taro"
import { View, Text, Block} from "@tarojs/components"

import "./index.scss"

class Cview extends Component {
    config={
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#00f',
        navigationBarTitleText: '我的View',
        navigationBarTextStyle: 'black'
}

// 已加载组件收到新的参数时调用</View>
componentWillReceiveProps(nextProps) {
}

// 当组件要被从界面上移除的时候，就会调用componentWillUnmount(),在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等
componentWillUnmount() { }

componentDidShow() { }

componentDidHide() { }

render() {
    return <Block>
                <View>
                    <View className="title">横向布局</View>
                    <View className="rowlike">
                        <View className="color-a">
                            <Text>A</Text>
                        </View>
                        <View className="color-b">
                            <Text>B</Text>
                        </View>
                        <View className="color-c">
                            <Text>C</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View className="title">纵向布局</View>
                    <View className="collike">
                        <View className="color-a">
                            <Text>A</Text>
                        </View>
                        <View className="color-b">
                            <Text>B</Text>
                        </View>
                        <View className="color-c">
                            <Text>C</Text>
                        </View>
                    </View>
                </View>
            </Block>
    }
}