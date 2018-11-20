import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class TableItem extends Component{
    static propTypes={
        tHead: PropTypes.array
    }
    render(){
        let {tHead} = this.props;
        return(
            <thead>
                <tr>
                    {tHead.map((th,index)=>{
                        return <th key={index}>{th}</th>
                    })}
                </tr>
            </thead>
        )
    }
}