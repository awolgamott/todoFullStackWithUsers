import Backbone from 'backbone'

var STORE = Object.assign({},Backbone.Events,{
	data: {
		doneItems: [],
		undoneItems: []
	},

	set: function(obj){
		this.data = Object.assign(this.data,obj)
		this.trigger('dataUpdated')
	}
})
export default STORE