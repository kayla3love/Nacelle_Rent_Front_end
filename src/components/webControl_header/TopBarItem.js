import React, {Component} from 'react'
import './TopBarItem.css'
import {urlConfig} from '../../config/urlConfig'
import HTTPUtil from '../../utils/HTTPUtil'
import {updateLoginStateDispatch} from "../../reducers/Reducer";
import {connect} from "react-redux";

class TopBarItem extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let funcId = this.props.content.funcId;
        if(funcId === "0"){
            //修改密码
        }else if(funcId ==="1"){
            //退出登录
            HTTPUtil.get(urlConfig.quitLoad,{webAdminId:localStorage.getItem("webAdminId")})
                .then((data)=>{
                    if(data.hasOwnProperty("deleteCookieSuccess") && data.deleteCookieSuccess){
                        this.props.onUpdateLoginState(false);
                    }
                })
        }
    }
    render(){
        const {content} = this.props;
        return(
            <div className="topBarListItem" onClick={this.handleClick}>
                <img src={content.imgUrl} alt=""/>
                <span>{content.text}</span>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        loginState: state.loginState
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onUpdateLoginState:(loginState)=>{
            dispatch(updateLoginStateDispatch(loginState))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopBarItem);