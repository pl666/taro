import Taro, {Component} from "@tarojs/taro"
import {Pr0gress, View} from "@tarojs/components"

import './index.scss'

class Cprogress extends Component {
    config={
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#00f',
        navigationBarTitleText: '我的进度条',
        navigationBarTextStyle: 'black'
    }

    render() {
        return <View class="wrap">
                <Progress className="progress" percent="20" activeColor="#3c76ff" stroke-width="2" show-info />
                <Progress className="progress" percent="40" activeColor="#3c76ff" active stroke-width="4" show-info />
                <Progress className="progress" percent="60" activeColor="#3c76ff" active stroke-width="6" show-info/>
                <Progress className="progress" percent="80" activeColor="#74fa7d" active stroke-width="8" show-info/>
                <Progress className="progress" percent="100" activeColor="#74fa7d" active stroke-width="10" show-info/>
               </View>
    }
}