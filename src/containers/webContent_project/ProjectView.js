import React, {Component} from 'react'
import './ProjectView.css'
import TableHead from '../../components/table/TableHead'
import TableItem from '../../components/table/TableItem'
import {tableItemList_project} from '../../config/listConfig'
import SearchTable from '../../components/table/SearchTable'

export default class ProjectView extends Component{
    constructor(){
        super();
        this.state = {listPage:0,searchId:'',currentTableItemList_project:tableItemList_project};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick(e){
        let value = e.target.value;
        let oldCurrentPage = this.state.listPage;
        let tableItemList_length = Math.ceil(this.state.currentTableItemList_project.length/10)-1;
        if(!((oldCurrentPage === 0 && value === "prev") || (oldCurrentPage === tableItemList_length && value === "next"))) {
            this.setState((prevState)=>({
                listPage: value === "prev"? --prevState.listPage:++prevState.listPage
            }));
        }
    }
    handleChange(value){
        let tempArray = [];
        if(value !== '') {
            for (let tableItem of tableItemList_project) {
                if (tableItem.id.indexOf(value) !== -1) {
                    tempArray.push(tableItem)
                }
            }
        }else tempArray = tableItemList_project
        this.setState({
            searchId:value,
            currentTableItemList_project:tempArray,
            listPage: 0
        });

    }
    render(){
        let start = this.state.listPage;
        let tableItemMaxList = this.state.currentTableItemList_project.slice(start*10,start*10+10);
        let tBody;
        tBody = tableItemMaxList.length === 0?(<p id="notFound">没有查到该项目</p>):(
                <tbody>
                {tableItemMaxList.map((tableItem)=>{
                    return <TableItem tableItem={tableItem} key={tableItem.id} prefix={`projectView${tableItem.id}`}/>
                })}
                </tbody>
        );
        return(
            <div id="projectView_box">
                <SearchTable onChange = {this.handleChange}/>
                <div className="projectView_table">
                    <table>
                        <TableHead tHead={["项目号","项目名称","当前状态","开始时间","结束时间"]}/>
                        {tBody}
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