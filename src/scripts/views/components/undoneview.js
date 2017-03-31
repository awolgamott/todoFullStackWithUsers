import React from 'react'
import STORE from '../../store'
import Backbone from 'backbone'
import ACTION from '../../action'
import Banner from './banner'
import NewTaskForm from './newtaskform'
import Task from './task'

var UndoneView = React.createClass({
	componentWillMount: function(){
		ACTION.fetchTasks()
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	componentWillUnmount: function(){
		STORE.off('dataUpdated')
	},

	getInitialState: function(){
		return STORE.data // get latest data
	},
	render: function(){	

		var tasks = this.state.taskCollection.models;
		var undoneTasks = tasks.filter( (function(task){
			return task.get("taskComplete") === false;
		}))
		return (
			<div>
				<Banner />
				<NewTaskForm />
				<div className='list'>
					{
						undoneTasks.map( (item) => {
							return <Task key={item.get('_id')} task={item} />
						})
					}	
				</div>
			</div>
		)
	}
})

export default UndoneView