import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from "@tarojs/components"

import './index.scss'
import PNG_componentLogo from '../../asset/images/component_logo.png'

class Ccomponents extends Component {
    constructor(props){
        super(props);
        this.state={
            items: [{
                icon: '../../asset/images/interface.png',
                name: '视图容器',
                open: false,
                list: [{
                    subName: 'CView',
                    id: 'CView'
                },{
                    subName: 'CscrollView',
                    id: 'CscrollView'
                }, {
                    subName: 'Cswiper',
                    id: 'Cswiper'
                }]
            }, {
                icon: '../../asset/images/basecontent.png',
                name: '基础内容',
                open: false,
                list: [{
                    subName: 'Cicon',
                    id: 'Cicon'
                }, {
                    subName: 'Ctext',
                    id: 'Ctext'
                }, {
                    subName: 'Cprogress',
                    id: 'Cprogress'
                }]
            }, {
                icon: '../../asset/images/form.png',
                name: '表单组件',
                open: false,
                list: [{
                    subName: 'button',
                    id: 'button'
                }, {
                    subName: 'checkbox',
                    id: 'checkbox'
                }, {
                    subName: 'input',
                    id: 'input'
                }, {
                    subName: 'textarea',
                    id: 'textarea'
                }, {
                    subName: 'label',
                    id: 'label'
                }, {
                    subName: 'picker',
                    id: 'picker'
                }, {
                    subName: 'radio',
                    id: 'radio'
                }, {
                    subName: 'slider',
                    id: 'slider'
                }, {
                    subName: 'switch',
                    id: 'switch'
                }]
            }, {
                icon: '../../asset/images/navigate.png',
                name: '导航',
                open: false,
                list: [{
                    subName: 'navigator',
                    id: 'navigator'
                }]
            }, {
                icon: '../../asset/images/media.png',
                name: '媒体组件',
                open: false,
                list: [{
                    subName: 'audio',
                    id: 'audio'
                }, {
                    subName: 'image',
                    id: 'image'
                }, {
                    subName: 'video',
                    id: 'video'
                    // }, {
                    //     subName: 'live-player',
                    //     id: 'live-player'
                }]
            },{
                icon: '../../asset/images/location.png',
                name: '地图',
                open: false,
                list: [{
                    subName: 'Cmap',
                    id: 'Cmap'
                }]
            }, {
                icon: '../../asset/images/interface.png',
                name: '画布',
                open: false,
                list: [{
                    subName: 'canvas',
                    id: 'canvas'
                }]
            }]
        }
    }

    config={
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#00f',
        navigationBarTitleText: "智能小程序官方组件",
        navigationBarTextStyle: 'black'
    }

    // oneItemClick = (e) => {
    //     console.log(e.currentTarget.dataset.url)
    //     Taro.navigateTo({
    //         url: e.currentTarget.dataset.url,
    //     })
    // }

    oneItemClick = e => {
        let viewName = e.currentTarget.dataset.id;
        console.log(viewName)
        Taro.navigateTo({
            url: '/pages/' + viewName + '/' + "index"
        });
    }

    toggleClick =(e) => {
        // 无子项直接跳转
        let apiName = e.currentTarget.dataset.id;
        if (apiName) {
            Taro.navigateTo({
                url: '/pages/' + apiName + '/' + apiName
            });
            return;
        }
        // 子项展开与收起
        let items = this.state.items;
        let index = e.currentTarget.dataset.index;
        items[index].open = !items[index].open;
        this.setState('items', items);
    }

    render() {
        let {items} = this.state
        return <View className="group">
                    <View className="group-hd">
                        <Image className="group-logo" src={PNG_componentLogo}></Image>
                        <View className="group-desc">以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式。</View>
                    </View>
                    
                    {   
                        items.map((item ,index)=>{
                            return <View class="group-bd" data-index="{{index}}" onTap={this.toggleClick} key="{{item.id}}">
                                        <View className="item border-bottom {{item.open ? '' : 'item-close'}}">
                                                <Image className="item-logo" src="{{item.icon}}"></Image>
                                                <Text className="item-desc">{item.name}</Text>
                                                <Image s-if="item.id" class="item-logo item-toggle" src="../../asset/images/right_arrow.png"></Image>
                                                <Image s-else className="item-logo item-toggle" src="{{item.open ? '../../asset/images/close.png' : '../../asset/images/open.png'}}"></Image>
                                        </View>

                                        <View s-if="item.open">
                                                <View className="sub-item border-bottom" s-for="subItem in item.list" onTap={this.oneItemClick} data-id="{{subItem.id}}">
                                                    <Text className="sub-item-desc">{subItem.subName}</Text>
                                                    <Image className="item-logo sub-item-goto" src="../../asset/images/right_arrow.png"></Image>
                                                </View>
                                        </View>
                                  </View>
                        })
                    }
              </View>
    
    }
}