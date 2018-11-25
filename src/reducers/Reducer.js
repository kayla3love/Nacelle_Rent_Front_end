const UPDATE_MENU = 'UPDATE_MENU';
const UPDATE_PAGE = 'UPDATE_PAGE';
const UPDATE_LOGINSTATE = 'UPDATE_LOGINSTATE';
const UPDATE_REGISTERNUM = 'UPDATE_REGISTERNUM';
const UPDATE_REGISTERARRAY = 'UPDATE_REGISTERARRAY';
const INITIAL_STATE = 'INITIAL_STATE';
const DELETE_REGISTER = 'DELETE_REGISTER';
const INITIAL_WEBSOCKET = 'INITIAL_WEBSOCKET';

export default function(state, action){
    if(!state){
        state = {accountOpen:false,currentPage:'',loginState:false, registerNum:0, registerArray:[]}
    }
    switch(action.type){
        //初始化所有数据
        case INITIAL_STATE:
            return{
                accountOpen:false,
                currentPage:'',
                loginState:false,
                registerNum:0,
                registerArray:[]
            }
        case INITIAL_WEBSOCKET:
            return{
                ...state,webSocket:action.webSocket
            }
        //用来处理 点击页面任何部分右上角菜单栏可以关闭
        case UPDATE_MENU:
            return{
                ...state,accountOpen:action.accountOpen
            }

        //用来标记页面跳转，当前content区域应该显示什么
        case UPDATE_PAGE:
            return{
                ...state,currentPage:action.currentPage
            }

        //用来标记当前用户是否是登录状态
        case UPDATE_LOGINSTATE:
            return{
                ...state,loginState:action.loginState
            }

        //添加当前未处理用户数目
        case UPDATE_REGISTERNUM:
            if(action.registerNum !== null){
                return{...state,registerNum:action.registerNum}
            }else{
                return{...state,registerNum:state.registerNum + 1}
            }

        //添加当前未处理用户信息
        case UPDATE_REGISTERARRAY:
            return{
                ...state, registerArray:[...state.registerArray,...action.registerArray]
            }

        //删除已处理的信息
        case DELETE_REGISTER:
            return{
                ...state,
                registerArray:[ ...state.registerArray.slice(0,action.begin),
                    ...state.registerArray.slice(action.begin+1)],
                registerNum: state.registerNum - 1
            }
        default:
            return state;
    }
}
export const updateMenuDispatch = (accountOpen)=>{
    return {type:UPDATE_MENU, accountOpen}
}
export const updatePageDispatch = (currentPage)=>{
    return {type:UPDATE_PAGE, currentPage}
}
export const updateLoginStateDispatch = (loginState)=>{
    return {type:UPDATE_LOGINSTATE, loginState}
}
export const updateRegisterNumDispatch = (registerNum)=>{
    return {type:UPDATE_REGISTERNUM, registerNum}
}
export const updateRegisterArrayDispatch = (registerArray)=>{
    return {type:UPDATE_REGISTERARRAY, registerArray}
}
export const initialStateDispatch = ()=>{
    return {type:INITIAL_STATE}
}
export const deleteRegisterDispatch = (begin)=>{
    return{type:DELETE_REGISTER, begin}
}
export const initialWebSocketDispatch = (webSocket)=>{
    return{type:INITIAL_WEBSOCKET,webSocket}
}