
const HTTPUtil = {};
/**
 * 基于 fetch 封装的 GET请求
 * @param url 请求
 * @param params 对象形式
 * @param headers 头部设置
 * **/
HTTPUtil.get = function(url, params, headers={}) {
    if (params) {
        let paramsArray = [];
        //encodeURIComponent
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'GET',
            headers: headers,
            credentials: 'include',
        }).then((response) => {
            if(response.ok)
                resolve(response.json());
            else
                reject("newLogin")
        }).catch((e)=> {
            alert("error:" + e);
        })
    })
}

/**
 * 基于 fetch 封装的 POST请求
 * @param url
 * @param data
 * @param headers
 * @returns {Promise}
 */
HTTPUtil.post = function(url, data, headers={}) {
    return new Promise(function (resolve, reject) {
        if(data instanceof FormData){
            headers = {'Content-Type': 'application/x-www-form-urlencoded',...headers}
        }else{
            headers = {'Content-Type': 'application/json; charset=utf-8',...headers}
        }
        fetch(url, {
            method: 'POST',
            headers: headers,
            body:data,
            credentials: 'include',
        }).then((response) => {
            if(response.ok)
                resolve(response.json());
            else
                reject("newLogin")
        }).catch((e)=> {
            alert("error:" + e);
        })
    })
}

export default HTTPUtil;
