import axios from 'axios';
import { showMessage } from "./status";   // 引入状态码文件
import { message } from 'antd/es'  // 引入el 提示框，这个项目里用什么组件库这里引什么

axios.defaults = {
  baseURL: '',
  // withCredentials: true,
  // headers: {
  //   Cookie: 'sp.sid=s%3APZoqi9iB1e5X32-ZUEfoM-RQ-1z3DQ05.v%2Br%2FUUPEfvF9Sks0ybJTaiTHs4Rmc%2BHeyhG3Mebq3k4; Path=/; Expires=Thu, 02 Dec 2022 01:58:34 GMT; HttpOnly'
  // }
};

//http request 拦截器
axios.interceptors.request.use(
    config => {
        // 配置请求头
        config.headers = {
          // withCredentials: true,
          cookie: 'sp1.sid=s%3A9rSF5sCMYaXYPKawxFKo44zZbOoWub27.oQ0QG89OQk4pUkFCzfBcCSi1WKkhn9Pg3fThSJ8H%2FHc; Path=/; Expires=Sat, 12 Nov 2022 02:21:57 GMT; HttpOnly',
          //'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
          'Content-Type':'application/json;charset=UTF-8',        // 传参方式json
          'token':'80c483d59ca86ad0393cf8a98416e2a1'              // 这里自定义配置，这里传的是token
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        const {response} = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            showMessage(response.status);           // 传入响应码，匹配响应码对应信息
            return Promise.reject(response.data);
        } else {
          message.warning('网络连接异常,请稍后再试!');
        }
    }
);

// 封装 GET POST 请求并导出
export function request(url='',params={},type='GET'){
//设置 url params type 的默认值
    return new Promise((resolve,reject)=>{
        let promise;
        if ( type.toUpperCase()==='GET' ){
            promise = axios({
                url,
                params
            })
        } else if( type.toUpperCase()=== 'POST' ){
            promise = axios({
                method:'POST',
                url,
                data:params
            })
        } else if( type.toUpperCase()=== 'DELETE' ){
            promise = axios({
                method:'DELETE',
                url,
                params
            })
        }
        //处理返回
        promise && promise.then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}