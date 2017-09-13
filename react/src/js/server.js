/**
 * Created by wang on 2017/4/21 0021.
 */



export default {

    getContentChildreb1Data (obj){
        return new Promise(function (resolve, reject) {
            fetch("")
            // 对服务器返回来的状态信息做处理
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                    }
                })
                // 对返回的数据进行处理
                .then((data) => {
                    resolve(data)
                })
                // 对网络请求的异常进行捕获
                .catch((err)=> {
                    reject(err)
                })
            
        })
    }




}
