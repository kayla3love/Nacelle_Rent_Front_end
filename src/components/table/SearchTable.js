import React, {Component} from 'react'
import './SearchTable.css'

export default class SearchTable extends Component{
    constructor(){
        super();
        this.ref = React.createRef();
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onChange(e.target.value)
    }
    componentDidMount(){
        this.ref.current.focus();
    }
    render(){
        return(
            <div className="searchTable">
                <input type="text" placeholder="请输入项目号" ref={this.ref} onChange={this.handleChange}/>
                <button id="searchButton">搜 索</button>
            </div>
        )
    }
}
