import React from "react";
import List from './List.js';
import SubmitForm from "./SubmitForm.js";
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class TodoList extends React.Component{
    constructor(props){
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleApply = this.handleApply.bind(this);
    
    }
    state = {
        list: []
    }

    handleAdd(todo){
        this.setState({
            // list: [...this.state.list, todo],
            list: this.state.list.concat(todo)
        })
    }
    handleDelete(id){
        this.setState({
           list:this.state.list.filter(item => item.id !== id)
        });
    }

    handleApply(id){
  
      this.setState({
          isApply: !this.state.isApply,
    
      });

    
    }

    render(){
       const isApply = this.state.isApply;
       const icon = isApply ? <div><FontAwesomeIcon icon={faCheck}/></div> : null;

        return(
            <div>
                <h2>TodoList</h2>
                <SubmitForm handleAdd = {this.handleAdd} />
                <List list = {this.state.list} onDelete = {this.handleDelete} onApply = {this.handleApply} icon ={icon}/>
            </div>
        )
    }
}

export default TodoList;