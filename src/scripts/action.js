import STORE from './store'
import {TaskModel} from './models/taskModel'

var ACTION = {
	//adding task to undone items
	recordNewTask: function(newTask){

		var newTask = new TaskModel({ taskName: newTask })
		newTask.save().then(
			function(response){
				ACTION.fetchTasks()
			}) ,
			function(error){
				alert("problem saving your task")
			}
	},
	fetchTasks: function(){
		var taskColl = STORE.data.taskCollection

		taskColl.fetch()
			.then(function() {
				STORE.set({
					taskCollection: taskColl
				})
			})
	},
	recordDoneTask: function(task){
		task.set('taskComplete', true)
		task.save().then(
			function(response){
				ACTION.fetchTasks()
			} ,
			function(error){
				alert("problem saving your task")
			}
		)
	},
	recordUndoneTask: function(task){
		task.set('taskComplete', false)
		task.save().then(
			function(response){
				ACTION.fetchTasks()
			} ,
			function(error){
				alert("problem saving your task")
			}
		)
	},

	recordDeleteTask: function(task){
		task.destroy().then(
			function(response){
				ACTION.fetchTasks()
			} ,
			function(error){
				alert("problem deleting your task")
			}
		)
	}

}
export default ACTION