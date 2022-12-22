import React from "react";
import  {v4} from 'uuid';
import {faAd} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class SubmitForm extends React.Component{
    state = {
        value: ''
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }
    handleAddTodo(e){
        e.preventDefault();

        if(this.state.value){
           this.props.handleAdd({
            id: v4(),
            value: this.state.value
           })
           this.setState({
             value: ''
           })
        }
    }  
    render(){
        return(
            <form>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                <button type="submit" onClick={this.handleAddTodo.bind(this)}>
                    <FontAwesomeIcon icon={faAd}/>
                </button>
            </form>
        )
    }
}
export default SubmitForm;
