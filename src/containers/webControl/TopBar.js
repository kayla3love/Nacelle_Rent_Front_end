import React, {Component} from 'react'
import {topBarList} from '../../config/listConfig'
import TopBarLists from '../../components/webControl_header/TopBarLists'
import headUrl from '../../resources/head.png'
import logoUrl from '../../resources/logo.png'
import './TopBar.css'
import {updateMenuDispatch} from "../../reducers/Reducer";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

class WebControl extends Component{
    constructor(){
        super();
        this.state = {loginState:true}
        this.handleClick = this.handleClick.bind(this);
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
        if(!this.state.loginState){
            return (<Redirect to="/"/>)
        }else {
            return (
                <header id="topHeader">
                    <div id="logo">
                        <img src={logoUrl} alt=""/>
                    </div>
                    <div className="topInfo">
                        <div onClick={this.handleClick}>
                            <img id="headImg" src={headUrl} alt="head"/>
                            <span>{localStorage.getItem("webAdminId")} {this.props.loginState ? "已登陆" : "未登录"}</span>
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
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onUpdateMenu:(accountOpen)=>{
            dispatch(updateMenuDispatch(accountOpen))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WebControl);