import Backbone from 'backbone'
import {TaskCollection} from './models/taskModel.js'
	
var STORE = Object.assign({},Backbone.Events,{
	data: {
		taskCollection: new TaskCollection() 
	},

	set: function(obj){
		this.data = Object.assign(this.data,obj)
		this.trigger('dataUpdated')
	}
})
export default STORE