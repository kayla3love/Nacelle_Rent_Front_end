import React, {Component} from 'react'
import {topBarList} from '../../config/listConfig'
import TopBarLists from '../../components/webControl_header/TopBarLists'
import headUrl from '../../resources/head.png'
import logoUrl from '../../resources/logo.png'
import alarmUrl from '../../resources/alarm.png'
import './TopBar.css'
import {updateMenuDispatch, updateRegisterNumDispatch} from "../../reducers/Reducer";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import HTTPUtil from "../../utils/HTTPUtil";
import {urlConfig} from "../../config/urlConfig";

class WebControl extends Component{
    constructor(){
        super();
        this.state = {loginState:true}
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        HTTPUtil.get(urlConfig.unCheckedNumUrl,{userId: localStorage.getItem("webAdminId")})
            .then((data)=>{
                if(data.isAllowed === true){
                    this.props.onUpdateRegisterNum(data.unChecked);
                }
            })
    }
    handleClick(e){
        if(this.props.loginState) {
            e.stopPropagation();
            let accountOpen = !this.props.accountOpen;
            this.props.onUpdateMenu(accountOpen);
        }else{
            this.setState({
                loginState: false
            })
        }
    }
    render(){
        const {loginState, registerNum} = this.props;
        if(!this.state.loginState){
            return (<Redirect to="/"/>)
        }else {
            return (
                <header id="topHeader">
                    <div id="logo">
                        <img src={logoUrl} alt=""/>
                    </div>
                    <div className="topInfo" >
                        <div className="topInfo_item"  onClick={this.handleClick}>
                            <img id="headImg" src={headUrl} alt="head"/>
                            <p>{localStorage.getItem("webAdminId")} {loginState ? "已登陆" : "未登录"}</p>
                        </div>
                        <div className="topInfo_item">
                            <img id="alarmImg" src={alarmUrl} alt="alarm"/>
                            <span className={registerNum > 0?"redPoint":"closed"}>{registerNum}</span>
                        </div>
                        <TopBarLists lists={topBarList.account}/>
                    </div>
                </header>
            )
        }
    }
}
const mapStateToProps = (state)=>{
    return{
        accountOpen: state.accountOpen,
        loginState: state.loginState,
        registerNum: state.registerNum
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onUpdateMenu:(accountOpen)=>{
            dispatch(updateMenuDispatch(accountOpen))
        },
        onUpdateRegisterNum:(registerNum)=>{
            dispatch(updateRegisterNumDispatch(registerNum))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WebControl);