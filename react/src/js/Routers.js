/**
 * Created by wang on 2017/3/23 0023.
 *
 * 路由设计
 */

import React, {Component} from 'react'
import {Router, Route, IndexRoute, hashHistory,browserHistory} from 'react-router'
//hashHistory与browserHistory的区别 路径是否显示#号

import appContainer from '../containers/appContainer.js'
//有内容组件
import ContentContainer from '../containers/ContentContainer.js'

//右侧内容区域
import ContentChildren1 from '../containers/ContentChildren1.js'
import ContentChildren2 from '../containers/ContentChildren2.js'
import ContentChildren3 from '../containers/ContentChildren3.js'



export default class Routers extends Component {
    render (){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={appContainer}>
                    <IndexRoute component={ContentChildren1} />
                    <Route path='List1/ListChildren1' component={ContentChildren1}></Route>
                    <Route path='List1/ListChildren2' component={ContentChildren2}></Route>
                    <Route path='List1/ListChildren3' component={ContentChildren3}></Route>
                    <Route path='List2'></Route>

                </Route>
            </Router>
        )

    }

}
