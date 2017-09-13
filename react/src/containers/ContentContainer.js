/**
 * Created by wang on 2017/4/13 0013.
 */

import React, {Component} from 'react'
import '../style/content.css'

//引入广播、发布的插件（观察者模式）
import EventProxy from '../libs/EventProxy.js'



export default class ContentContainer extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            toggle: true,
            first: true
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
        EventProxy.on('toggle2', (toggle) => {
            this.setState({
                toggle
            })
        });
    }
    //组件卸载时候，取消监听
    componentWillUnMount() {
        EventProxy.off('toggle')
        EventProxy.off('toggle2')
    }



    render (){
        return (
            <div className='xn-right-content' style={{left: this.state.toggle?'0px':'215px'}}>
                <div className='xn-right-btn '>
                    <button type="button"  className="navbar-toggle xn-navbar-btn"  onClick={this.toggleBtnFunc}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <h2 className="xn-right-title">欢迎页</h2>
                </div>

                <div className="xn-right-content-body">
                    {this.props.children}
                </div>

            </div>
        )
    }
}











