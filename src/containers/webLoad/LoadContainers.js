import React, {Component} from 'react'
import personImg from '../../resources/person.png'
import lockImg from '../../resources/lock.png'
import arrow from '../../resources/arrow.png';
import './LoadContainers.css'
import {urlConfig} from '../../config/urlConfig'
import HTTPUtil from '../../utils/HTTPUtil'
import {Redirect} from 'react-router-dom'

export default class LoadContainers extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeRole = this.changeRole.bind(this);
        this.state = {
            webAdminId:'',
            webAdminPassword:'',
            isTrue: false,
            currentClass: "success",
            currentRole:0,
            subTitle:"管理员登录",
            propTitle:"切换至超级管理员",
        }
    }
    componentDidMount(){
        let webAdminId = localStorage.getItem("webAdminId");
        if(webAdminId !== null){
            HTTPUtil.get(urlConfig.webLoadUrl,{webAdminId: webAdminId})
                .then((data)=>{
                    if(data.isLogin=== true){
                        this.setState({
                            isTrue: true,
                        })
                    }
                })
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        let currentData = {
            webAdminId: this.state.webAdminId,
            webAdminPassword: this.state.webAdminPassword,
        }
        HTTPUtil.post(urlConfig.webLoadUrl,JSON.stringify(currentData)).then((data)=>{
            let isTrue = data.message === "true"
            this.setState({
                isTrue: isTrue,
                currentClass: data==="success"?"success":"wrong",
                webAdminPassword:'',
            });
            localStorage.setItem("webAdminId",this.state.webAdminId);
        }).catch(e=>{

        })
    }
    changeRole(){
        let flag = this.state.currentRole;
        this.setState({
            currentRole: flag === 1 ? 0 : 1,
            subTitle:flag?"管理员登录":"超级管理员登录",
            propTitle:flag?"切换至超级管理员":"切换至普通管理员",
            requestUrl:flag?urlConfig.commonLoadUrl:urlConfig.superLoadUrl,
        })
    }

    render(){
        if(this.state.isTrue){
            return(<Redirect to="/manager"/>)
        }else{
            return(
                <div className="load_body">
                <div className="register_container">
                    <h1>吊篮租赁系统管理平台</h1>
                    <div className="inner_container">
                        <div className="inner_header">
                            <h2>{this.state.subTitle}</h2>
                            <div className="third_title">
                                <div className="sub_title">
                                    <button onClick={this.changeRole}>{this.state.propTitle}</button>
                                    <img src={arrow} alt=""/>
                                </div>
                                <span className={this.state.currentClass}>用户名或密码错误</span>
                            </div>
                        </div>
                        <form className="register_box" onSubmit={this.handleSubmit}>
                            <div className="register_input">
                                <img src={personImg} alt=""/>
                                <input type="text" value={this.state.webAdminId} name="webAdminId"
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="register_input">
                                <img src={lockImg} alt=""/>
                                <input type="password" value={this.state.webAdminPassword} name="webAdminPassword"
                                       onChange={this.handleChange}/>
                            </div>
                            <button>登 录</button>
                        </form>
                    </div>
                </div>
                </div>
            )
        }
    }
}