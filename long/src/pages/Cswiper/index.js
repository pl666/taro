import Taro, {Component} from '@tarojs/taro'
import {View, Swiper, Block, SwiperItem, Text, Slider, Switch} from "@tarojs/components"

import './index.scss'

class Cswiper extends Component {
    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    className: 'color-a',
                    value: 'A'
                }, {
                    className: 'color-b',
                    value: 'B'
                }, {
                    className: 'color-c',
                    value: 'C'
                }
            ],
            current: 0,
            switchIndicateStatus: true,
            switchAutoPlayStatus: false,
            switchDuration: 500,
            autoPlayInterval: 2000
        }

        this.swiperChange=this.swiperChange.bind(this)
        this.switchIndicate=this.switchIndicate.bind(this)
        this.switchAutoPlay=this.switchAutoPlay.bind(this)
        this.changeSwitchDuration=this.changeSwitchDuration.bind(this)
        this.changeAutoPlayInterval=this.changeAutoPlayInterval.bind(this)
    }  
    config={
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#00f',
        navigationBarTitleText: '我的轮播图',
        navigationBarTextStyle: 'block'
    }

    swiperChange(e) {
        console.log('swiperChange:', e.detail);
    }
    switchIndicate() {
        this.setState({
            switchIndicateStatus: !this.state.switchIndicateStatus
        });
    }
    switchAutoPlay() {
        this.setState({
            switchAutoPlayStatus: !this.state.switchAutoPlayStatus
        });
    }
    changeSwitchDuration(e) {
        this.setState({
            switchDuration: e.detail.value
        });
    }
    changeAutoPlayInterval(e) {
        this.setState({
            autoPlayInterval: e.detail.value
        });
    }

// 已加载组件收到新的参数时调用</View>
componentWillReceiveProps(nextProps) {
}

// 当组件要被从界面上移除的时候，就会调用componentWillUnmount(),在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等
componentWillUnmount() { }

componentDidShow() { }

componentDidHide() { }


render() {
    let { items } = this.state
    return <View className="wrap">
            <View className="title">实例轮播</View>
                <View className="swiper-wrap">
                    <Swiper className="my-swiper" vertical="false" circular="true" indicatorColor="rgba(0,0,0,0.30)" indicatorActiveColor="#fff"  autoplay="{{switchAutoPlayStatus}}" indicatorDots="{{switchIndicateStatus}}" interval="{{autoPlayInterval}}" duration="{{switchDuration}}"  current="0" onChange={this.swiperChange}>
                      {
                          items.map((item,index)=>{
                              return <Block>
                                        <SwiperItem class="{{item.className}}">
                                          <View className="item">{item.value}</View>
                                        </SwiperItem>
                                     </Block>
                          })
                      }
                    </Swiper>
                </View>

                <View class="switch-wrap">
                    <View>
                        <Text>指示器</Text>
                        <Switch checked="{{switchIndicateStatus}}" onChange={this.switchIndicate} class="switch"></Switch>
                    </View>
                    <View>
                        <Text>自动播放</Text>
                        <Switch checked="{{switchAutoPlayStatus}}" onChange={this.switchAutoPlay} class="switch"></Switch>
                    </View>
                </View>

                <View class="slider-wrap">
                    <View>
                        <View class="slider-title-time">
                            <Text class="slider-title">幻灯片切换时长</Text>
                            <Text class="slider-time">{switchDuration}ms</Text>
                        </View>
                        <Slider min="300" max="1500" value="{{switchDuration}}"  onChange={this.changeSwitchDuration}></Slider>
                    </View>

                    <View>
                        <View class="slider-title-time">
                            <Text class="slider-title">自动播放间隔时长</Text>
                            <Text class="slider-time">{autoPlayInterval}ms</Text>
                        </View>
                        <Slider min="1000" max="5000" value="{{autoPlayInterval}}" onChange={this.changeAutoPlayInterval}></Slider>
                    </View>
                </View>
           </View>
 }
}