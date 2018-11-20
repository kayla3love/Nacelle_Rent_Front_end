import React, {Component} from 'react'
import SideBarItem from './SideBarItem'
import './SideBarLists.css'
export default class SideBarLists extends Component{
    render(){
        const {lists} = this.props
        return(
            <div className="sideBarList">
                {lists.map((listItem,index)=>
                    <SideBarItem key={index} content={listItem}/>
                )}
            </div>
        )
    }
}