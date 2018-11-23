import React, {Component} from 'react'
import './SelectFormItem.css'

export default class SelectFormItem extends Component{
    render(){
        const {optionArray,title} = this.props;
        return(
            <div className="selectFormItem">
                <p>{title}</p>
                <select>
                    {optionArray.map((option)=>{
                        return <option id={option} value={option}>{option}</option>
                    })}
                </select>
            </div>
        )
    }
}