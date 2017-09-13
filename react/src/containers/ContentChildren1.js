/**
 * Created by wang on 2017/4/19 0019.
 * 子内容一
 */

import React, {Component} from 'react'


import '../style/ContentChildren1.css'

//tab切换插件
import  Tabs  from '../../node_modules/antd/lib/tabs'
import '../../node_modules/antd/lib/tabs/style/css.js'
//时间插件
import DatePicker from  '../../node_modules/antd/lib/date-picker'
import '../../node_modules/antd/lib/date-picker/style/css.js'
//按钮插件
import Button from '../../node_modules/antd/lib/button'
import '../../node_modules/antd/lib/button/style/css.js'
//引入echarts
// 引入 ECharts 主模块
import Echarts from '../../node_modules/echarts/lib/echarts';
//引入散点图
import '../../node_modules/echarts/lib/chart/scatter';
//引入饼图
import '../../node_modules/echarts/lib/chart/pie';
// 引入提示框和标题组件...
import '../../node_modules/echarts/lib/component/tooltip';
import '../../node_modules/echarts/lib/component/title';
import '../../node_modules/echarts/lib/component/legend';


//引入广播、发布的插件（观察者模式）；
import EventProxy from '../libs/EventProxy.js';


import '../style/ContentChildren1.css';

//本机网络请求全局变量
import config from '../js/config';


const TabPane = Tabs.TabPane


export default class ContentChildren1 extends Component {



    //请求数据
    getDataContent = () => {
        function timeChange(data) {
            var d = new Date(data);
            return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        }
        let startTime = timeChange(this.state.startValue._d);
        let endTime = timeChange(this.state.endValue._d);
        // console.log(startTime);
        // console.log(endTime);
        fetch(`${config.HTTP}${config.SERVER}:${config.PORT}/getDataFromTime?startTime=${startTime}&endTime=${endTime}`,{
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method:'GET',
        })
        .then ((response,data) => {
            console.log(response,data)
        })
        .catch((err) => {
            console.log(err)
        })


    }


    //tab切换的回调函数
    callback = (Key)=> {
        var _this = this;
        if (Key == "2") {

            if (_this.state.firstTab2) {
                _this.setState({
                    startValue: null,
                    endValue: null,
                    endOpen: false,
                    firstTab2: false,
                    firstTab3: true
                })
                setTimeout(function () {
                    _this.scatterFunc()
                }, 1);
            }
        }
        if (Key == "3") {

            if (_this.state.firstTab3) {
                _this.setState({
                    startValue: null,
                    endValue: null,
                    endOpen: false,
                    firstTab2: true,
                    firstTab3: false
                })
                setTimeout(function () {
                    _this.pieFunc()
                }, 1);
            }

        }

    }

    //事件插件的设置
    state = {
        startValue: null,
        endValue: null,
        endOpen: false,
        firstTab2: true,
        firstTab3: true
    };

    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
    }

    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({endOpen: true});
        }
    }

    handleEndOpenChange = (open) => {
        this.setState({endOpen: open});
    }


    //echarts需要的设置
    //散点图
    scatterFunc = ()=> {
        // 基于准备好的dom，初始化echarts实例
        var myChart = Echarts.init(document.getElementById('scatter'));
        // 绘制图表
        var data = {
            "total": "31",
            "rows": [{
                "cussCount": 0,
                "fltdate": "2017-03-01",
                "fridayDate": "2017-03-31",
                "lastMondayDate": "2017-03-20",
                "lastSundayDate": "2017-03-26",
                "mobileCheckInCount": 0,
                "mondayDate": "2017-03-27",
                "onlineCheckInCount": 0,
                "otherCheckInCount": 10,
                "pageUtil": {
                    "allConditionAndLimit": "null limit 0,10",
                    "andCondition": "",
                    "like": false,
                    "limit": " limit 0,10",
                    "orderByCondition": "",
                    "pageCount": 0,
                    "pageId": 1,
                    "pageOffset": 0,
                    "pageSize": 10,
                    "pageTail": 0,
                    "paging": false,
                    "rowCount": 0
                },
                "saturdayDate": "2017-04-01",
                "smsCheckInCount": 0,
                "sundayDate": "2017-04-02",
                "thursdayDate": "2017-03-30",
                "timesStamp": 1490607958418,
                "touchScreenInCount": 0,
                "tuesdayDate": "2017-03-28",
                "weChatCheckInCount": 0,
                "wednesdayDate": "2017-03-29",
                "weekCheckInCount": 0,
                "dayCount": 3
            }, {
                "cussCount": 0,
                "fltdate": "2017-03-02",
                "fridayDate": "2017-03-31",
                "lastMondayDate": "2017-03-20",
                "lastSundayDate": "2017-03-26",
                "mobileCheckInCount": 0,
                "mondayDate": "2017-03-27",
                "onlineCheckInCount": 0,
                "otherCheckInCount": 10,
                "pageUtil": {
                    "allConditionAndLimit": "null limit 0,10",
                    "andCondition": "",
                    "like": false,
                    "limit": " limit 0,10",
                    "orderByCondition": "",
                    "pageCount": 0,
                    "pageId": 1,
                    "pageOffset": 0,
                    "pageSize": 10,
                    "pageTail": 0,
                    "paging": false,
                    "rowCount": 0
                },
                "saturdayDate": "2017-04-01",
                "smsCheckInCount": 0,
                "sundayDate": "2017-04-02",
                "thursdayDate": "2017-03-30",
                "timesStamp": 1490607958418,
                "touchScreenInCount": 0,
                "tuesdayDate": "2017-03-28",
                "weChatCheckInCount": 0,
                "wednesdayDate": "2017-03-29",
                "weekCheckInCount": 0,
                "dayCount": 3
            }]
        }

        //解析获取的数据，存放散点图的数据
        var dataAll = [];
        data.rows.map(function (item, index) {
            var oneDataArr = [item.fltdate, item.dayCount];
            dataAll[index] = oneDataArr;
        })


        //获取值计量最大值
        var dataAllMax = dataAll[0][1];
        dataAll.map(function (item, index) {
            if (item[1] > dataAllMax) {
                dataAllMax = item[1]
            }
        })


        var dataAllLength = dataAll.length;
        // console.log(dataAllLength);
        var startDate = dataAll[0][0];
        var endDate = dataAll[dataAllLength - 1][0];


        var option = {
            title: {
                text: '子列表一配图',
                x: 'center',
                y: 0
            },

            tooltip: {
                formatter: '值机数量 : ({c})'
            },
            xAxis: [
                {
                    type: 'time',
                    name: '时间',
                    //显示为全部显示
                    interval: 0,

                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '总量',
                    min: 0,
                    max: dataAllMax
                },

            ],
            series: [
                {
                    name: 'I',
                    type: 'scatter',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    data: dataAll,
                    itemStyle: {
                        normal: {
                            color: '#1ab394'
                        }
                    }
                }
            ],

        };


        myChart.setOption(option);
    }

    //扇形图
    pieFunc = ()=> {
        var myChart2 = Echarts.init(document.getElementById('pie'));
        var data = {
            "total": "31",
            "rows": [{
                "cussCount": 12,
                "fltdate": "2017-03-01",
                "fridayDate": "2017-03-31",
                "lastMondayDate": "2017-03-20",
                "lastSundayDate": "2017-03-26",
                "mobileCheckInCount": 56,
                "mondayDate": "2017-03-27",
                "onlineCheckInCount": 32,
                "otherCheckInCount": 10,
                "pageUtil": {
                    "allConditionAndLimit": "null limit 0,10",
                    "andCondition": "",
                    "like": false,
                    "limit": " limit 0,10",
                    "orderByCondition": "",
                    "pageCount": 0,
                    "pageId": 1,
                    "pageOffset": 0,
                    "pageSize": 10,
                    "pageTail": 0,
                    "paging": false,
                    "rowCount": 0
                },
                "saturdayDate": "2017-04-01",
                "smsCheckInCount": 44,
                "sundayDate": "2017-04-02",
                "thursdayDate": "2017-03-30",
                "timesStamp": 1490607958418,
                "touchScreenInCount": 0,
                "tuesdayDate": "2017-03-28",
                "weChatCheckInCount": 91,
                "wednesdayDate": "2017-03-29",
                "weekCheckInCount": 0,
                "dayCount": 3
            }, {
                "cussCount": 9,
                "fltdate": "2017-03-02",
                "fridayDate": "2017-03-31",
                "lastMondayDate": "2017-03-20",
                "lastSundayDate": "2017-03-26",
                "mobileCheckInCount": 0,
                "mondayDate": "2017-03-27",
                "onlineCheckInCount": 2,
                "otherCheckInCount": 10,
                "pageUtil": {
                    "allConditionAndLimit": "null limit 0,10",
                    "andCondition": "",
                    "like": false,
                    "limit": " limit 0,10",
                    "orderByCondition": "",
                    "pageCount": 0,
                    "pageId": 1,
                    "pageOffset": 0,
                    "pageSize": 10,
                    "pageTail": 0,
                    "paging": false,
                    "rowCount": 0
                },
                "saturdayDate": "2017-04-01",
                "smsCheckInCount": 0,
                "sundayDate": "2017-04-02",
                "thursdayDate": "2017-03-30",
                "timesStamp": 1490607958418,
                "touchScreenInCount": 73,
                "tuesdayDate": "2017-03-28",
                "weChatCheckInCount": 42,
                "wednesdayDate": "2017-03-29",
                "weekCheckInCount": 0,
                "dayCount": 3
            }]
        }

        var cussCountSum = 0,   //自助值机
            onlineCheckInCountSum = 0, //网上值机
            weChatCheckInCountSum = 0, //微信值机
            mobileCheckInCountSum = 0, //手机值机
            touchScreenInCountSum = 0, //触屏版
            SMSCheckInCountSum = 0, //短信值机
            otherCheckInCountSum = 0; //其他方式值机

        data.rows.map(function (item, index) {
            cussCountSum += item.cussCount;
            onlineCheckInCountSum += item.onlineCheckInCount;
            weChatCheckInCountSum += item.weChatCheckInCount;
            mobileCheckInCountSum += item.mobileCheckInCount;
            touchScreenInCountSum += item.touchScreenInCount;
            SMSCheckInCountSum += item.smsCheckInCount;
            otherCheckInCountSum += item.otherCheckInCount;


        })


        //表格需要的数据
        var chart2DataAll = [
            {value: cussCountSum, name: "自助值机"},
            {value: onlineCheckInCountSum, name: "网上值机"},
            {value: weChatCheckInCountSum, name: "微信值机"},
            {value: mobileCheckInCountSum, name: "手机值机"},
            {value: touchScreenInCountSum, name: "触屏版"},
            {value: SMSCheckInCountSum, name: "短信值机"},
            {value: otherCheckInCountSum, name: "其他值机"},
        ]


        var option = {
            title: {
                text: '扇形图',
                subtext: '各个数据占比图',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['自助值机', '网上值机', '微信值机', '手机值机', '触屏版', '短信值机', '其他值机']
            },
            color: ['#C23531', '#2F4554', '#61A0A8', '#8B27E3', '#91C7AE', '#749F83', '#CA8622'],
            series: [
                {
                    name: '值机占比',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: chart2DataAll,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };


        myChart2.setOption(option);
    }

    //DOM操作改变tabs定位
    componentDidMount() {

        EventProxy.on('toggle', (obj) => {
            // console.log(obj)
            if (obj) {
                document.getElementsByClassName("ant-tabs-bar")[0].style.right = -215 + "px"
            } else {
                setTimeout(function () {
                    document.getElementsByClassName("ant-tabs-bar")[0].style.right = 10 + "px"
                }, 500)
            }

        });


        EventProxy.on('toggle2', (obj) => {


            // console.log(obj)
            if (obj.toggle && obj.ListName == '子列表1') {
                setTimeout(function () {
                    document.getElementsByClassName("ant-tabs-bar")[0].style.right = 10 + "px"
                }, 500)

            } else if (!obj.toggle && obj.ListName == '子列表1') {
                document.getElementsByClassName("ant-tabs-bar")[0].style.right = -215 + "px"
            }

        });


    }


    //第一页的内容
    tabs1Func = ()=> {
        const {startValue, endValue, endOpen} = this.state;
        var data = {
            "rows": [{
                "cussCount": 12,
                "fltdate": "2017-03-01",
                "fridayDate": "2017-03-31",
                "lastMondayDate": "2017-03-20",
                "lastSundayDate": "2017-03-26",
                "mobileCheckInCount": 56,
                "mondayDate": "2017-03-27",
                "onlineCheckInCount": 32,
                "otherCheckInCount": 10,
                "pageUtil": {
                    "allConditionAndLimit": "null limit 0,10",
                    "andCondition": "",
                    "like": false,
                    "limit": " limit 0,10",
                    "orderByCondition": "",
                    "pageCount": 0,
                    "pageId": 1,
                    "pageOffset": 0,
                    "pageSize": 10,
                    "pageTail": 0,
                    "paging": false,
                    "rowCount": 0
                },
                "saturdayDate": "2017-04-01",
                "smsCheckInCount": 44,
                "sundayDate": "2017-04-02",
                "thursdayDate": "2017-03-30",
                "timesStamp": 1490607958418,
                "touchScreenInCount": 0,
                "tuesdayDate": "2017-03-28",
                "weChatCheckInCount": 91,
                "wednesdayDate": "2017-03-29",
                "weekCheckInCount": 0,
                "dayCount": 3
            }, {
                "cussCount": 9,
                "fltdate": "2017-03-02",
                "fridayDate": "2017-03-31",
                "lastMondayDate": "2017-03-20",
                "lastSundayDate": "2017-03-26",
                "mobileCheckInCount": 0,
                "mondayDate": "2017-03-27",
                "onlineCheckInCount": 2,
                "otherCheckInCount": 10,
                "pageUtil": {
                    "allConditionAndLimit": "null limit 0,10",
                    "andCondition": "",
                    "like": false,
                    "limit": " limit 0,10",
                    "orderByCondition": "",
                    "pageCount": 0,
                    "pageId": 1,
                    "pageOffset": 0,
                    "pageSize": 10,
                    "pageTail": 0,
                    "paging": false,
                    "rowCount": 0
                },
                "saturdayDate": "2017-04-01",
                "smsCheckInCount": 0,
                "sundayDate": "2017-04-02",
                "thursdayDate": "2017-03-30",
                "timesStamp": 1490607958418,
                "touchScreenInCount": 73,
                "tuesdayDate": "2017-03-28",
                "weChatCheckInCount": 42,
                "wednesdayDate": "2017-03-29",
                "weekCheckInCount": 0,
                "dayCount": 12
            }]
        }
        return (
            <div>
                <DatePicker
                    style={{width: "35%", maxWidth: "200px"}}
                    placeholder="开始时间"
                    disabledDate={this.disabledStartDate}
                    format="YYYY-MM-DD"
                    value={startValue}
                    // placeholder="Start"
                    onChange={this.onStartChange}
                    onOpenChange={this.handleStartOpenChange}
                />—
                <DatePicker
                    style={{width: "35%", maxWidth: "200px"}}
                    placeholder="结束时间"
                    disabledDate={this.disabledEndDate}
                    format="YYYY-MM-DD"
                    value={endValue}
                    // placeholder="End"
                    onChange={this.onEndChange}
                    // open={endOpen}
                    onOpenChange={this.handleEndOpenChange}
                />&nbsp;
                <Button icon="search" onClick={this.getDataContent}>查询</Button>


                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>日期</th>
                        <th>自助</th>
                        <th>网上</th>
                        <th>微信</th>
                        <th>手机</th>
                        <th>触屏</th>
                        <th>短信</th>
                        <th>其他</th>
                        <th>总量</th>
                    </tr>
                    </thead>

                    <tbody id="j_tb">


                    {data.rows.map(function (item) {
                        return (
                            <tr key={item.fltdate}>

                                <td>{item.fltdate}</td>
                                <td>{item.cussCount}</td>
                                <td>{item.onlineCheckInCount}</td>
                                <td>{item.weChatCheckInCount}</td>
                                <td>{item.mobileCheckInCount}</td>
                                <td>{item.touchScreenInCount}</td>
                                <td>{item.smsCheckInCount}</td>
                                <td>{item.otherCheckInCount}</td>
                                <td>{item.dayCount}</td>

                            </tr>
                        )
                    })}


                    </tbody>
                </table>
            </div>
        )
    }
    //第二页的内容
    tabs2Func = ()=> {
        return (
            <div id="scatter"></div>
        )
    }
    //第三页的内容
    tabs3Func = ()=> {
        return (
            <div id="pie"></div>
        )
    }


    render() {

        return (

            <Tabs size="small" onTabClick={this.callback}>
                <TabPane tab="表" key="1">
                    {this.tabs1Func()}
                </TabPane>
                <TabPane tab="散" key="2">
                    {this.tabs2Func()}
                </TabPane>
                <TabPane tab="扇" key="3">
                    {this.tabs3Func()}
                </TabPane>
            </Tabs>



        )
    }
} 
