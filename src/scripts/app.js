import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import User from './models/userModel'
import LoginView from './views/components/loginview'
import AllView from './views/components/allview'
import DoneView from './views/components/doneview'
import UndoneView from './views/components/undoneview'

var app = function() {
	var ListRouter = Backbone.Router.extend({
		routes: {
			"all" : "handleAll",
			"done" : "handleDone",
			"undone" : "handleUndone",
			"login" : "handleLogin",
			"logout" : "handleLogout",
			"*other": "redirect"
		},
		handleAll : function(){
			var user = User.getCurrentUser()
			if (!user) {
				location.hash = 'login'
			} 
			else {
				ReactDOM.render(<AllView />,  document.querySelector('.container'))
			}
		},
		handleDone : function(){
			var user = User.getCurrentUser()
			if (!user) {
				location.hash = 'login'
			} 
			else {
				ReactDOM.render(<DoneView />,  document.querySelector('.container'))
			}
		},
		handleUndone : function(){
			var user = User.getCurrentUser()
			if (!user) {
				location.hash = 'login'
			} 
			else {
				ReactDOM.render(<UndoneView />,  document.querySelector('.container'))
			}
		},
		handleLogin: function(){
			ReactDOM.render(<LoginView />, document.querySelector('.container'))
		},
		handleLogout: function(){
			User.logout()
			location = "/"
		},
		redirect: function(){
			location.hash = "all"
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