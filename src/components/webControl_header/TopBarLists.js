import React, {Component} from 'react'
import TopBarItem from './TopBarItem'
import './TopBarLists.css'
import {updateMenuDispatch} from "../../reducers/Reducer";
import {connect} from "react-redux";

class TopBarLists extends Component{
    render(){
        const {lists,accountOpen} = this.props
        return(
            <div className={accountOpen?"funcList":"close"}>
                {lists.map((listItem,index)=>
                    <TopBarItem key={index} content={listItem}/>
                )}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        accountOpen: state.accountOpen
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onUpdateMenu:(accountOpen)=>{
            dispatch(updateMenuDispatch(accountOpen))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopBarLists);