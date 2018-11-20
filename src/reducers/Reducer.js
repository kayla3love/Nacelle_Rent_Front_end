const UPDATE_MENU = 'UPDATE_MENU';
const UPDATE_PAGE = 'UPDATE_PAGE';

export default function(state, action){
    if(!state){
        return {accountOpen:false,currentPage:''}
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