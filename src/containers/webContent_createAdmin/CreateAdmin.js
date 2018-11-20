import React, {Component} from 'react'
import './CreateAdmin.css'
import FormItem from '../../components/form/FormItem'
import TableHead from '../../components/table/TableHead'
import TableItem from '../../components/table/TableItem'
import {tableItemList_admin} from '../../config/listConfig'

const tableItemList_length = Math.ceil(tableItemList_admin.length/10)-1;

export default class CreateAdmin extends Component {
    constructor(){
        super();
        this.state = {listPage:0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let value = e.target.value;
        let oldCurrentPage = this.state.listPage;
        if(!((oldCurrentPage === 0 && value === "prev") || (oldCurrentPage === tableItemList_length && value === "next"))) {
            this.setState((prevState) => ({
                listPage: value === "prev" ? --prevState.listPage : ++prevState.listPage
            }));
        }
    }
    render(){
        let start = this.state.listPage;
        let tableItemMaxList = tableItemList_admin.slice(start*10,start*10+10);
        return(
            <div id="createAdmin_box">
                <div className="createAdmin_form">
                    <p className="createAdmin_title">新建管理员账户</p>
                    <FormItem title="账号" type="text"/>
                    <FormItem title="密码" type="password"/>
                    <div className="buttonGroup"> <button>提交</button></div>
                </div>
                <div className="createAdmin_form">
                    <p className="createProject_title">账户列表</p>
                    <table>
                        <TableHead tHead={["账号","密码"]}/>
                        <tbody>
                            {tableItemMaxList.map((tableItem)=>{
                                return <TableItem tableItem={tableItem} key={tableItem.id} prefix={`createAdmin${tableItem.id}`}/>
                            })}
                        </tbody>
                    </table>
                    <div className="buttonGroup centerGroup" onClick={this.handleClick}>
                        <button value="prev">上一页</button>
                        <button value="next">下一页</button>
                    </div>
                </div>
            </div>
        )
    }
}
