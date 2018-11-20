import React, {Component} from 'react'
import './TableItem.css'
import PropTypes from 'prop-types';

export default class TableItem extends Component{
    static propTypes={
        tableItem: PropTypes.object
    }
    render(){
        let {tableItem,prefix} = this.props;
        let tdArray = [];
        for(let item of Object.values(tableItem)){
            tdArray.push(<td key={`${prefix}${item}`}>{item}</td>)
        }
        return(
            <tr className="table_tr">
                {tdArray}
            </tr>
        )
    }
}