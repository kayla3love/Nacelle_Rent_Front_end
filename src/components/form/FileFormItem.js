import React, {Component} from 'react'
import './FileFormItem.css'

export default class FileFormItem extends Component{
    constructor(){
        super();
        this.state={value:''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }
    render(){
        const {title} = this.props;
        return(
            <div className="fileFormItem">
                <p>{title}</p>
                <input type="file" className="fileFormItem_fileInput" onChange={this.handleChange}/>
                <input type="text" className="fileFormItem_textInput" value={this.state.value}/>
                <button className="fileFormItem_button">选择文件</button>
            </div>
        )
    }
}