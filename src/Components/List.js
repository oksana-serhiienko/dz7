import React, { Component } from 'react'
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faStopCircle} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/List.scss';

export default class List extends Component {
  render() {
    return (
      <ul>
         {this.props.list.map(item => {
            const {id, value, icon} = item;
            return(
                <li key={id}>
                    <div className="text">
                      {icon}
                      {value}
                    </div>
                    <div className="buttons">
                      <button onClick={() => this.props.onDelete(id)}>
                          <FontAwesomeIcon icon={faTrash}/>
                      </button>
                      <button onClick = {() => this.props.onApply(id)}>
                          <FontAwesomeIcon icon={faStopCircle}/>
                      </button>
                    </div>
                </li>
            )
         })}
      </ul>
    )
  }
}
