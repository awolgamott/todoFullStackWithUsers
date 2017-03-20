
import STORE from './store'

var ACTION = {
	//adding task to undone items
	recordNewTask: function(newTask){
		var currentItems = STORE.data.undoneItems
		currentItems.push(newTask)
		STORE.set({
			undoneItems: currentItems
			})
	},
	//move task from done to undone
	recordDoneTask: function(doneTask){
		var doneItems = STORE.data.doneItems
		doneItems.push(doneTask)
		STORE.set({
			doneItems: doneItems
		})

		// remove from the undoneItems
		var undoneItems = STORE.data.undoneItems
		undoneItems = undoneItems.filter(function(task){
			return task !== doneTask
		})
		STORE.set({
			undoneItems: undoneItems
		})
	},
	//move task from undone to done
	recordUnDoneTask: function(unDoneTask){
		var unDoneItems = STORE.data.undoneItems
		unDoneItems.push(unDoneTask)
		STORE.set({
			undoneItems: unDoneItems
		})

		// remove from the doneItems
		var doneItems = STORE.data.doneItems
		doneItems = doneItems.filter(function(task){
			return task !== unDoneTask
		})
		STORE.set({
			doneItems: doneItems
		})
	}

}
export default ACTION