import React, {Component} from 'react'
import SideBarLists from "../../components/webControl_sideBar/SideBarLists";
import {sideBarList} from '../../config/listConfig'
import './SideBar.css'
import {updatePageDispatch} from "../../reducers/Reducer";
import {connect} from "react-redux";

class SideBar extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.onUpdatePage("createProject");
    }
    render(){
        return(
            <div id="sideBar">
                <SideBarLists lists={sideBarList.default}/>
                <div id="createProject">
                    <button id="createProject_button" onClick={this.handleClick}>新建项目</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        currentPage: state.currentPage
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onUpdatePage:(currentPage)=>{
            dispatch(updatePageDispatch(currentPage))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SideBar);