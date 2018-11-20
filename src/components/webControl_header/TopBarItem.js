import React, {Component} from 'react'
import './TopBarItem.css'
export default class TopBarItem extends Component{
    render(){
        const {content} = this.props;
        return(
            <div className="topBarListItem">
                <img src={content.imgUrl} alt=""/>
                <span>{content.text}</span>
            </div>
        )
    }
}