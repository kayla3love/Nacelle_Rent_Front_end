/**
 * 建立WS链接相关的方法;jSESSIONID:''
 * @param {*} wsUrl :建立webSocket链接的Url;
 * @param onUpdateRegisterArray 新增未审核注册者信息
 * @param onUpdateRegisterNum 新增未审核注册者数目
 */
export default function estabConnectWithWS(wsUrl,onUpdateRegisterNum, onUpdateRegisterArray, onInitialWebSocket){
    const ws = new WebSocket(wsUrl);
    onInitialWebSocket(ws);
    //let result = "";

    ws.onopen = function (e) {
        console.log('连接上 ws 服务端了');
        //ws.send(JSON.stringify({ flag: wsUrl, data: "Hello WebSocket!" }));
    }
    ws.onmessage = (msg)=> {
        let message = JSON.parse(msg.data);
        let newResgiterArray = [];
        if(message !== null){
            newResgiterArray.push(message);
            onUpdateRegisterNum(null);
            onUpdateRegisterArray(newResgiterArray);
        }
    };
    ws.onclose = function (e) {
        console.log('ws 连接关闭了');
        console.log(e);
    }
}