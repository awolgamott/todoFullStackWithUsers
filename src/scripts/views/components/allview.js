import React from 'react'
import STORE from '../../store'
import Backbone from 'backbone'
import ACTION from '../../action'
import Banner from './banner'
import NewTaskForm from './newtaskform'
import Task from './task'

var AllView = React.createClass({
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
		return (
			<div>
				<Banner />
				<NewTaskForm />
				<div className='list'>
					{
						this.state.taskCollection.models.map( (item) => {
							return <Task key={item.get('_id')} task={item} />
						})
					}	
				</div>
			</div>
		)
	}
})

export default AllView