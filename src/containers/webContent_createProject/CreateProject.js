import React, {Component} from 'react'
import './CreateProject.css'
import FormItem from '../../components/form/FormItem'
import FileFormItem from '../../components/form/FileFormItem'
import PrintUtil from '../../utils/PrintUtil'
import UEditor from '../../utils/UEditUtil'
import contactConfig from "../../config/contactConfig";
import MessageBox from  '../../components/MessageBox'

export default class CreateProject extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state={messageShow:"closed"}
    }
    componentDidMount(){
        let contact_content = localStorage.getItem("contact_content")
        if(!contact_content){
            localStorage.setItem("contact_content",contactConfig)
        }
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
                    <div className="createProject_form">
                        <p className="createProject_title">新建项目</p>
                        <FormItem title="项目号" type="text"/>
                        <FileFormItem title="上传安监证书"/>
                        <FormItem title="项目号" type="text"/>
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
            </div>
        )
    }
}