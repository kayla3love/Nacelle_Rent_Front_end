/**
 * 建立WS链接相关的方法;jSESSIONID:''
 * @param {*} wsUrl :建立webSocket链接的Url;
 */
export default function estabConnectWithWS(wsUrl,onUpdateRegisterNum){
    const ws = new WebSocket(wsUrl);
    //let result = "";

    ws.onopen = function (e) {
        console.log('连接上 ws 服务端了');
        ws.send(JSON.stringify({ flag: wsUrl, data: "Hello WebSocket!" }));
    }
    ws.onmessage = (msg)=> {
        let message = msg.data;
        if(message === "newRegister"){
            onUpdateRegisterNum(null);
        }
    };
    ws.onclose = function (e) {
        console.log('ws 连接关闭了');
        console.log(e);
    }
}