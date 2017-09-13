/**
 * Created by wang on 2017/3/23 0023.
 * 
 * 项目入口文件
 */

import React,{Component} from 'react'
import ReactDOM from 'react-dom'

//引入路由设置
import Routers from './Routers.js'


//视图渲染到app元素上
ReactDOM.render(
    <div>
        <Routers/>
    </div>,
    document.getElementById('app')
)
