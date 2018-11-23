import React, {Component} from 'react'
import './CreateProject.css'
import FormItem from '../../components/form/FormItem'
import SelectFormItem from '../../components/form/SelectFormItem'
import PrintUtil from '../../utils/PrintUtil'
import UEditor from '../../utils/UEditUtil'
import contactConfig from "../../config/contactConfig";
import MessageBox from  '../../components/MessageBox';
import HTTPUtil from '../../utils/HTTPUtil'
import {urlConfig} from '../../config/urlConfig'
import {connect} from "react-redux";
import {updateLoginStateDispatch} from "../../reducers/Reducer";

class CreateProject extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state={
            messageShow:"closed",
            loginMessageShow:"closed",
            optionArray:[],
        }
    }
    componentDidMount(){
        let contact_content = localStorage.getItem("contact_content")
        if(!contact_content){
            localStorage.setItem("contact_content",contactConfig)
        }
        //页面加载完毕后获取后台传来的区域负责人列表清单
        HTTPUtil.get(urlConfig.loadAreaList,{userId: localStorage.getItem("webAdminId")})
            .then((data)=>{
                if(data.isLogin === false){
                    this.setState({
                        loginMessageShow: "message_box"
                    })
                    setTimeout(()=>{
                        this.setState({
                            loginMessageShow: "closed"
                        });
                        this.props.onUpdateLoginState(false);
                    },1000)
                }else{
                    let optionArray = data.resultList;
                    optionArray = optionArray.map((option)=>{
                        return option.userName
                    })
                    this.setState({
                        optionArray:optionArray
                    })
                }
            }).catch((data)=>{
            console.log(data)
            })
    }
    handleClick(e){
        let contact_editor = window.UE.getEditor('myEditor');
        let contact_content = contact_editor.getContent();
        if(e.target.value === "contact_print"){
            PrintUtil.printContent(contact_content)
        }else{
            localStorage.setItem("contact_content",contact_content);
            this.setState({
                messageShow: "message_box"
            })
            setTimeout(()=>{
                this.setState({
                    messageShow: "closed"
                })
            },500)
        }
    }
    render(){
        return(
            <div id="createProject">
                <div id="createProject_box">
                    <input type="file" id="diyimg"/>
                    <div className="createProject_form">
                        <p className="createProject_title">新建项目</p>
                        <FormItem title="项目号" type="text"/>
                        <SelectFormItem title="区域负责人"optionArray={this.state.optionArray}/>
                        <p className="createProject_title">电子合同</p>
                        <div className="UEditor"><UEditor id="myEditor" width="1080px"/></div>
                        <div className="buttonGroup" onClick={this.handleClick}>
                            <button value="contact_save">保存</button>
                            <button value="contact_print">打印</button>
                        </div>
                    </div>
                </div>
                <div className={this.state.messageShow}>
                    <MessageBox messageContent="草稿已保存"/>
                </div>
                <div className={this.state.loginMessageShow}>
                    <MessageBox messageContent="请求超时，请重新登录"/>
                </div>
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
        onUpdateLoginState:(loginState)=>{
            dispatch(updateLoginStateDispatch(loginState))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);