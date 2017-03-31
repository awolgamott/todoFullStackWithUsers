import React from 'react'

import ACTION from '../../action.js'
import Banner from './banner'

var LoginView = React.createClass({
	render(){
		return (
			<div>
				<h1>TooMuch ToDo</h1>


				<div className="signin-forms">
					<RegisterForm />
					<LoginForm />
				</div>
			</div>
		)
	}
})

var LoginForm = React.createClass({
	_handleSubmit(eventObj){
		eventObj.preventDefault()
		var formEl = eventObj.target
		var email = formEl.email.value
		var password = formEl.password.value

		formEl.reset()
		ACTION.loginUser(email, password)
	},
	render(){
		return(
			<div className='form-wrapper login-form'>
				<h2>Login Form</h2>
				<form onSubmit={this._handleSubmit}>
					<input type='text' name='email' placeholder='Enter Email' className="form-control"/>
					<input type='password' name='password' placeholder='Enter Password' className="form-control"/>
					<button type='submit' className="btn btn-primary">Login</button> 
				</form>
			</div>
		)
	}
})

var RegisterForm = React.createClass({
	_handleSubmit(eventObj){
		eventObj.preventDefault()
		var formEl = eventObj.target
		var formData = {
			name: formEl.username.value,
			email: formEl.email.value,
			password: formEl.password.value
		}
		formEl.reset()
		ACTION.registerUser(formData)
	},

	render(){
		return(
			<div className='form-wrapper register-form'>
				<h2>Register Form</h2>
				<form onSubmit={this._handleSubmit}>
					<input type='text' name='username' placeholder='Enter User Name' className="form-control"/>
					<input type='text' name='email' placeholder='Enter Email' className="form-control"/>
					<input type='password' name='password' placeholder='Create Password' className="form-control"/>
					<button type='submit' className="btn btn-primary">Register</button> 
				</form>
			</div>
		)
	}
})

export default LoginView