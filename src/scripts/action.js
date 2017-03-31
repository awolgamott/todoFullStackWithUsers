import STORE from './store'
import {TaskModel} from './models/taskModel'
import User from './models/userModel'

var ACTION = {
	//adding task to undone items
	recordNewTask: function(newTask){
		var user = User.getCurrentUser()


		var newTask = new TaskModel({ taskName: newTask, userId: user.get("_id") })
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
		var user = User.getCurrentUser()

		taskColl.fetch({data: {userId: user.get("_id")}})
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
	},
	registerUser: function(formData){
		User.register(formData)
			.done(
				function(response){
					ACTION.loginUser(formData.email, formData.password)
				}
			)
			.fail(
				function(error){
					console.log('error registering user', error)
					alert('error registering user')
				}
			)
	},
	loginUser: function(email, password){
		User.login(email, password)
			.done(
				function(response){
					location.hash = "all"
				}
			)
			.fail(
				function(error){
					console.log('error logging in user', error)
					alert('error logging in user')
				}
			)
	}
}

export default ACTION