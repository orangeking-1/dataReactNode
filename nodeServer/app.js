/*
* @Author: orangekingliness
* @Date:   2017-04-21 16:03:50
* @Last Modified by:   orangekingliness
* @Last Modified time: 2017-04-21 16:04:57
*/

'use strict';


//创建一个express对象
const express = require("express")

//文件操作模块
const fs = require('fs')

//创建一个app对象集成与express
const app = express()

//在app对象上定义一个属性（用于存放端口号），如果没有被占用就使用3032
app.set("port", process.env.PORT || 3032)

fs.readFile(__dirname+'/db/datas.json', 'utf-8', (error, data)=>{
    if (error) throw error;
    console.log(typeof JSON.parse(data));
    let dataObj = JSON.parse(data)
    dataObj.map((value, index)=>{
        console.log(value);
        // console.log(index);
    })
    // res.send(data)
})


app.get('/getDataFromTime', (req, res) => {
	console.log("有数据请求了！！！")
    let reqTime = req.query;
    let reqStartTime = req.query.startTime;
    let reqEndTime = req.query.endTime;
    //读取本地文件
    fs.readFile('./db/datas.json', 'utf-8', (error, data)=>{
        if (error) throw error;
        console.log(data);
        // res.send(data)
    })


})





app.listen(app.get("port"), function(){
	console.log("server is runing at port 3032!")
})






