import React, {Component} from 'react'
import {topBarList} from '../../config/listConfig'
import TopBarLists from '../../components/webControl_header/TopBarLists'
import headUrl from '../../resources/head.png'
import logoUrl from '../../resources/logo.png'
import './TopBar.css'
import {updateMenuDispatch} from "../../reducers/Reducer";
import {connect} from "react-redux";

class WebControl extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.stopPropagation();
        let accountOpen = !this.props.accountOpen;
        this.props.onUpdateMenu(accountOpen);
    }
    render(){
        return(
            <header id="topHeader">
                <div id="logo">
                    <img src={logoUrl} alt=""/>
                </div>
                <div className="topInfo">
                    <div onClick={this.handleClick}>
                        <img id="headImg" src={headUrl} alt="head"/>
                        <span>admin</span>
                    </div>
                    <TopBarLists lists={topBarList.account}/>
                </div>
            </header>
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WebControl);