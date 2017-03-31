import Backbone from 'backbone'
import $ from 'jquery'

var TaskModel = Backbone.Model.extend({
	urlRoot: '/api/tasks',
	idAttribute: '_id'
})

var TaskCollection = Backbone.Collection.extend({
	comparator: function(mod) {
		return new Date(mod.get('createdAt')).getTime() * -1
	},
	model: TaskModel,
	url: '/api/tasks'
})

module.exports = {
  TaskModel: TaskModel,
  TaskCollection: TaskCollection
}
