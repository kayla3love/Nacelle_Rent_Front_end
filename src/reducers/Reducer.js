const UPDATE_MENU = 'UPDATE_MENU';
const UPDATE_PAGE = 'UPDATE_PAGE';
const UPDATE_LOGINSTATE = 'UPDATE_LOGINSTATE';
const UPDATE_REGISTERNUM = 'UPDATE_REGISTERNUM'

export default function(state, action){
    if(!state){
        return {accountOpen:false,currentPage:'',loginState:false, registerNum:0}
    }
    switch(action.type){
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
        case UPDATE_REGISTERNUM:
            if(action.registerNum !== null){
                return{...state,registerNum:action.registerNum}
            }else{
                return{...state,registerNum:state.registerNum + 1}
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