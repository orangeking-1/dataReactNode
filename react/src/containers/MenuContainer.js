/**
 * Created by wang on 2017/4/13 0013.
 * 左边菜单栏组件
 */


import  React, {Component} from 'react'
import {Link} from 'react-router'
import "../style/menu.css"
//引入广播、发布的插件（观察者模式）
import EventProxy from '../libs/EventProxy.js'
//有内容组件
import ContentContainer from './ContentContainer.js'




export default class MenuContainer extends Component {
    constructor(props, context){
        super(props, context)
        //设置state的初始值
        this.state = {
            dropDownState: "none",
            arrowDirection: "glyphicon glyphicon-chevron-left icon-right",
            toggle: false,
            ListName: ""
        }
    }

    //点击模块时候，添加动画效果
    selectedOver = (listName)=>{
        let newState = this.state.toggle;
        const _this = this;
        this.setState({
            dropDownState: "none",
            arrowDirection: "glyphicon glyphicon-chevron-left icon-right",
            toggle: newState,
            ListName: listName
        }, function () {
            EventProxy.trigger('toggle2', _this.state);
        })

    }




    //组件渲染时添加监听值改变
    componentDidMount() {

        var _this = this;
        // 监听 toggle 事件
        EventProxy.on('toggle', (toggle) => {
            _this.setState({
                dropDownState: "none",
                arrowDirection: "glyphicon glyphicon-chevron-left icon-right",
                toggle
            });
        });




    }



    //组件卸载时候，取消监听
    componentWillUnMount() {
        EventProxy.off('toggle')
        EventProxy.off('toggle2')
    }

    //下拉菜单的折叠效果
    fold = (e)=>{
        var newState = this.state.dropDownState;
        if(newState == "none"){
            this.setState({
                dropDownState: "block",
                arrowDirection: "glyphicon glyphicon-chevron-down icon-right"

            })
        }else{
            this.setState({
                dropDownState: "none",
                arrowDirection: "glyphicon glyphicon-chevron-left icon-right"

            })
        }
        e.stopPropagation();
    }

    
    
    render (){
        return (
            <div className="menu">
                <div className="xn-left" style={{left: this.state.toggle?'0px':'-215px'}}>
                    <ul className="list-group" id="xn-sidebar">
                        <li className="list-group-item xn-left-lis" onClick={this.fold}>
                            <span className="glyphicon glyphicon-signal icon-left"></span> 列表一 <span className={this.state.arrowDirection}></span>
                            <ul className="list-group" style={{display: this.state.dropDownState}}>
                                <li className="list-group-item" onClick={()=> this.selectedOver("子列表1")}><Link to="/List1/ListChildren1">子列表一</Link></li>
                                <li className="list-group-item" onClick={()=> this.selectedOver("子列表2")}><Link to="/List1/ListChildren2">子列表二</Link></li>
                                <li className="list-group-item"><Link to="/List1/ListChildren3">子列表三</Link></li>
                            </ul>
                        </li>
                        <li className="list-group-item xn-left-lis">
                            <span className="glyphicon glyphicon-plane icon-left"></span> 列表二
                        </li>
                        <li className="list-group-item xn-left-lis" id="loginOut">
                            <span className="glyphicon glyphicon-log-out icon-left"></span> 退出
                        </li>
                    </ul>
                </div>
                
            </div>

            
        )
    }
}