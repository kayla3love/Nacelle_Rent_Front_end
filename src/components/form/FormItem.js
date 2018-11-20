import React, {Component} from 'react'
import './FormItem.css'

export default class FormItem extends Component{
    render(){
        const {title,type} = this.props;
        return(
            <div className="formItem">
                <p>{title}</p>
                <input type={type} />
            </div>
        )
    }
}