import React, {Component} from 'react'
import './SideBarItem.css'
import SubSideBarItem from './Sub_SideBarItem'

export default class SideBarItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isOpen: false,
        }
    }
    handleClick(){
        this.setState((prevState)=>({
            isOpen: !prevState.isOpen
        }));
    }
    render() {
        const {content} = this.props;
        return (
            <div className={this.state.isOpen?"openBar":"closeBar"}>
                <div className="SideBarListItem" onClick={this.handleClick}>
                    <span>{content.text}</span>
                    <img src={content.imgUrl} alt=""/>
                </div>
                <div className={"Sub_SideBarList"}>
                    {content.sub_list.map((listItem,index)=>{
                        return <SubSideBarItem key={index} content={listItem}/>
                     }
                 )}
                </div>
            </div>
        )
    }

}