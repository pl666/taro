import Taro, {Component} from "@tarojs/taro"
import {Button, View, Text} from "@tarojs/components"

import './index.scss'

let initData = '这是一段文字.';
let extraLine = [];

class Ctext extends Component {
    constructor(props){
        super(props);
        this.state={
            text: initData
        }
    }

    add(e) {
        extraLine.push('其他文字');
        this.setState({
            text: initData + extraLine.join(',')
        });
    }
    remove(e) {
        if (extraLine.length > 0) {
            extraLine.pop();
            this.setState({
                text: initData + extraLine.join(',')
            });
        }
    }

    config={
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#00f',
        navigationBarTitleText: '我的Text',
        navigationBarTextStyle: 'block'
    }

    render() {
        return <View class="wrap">
            <Text>{text}</Text>
            <Button className="btn" type="primary" onTap={this.add}>添加 text</Button>
            <Button className="btn" type="primary" onTap={this.remove}>删除 text</Button>
        </View>
    }
}