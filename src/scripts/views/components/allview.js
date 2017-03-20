import React from 'react'
import STORE from '../../store'
import Backbone from 'backbone'
import ACTION from '../../action'
import Banner from './banner'
import NewTaskForm from './newtaskform'

var AllView = React.createClass({
	componentWillMount: function(){
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	componentWillUnmount: function(){
		STORE.off('dataUpdated')
	},

	handleClickOnUnDone: function(event){
		ACTION.recordDoneTask(event.target.value);
	},

	handleClickOnDone: function(event){
		ACTION.recordUnDoneTask(event.target.value);
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

					{this.state.undoneItems.map( (item) => {
						return <div key={item}> 
							<input type="checkbox"
										onChange={this.handleClickOnUnDone}
										value={item}
										/>
									{item}
							</div>
						})
					}

					{this.state.doneItems.map( (item) => {
						return <div key={item}> 
							<input type="checkbox"
										onChange={this.handleClickOnDone}
										checked="true"
										value={item}
										/>
									{item}
							</div>
						})
					}
					
					
				</div>
			</div>
		)
	}
})

export default AllView