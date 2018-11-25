import React, {Component} from 'react'
import './RegisterCheckList.css'
import PropTypes from 'prop-types';
import RegisterCheckItem from './RegisterCheckItem'
import {connect} from "react-redux";
import {deleteRegisterDispatch} from "../../reducers/Reducer";

class RegisterCheckList extends Component{
    static propTypes={
        registerCheckList: PropTypes.array,
        registerArray: PropTypes.array,
        onDeleteRegisterDispatch: PropTypes.func

    }
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let value = e.target.value;
        if(value !== undefined){
            let result = value.split("_")[0]; //pass or refuse
            let userId = value.slice(result.length+1);
            let {registerArray, onDeleteRegisterDispatch}= this.props;
            let begin = 0;
            for(let [index,registerItem] of registerArray.entries()){
                if(registerItem.userId === userId){
                    begin = index;
                    break;
                }
            }
            let sendMessage={
                userId: userId,
                handleResult: result
            }
            this.props.webSocket.send(JSON.stringify(sendMessage));
            onDeleteRegisterDispatch(begin);
        }
    }
    render(){
        let {registerCheckList} = this.props;
        return(
            <div className="registerCheckList"  onClick={this.handleClick}>
                {registerCheckList.map((registerCheckItem)=>
                    <RegisterCheckItem key={registerCheckItem.userId} userInfo={registerCheckItem}/>
                )}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        registerArray: state.registerArray,
        webSocket: state.webSocket
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onDeleteRegisterDispatch:(begin)=>{
            dispatch(deleteRegisterDispatch(begin))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterCheckList);