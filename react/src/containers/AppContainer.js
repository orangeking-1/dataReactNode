/**
 * Created by wang on 2017/3/24 0024.
 *
 * 入口组件
 *
 */

import  React, {Component} from 'react'
import {browserHistory} from 'react-router'
//做菜单组件
import MenuContainer from './MenuContainer.js'


import '../style/content.css'

//引入广播、发布的插件（观察者模式）
import EventProxy from '../libs/EventProxy.js'


/*引入css*/
import '../style/common.css'
import '../style/index.css'



export default class appContainer extends Component {



    constructor(props, context){
        super(props, context);
        this.state = {
            toggle: true,
            ListName: ""
        }
    }


    //点击button，做菜单切换功能
    toggleBtnFunc = ()=>{
        if(this.state.toggle){
            this.setState({
                toggle: false
            })
        }else{
            this.setState({
                toggle: true
            })
        }
        EventProxy.trigger('toggle', this.state.toggle);

    }


    componentDidMount(){
        EventProxy.on('toggle2', (obj) => {
            this.setState({
                toggle: obj.toggle,
                ListName: obj.ListName
            })
        });
    }
    //组件卸载时候，取消监听
    componentWillUnMount() {
        EventProxy.off('toggle')
        EventProxy.off('toggle2')
    }
    
    

    render() {
        return (
            <div className="app_container">

                <MenuContainer/>

                <div className='xn-right-content' style={{left: this.state.toggle?'0px':'215px'}}>
                    <div className='xn-right-btn '>
                        <button type="button"  className="navbar-toggle xn-navbar-btn"  onClick={this.toggleBtnFunc}>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <h2 className="xn-right-title">{Boolean(this.state.ListName)?this.state.ListName:"欢迎页"}</h2>
                    </div>

                    <div className="xn-right-content-body">
                        {this.props.children}
                    </div>

                </div>


            </div>
        )
    }
}
