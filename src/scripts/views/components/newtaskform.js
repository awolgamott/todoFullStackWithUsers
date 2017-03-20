import React from 'react';
import ACTION from '../../action'

var NewTaskForm = React.createClass({

	handleNewTaskInput: function(event){
    	if (event.keyCode === 13) {
        	ACTION.recordNewTask(event.target.value)
        	event.target.value = ''
  		}
	},

	render: function(){
		return(
			<input className="form-control" 
							type="text" 
							placeholder="list your stuff" 
							onKeyDown={this.handleNewTaskInput}/>
		)
	}
})

export default NewTaskForm