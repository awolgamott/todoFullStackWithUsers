import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import AllView from './views/components/allview'
import DoneView from './views/components/doneview'
import UndoneView from './views/components/undoneview'

var app = function() {
	var ListRouter = Backbone.Router.extend({
		routes: {
			"all" : "handleAll",
			"done" : "handleDone",
			"undone" : "handleUndone",
			"*other": "redirect"
		},
		handleAll : function(){
			ReactDOM.render(<AllView />,  document.querySelector('.container'))
		},
		handleDone : function(){
			ReactDOM.render(<DoneView />,  document.querySelector('.container'))
		},
		handleUndone : function(){
			ReactDOM.render(<UndoneView />,  document.querySelector('.container'))
		},
		redirect: function() {
			location.hash = 'all'
		}
	})
	new ListRouter ()
	Backbone.history.start()
 
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..