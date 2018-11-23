import React, {Component} from 'react'
import TopBarItem from './TopBarItem'
import './TopBarLists.css'
import {updateLoginStateDispatch, updateMenuDispatch} from "../../reducers/Reducer";
import {connect} from "react-redux";
import HTTPUtil from "../../utils/HTTPUtil";
import {urlConfig} from "../../config/urlConfig";

class TopBarLists extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        let funcId = e.target.getAttribute("id");
        if (funcId === "topBarListItem0") {
            //修改密码
        } else if (funcId === "topBarListItem1") {
            //退出登录
            HTTPUtil.get(urlConfig.quitLoad, {userId: localStorage.getItem("webAdminId")})
                .then((data) => {
                    if (data.hasOwnProperty("deleteCookieSuccess") && data.deleteCookieSuccess) {
                        localStorage.setItem("webAdminId",null)
                        this.props.onUpdateLoginState(false);
                    }
                })
        }

    }
    render(){
        const {lists,accountOpen} = this.props
        return(
            <div className={accountOpen?"funcList":"close"} onClick={this.handleClick}>
                {lists.map((listItem,index)=>
                    <TopBarItem key={index} content={listItem}/>
                )}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        accountOpen: state.accountOpen
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onUpdateMenu:(accountOpen)=>{
            dispatch(updateMenuDispatch(accountOpen))
        },
        onUpdateLoginState:(loginState)=>{
            dispatch(updateLoginStateDispatch(loginState))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopBarLists);