import React from 'react'
import ACTION from '../../action'

var Task = React.createClass({

	handleClick: function(event){
		var task = this.props.task
		if (task.get('taskComplete') === true){
			ACTION.recordUndoneTask(task)
		} else {
			ACTION.recordDoneTask(task)
		}
	},

	handleDeleteTask: function(event){
		var task = this.props.task
		ACTION.recordDeleteTask(task)
	},

	render: function(){

		return (
			<div className="task"> 
				<label>
					<input type="checkbox"
							onChange={ this.handleClick }
							checked={this.props.task.get('taskComplete')}
							value={this.props.task.get('_id')}
							/>
					{this.props.task.get('taskName')}
				</label>

				<span className="glyphicon glyphicon-trash" onClick={this.handleDeleteTask }></span>
			</div>
		)
	}
})

export default Task;