import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView} from '@tarojs/components'

import "./index.scss"

class CscrollView extends Component {
    config={
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#00f',
        navigationBarTitleText: '我的scrollView',
        navigationBarTextStyle: 'black'
    }

    constructor(props){
        super(props);
        this.upper=this.upper.bind(this)
        this.lower=this.lower.bind(this)
    }


// 已加载组件收到新的参数时调用</View>
componentWillReceiveProps(nextProps) {
}

// 当组件要被从界面上移除的时候，就会调用componentWillUnmount(),在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等
componentWillUnmount() { }

componentDidShow() { }

componentDidHide() { }

upper(){
    Taro.showToast({
        duration:1000,
        title:"已到顶",
        icon:"success"
    })
}

lower(){
    Taro.showToast({
        duration:1000,
        title:"已到底",
        icon:"success"
    })
}

myscroll(e) {
    console.log('获取事件的详细信息e.detail:' + e.detail)
    console.log(e.detail)
}


render() {
    return <View className="wrap">
            <View className="tit">横向滚动</View>
            <ScrollView
                className="s-v"
                scrollX //横向滚动
                scrollTop='0'
                style='height: 150px;'
                scrollWithAnimation  //在设置滚动条位置时使用动画过渡
                upperThreshold="20"  //距顶部/左边多远时（单位 px），触发 scrolltoupper 事件
                lowerThreshold="20"  //	距底部/右边多远时（单位 px），触发 scrolltolower 事件
                onScrollToUpper={this.upper} //滚动到顶部/左边，会触发 scrolltoupper 事件
                onScrollToLower={this.lower} //滚动到底部/右边，会触发 scrolltolower 事件
                onScroll={this.myscroll}
            >
             <View id="one" className="a row">横</View>
             <View id="two" className="b row">向</View>
             <View id="three" className="c row">滚</View>
             <View id="four" className="d row">动</View>
            </ScrollView>


            <View className="tit">纵向滚动</View>
            <ScrollView
                className="s-v"
                scrollY//横向滚动
                scrollWithAnimation  //在设置滚动条位置时使用动画过渡
                upperThreshold="10"  //距顶部/左边多远时（单位 px），触发 scrolltoupper 事件
                lowerThreshold="10"  //	距底部/右边多远时（单位 px），触发 scrolltolower 事件
                onScrollToUpper={this.upper} //滚动到顶部/左边，会触发 scrolltoupper 事件
                onScrollToLower={this.lower} //滚动到底部/右边，会触发 scrolltolower 事件
                onScroll={this.myscroll}
            >
             <View id="five" className="a">纵</View>
             <View id="six" className="b">向</View>
             <View id="seven" className="c">滚</View>
             <View id="eight" className="d">动</View>
            </ScrollView>
           </View>
}



}
