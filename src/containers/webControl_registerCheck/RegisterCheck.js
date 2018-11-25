import React, {Component} from 'react'
import RegisterCheckList from '../../components/webControl_registerCheck/RegisterCheckList'
import './RegisterCheck.css'

export default class RegisterCheck extends Component{
    render(){
        return(
            <div id="registerCheck_box">
               <RegisterCheckList registerCheckList={this.props.registerCheckList}/>
            </div>
        )
    }
}