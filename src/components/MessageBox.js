import React, {Component} from 'react'
import './MessageBox.css'
import checkUrl from '../resources/checked.png'
export default class MessageBox extends Component{
    render(){
        let {messageContent} = this.props;
        return(
            <div>
                <img src={checkUrl} alt="check_logo"/>
                <p>{messageContent}</p>
            </div>
        )
    }
}