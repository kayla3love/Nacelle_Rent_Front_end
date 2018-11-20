import React, {Component} from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'
import './Content.css'
import {connect} from 'react-redux'
import Footer from '../../components/footer/Footer'
import {updateMenuDispatch} from "../../reducers/Reducer";
import CreateProject from '../webContent_createProject/CreateProject'
import CreateAdmin from '../webContent_createAdmin/CreateAdmin'
import ProjectView from '../webContent_project/ProjectView'
import {urlConfig} from "../../config/urlConfig";
import HTTPUtil from "../../utils/HTTPUtil";
import {Redirect} from 'react-router-dom';
import MessageBox from  '../../components/MessageBox'

class Content extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {isLogin: true, messageShow:"closed"};
    }
    handleClick(){
        this.props.onUpdateMenu(false);
    }
    componentDidMount(){
        let webAdminId = localStorage.getItem("webAdminId");
        HTTPUtil.get(urlConfig.webLoadUrl,{webAdminId: webAdminId})
            .then((data)=>{
                if(!data.isLogin){
                    this.setState({
                        messageShow: "message_box"
                    })
                    setTimeout(()=>{
                        this.setState({
                            messageShow: "closed",
                            isLogin: false
                        })
                    },1000)
                }
        })
    }
    render(){
        let content;
        switch (this.props.currentPage) {
            case "createProject":
                content = <CreateProject/>;
                break;
            case "createAdmin":
                content = <CreateAdmin/>;
                break;
            case "projectView":
                content = <ProjectView/>
                break;
            default: content=null
        }
        if(!this.state.isLogin) {
            return (<Redirect to="/"/>)
        }else{
            return(
                <div id="content" onClick={this.handleClick}>
                    <TopBar/>
                    <div id="main_content">
                        <SideBar/>
                        <div id="main">
                            {content}
                            <Footer/>
                        </div>
                    </div>
                    <div className={this.state.messageShow}>
                        <MessageBox messageContent="您还未登录，请先登陆"/>
                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = (state)=>{
    return{
        accountOpen: state.accountOpen,
        currentPage: state.currentPage
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onUpdateMenu:(accountOpen)=>{
            dispatch(updateMenuDispatch(accountOpen))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Content);