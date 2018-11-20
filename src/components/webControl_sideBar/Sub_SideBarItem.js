import React, {Component} from 'react'
import './Sub_SideBarItem.css'
import PropTypes from 'prop-types';
import {updatePageDispatch} from "../../reducers/Reducer";
import {connect} from "react-redux";

class SubSideBarItem extends Component{
    static propTypes={
        content: PropTypes.object
    }
    constructor(){
        super();
        this.state={}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        const id= this.props.content.id;
        let currentPage;
        switch (id){
            case 1:
                currentPage = "createAdmin";
                break;
            case 2:
                currentPage = "projectView";
                break;
            default: currentPage=''
        }
        this.props.onUpdatePage(currentPage);
    }
    render() {
        const {title} = this.props.content;
        return (
            <div>
                <div className="SideBarListItem" onClick={this.handleClick}>
                    <span>->    {title}</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        //currentPage: state.currentPage
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onUpdatePage:(currentPage)=>{
            dispatch(updatePageDispatch(currentPage))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SubSideBarItem);