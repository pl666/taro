import Taro, { Component } from '@tarojs/taro'
import {View, Icon} from "@tarojs/components"

import './index.scss'

class Cicon extends Component {
    config={
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#00f',
        navigationBarTitleText: '我的图标',
        navigationBarTextStyle: 'black'
    }

    constructor(props){
        super(props);
        this.state={
            types: ['success', 'info', 'warn', 'waiting',
                'success_no_circle', 'clear', 'search', 'personal',
                'setting', 'top', 'close', 'cancel', 'download',
                'checkboxSelected', 'radioSelected', 'radioUnselect'],
            colors: [
                '#333', '#666', '#999', '#3C76FF', '#F7534F'
            ],
            sizes: [
                40, 35, 30, 25
            ]
        }
    }
    
    render(){
        let {types} = this.state
        let {colors} = this.state
        let {sizes} = this.state
        return <View class="wrap">
                 <View class="title">默认样式</View>
                 <View class="group">
                    <View>
                        {
                            types.map((item)=>{
                                return <Icon type="{{item}}" className="small-default" />
                            })
                        }
                        
                    </View>
                 </View>

                 <View class="title">尺寸选择</View>
                 <View class="group choose">
                    <View>
                        {
                            sizes.map((item)=>{
                                return <Icon type="success" size="{{item}}" class="icon-size" />
                            })
                        }
                        
                    </View>
                 </View>

                 <View class="title">颜色选择</View>
                 <View class="group choose">
                    <View>
                        {
                            colors.map((item)=>{
                                return <Icon type="warn" size="40" color="{{item}}" class="icon-color"/>
                            })
                        }
                        
                    </View>
                 </View>
        
        
              </View>
    }

}