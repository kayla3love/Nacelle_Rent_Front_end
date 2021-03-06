import React, {Component} from 'react'
import './Content.css'
import {connect} from 'react-redux'
import Footer from '../../components/footer/Footer'
import {updateMenuDispatch} from "../../reducers/Reducer";
import TopBar from './TopBar'
import SideBar from './SideBar'
import CreateProject from '../webContent_createProject/CreateProject'
import CreateAdmin from '../webContent_createAdmin/CreateAdmin'
import ProjectView from '../webContent_project/ProjectView'
import RegisterCheckList from '../webControl_registerCheck/RegisterCheck'
import {Redirect} from 'react-router-dom';
import MessageBox from  '../../components/MessageBox'

class Content extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {messageShow:"closed"};
    }
    handleClick(){
        this.props.onUpdateMenu(false);
    }
    componentDidMount(){
        // let webAdminId = localStorage.getItem("webAdminId");
        // HTTPUtil.get(urlConfig.webLoadUrl,{webAdminId: webAdminId})
        //     .then((data)=>{
        //         if(!data.isLogin){
        //             this.setState({
        //                 messageShow: "message_box"
        //             })
        //             setTimeout(()=>{
        //                 this.setState({
        //                     messageShow: "closed",
        //                 })
        //             },1000)
        //         }
        // })
    }
    render(){
        let content;
        let {currentPage, registerArray} = this.props;
        switch (currentPage) {
            case "createProject":
                content = <CreateProject/>;
                break;
            case "createAdmin":
                content = <CreateAdmin/>;
                break;
            case "projectView":
                content = <ProjectView/>
                break;
            case "registerCheck":
                content = <RegisterCheckList registerCheckList={registerArray}/>
                break;
            default: content=null
        }
        if(!this.props.loginState) {
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
        currentPage: state.currentPage,
        loginState: state.loginState,
        registerArray: state.registerArray
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onUpdateMenu:(accountOpen)=>{
            dispatch(updateMenuDispatch(accountOpen))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Content);