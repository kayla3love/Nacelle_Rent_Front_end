import React, {Component} from 'react'
import './RegisterCheckItem.css'
import identification from '../../resources/identification.png';
import photo from '../../resources/person.png';
import phone from '../../resources/phone.png';

export default class RegisterCheckItem extends Component{
    render(){
        let{userName, userPhone, userImg, userId} = this.props.userInfo;
        return(
            <div className="registerCheckItem">
                <div className="registerCheckInnerItem">
                    <img src={identification} alt="用户名"/>
                    <p>用户名:</p>
                    <p>{userName}</p>
                </div>
                <div className="registerCheckInnerItem">
                    <img src={phone} alt="电话号码"/>
                    <p>电话:</p>
                    <p>{userPhone}</p>
                </div>
                <div className="registerCheckInnerItem">
                    <img src={photo} alt="身份证照片"/>
                    <p>证件照:</p>
                    <p>{userImg}</p>
                </div>
                <div className="buttonGroup">
                    <button value={`pass_${userId}`}>通过</button>
                    <button value={`refuse_${userId}`}>拒绝</button>
                </div>
            </div>
        )
    }
}