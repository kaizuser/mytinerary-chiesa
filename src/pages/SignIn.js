import {React, useState} from 'react'
import { connect } from 'react-redux';
import userActions from '../redux/actions/usersActions.js';
import { Link as LinkRouter } from 'react-router-dom';

import Snack from '../components/Snack.js'
import GoogleSignIn from '../components/GoogleSignIn.js'

function SignIn(props) {

        const [getEmail, setEmail] = useState('none')
        const [getPassword, setPassword] = useState('none')

	const handleSubmit = (event) => {

		const logedUser = {
			email: getEmail,
			password: getPassword,
			from: "form-Signup"
		}

		props.signInUser(logedUser)
	}

	return (
	    <>
	      <Snack/>
	      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-blue-500">
		<div className="max-w-md w-full space-y-8">
		  <div className='flex justify-center items-center flex-col'>
		    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
		  </div>
		  <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
		    <input type="hidden" name="remember" defaultValue="true" />
		    <div className="rounded-md shadow-sm -space-y-px">
		      <div>
			<label htmlFor="email-address" className="sr-only">
			  Email address
			</label>
			<input
			  id="email-address"
			  name="email"
			  type="email"
			  autoComplete="email"
			  required
			  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			  placeholder="Email address"
			  onChange={event => setEmail(event.target.value)}
			/>
		      </div>
		      <div>
			<label htmlFor="password" className="sr-only">
			  Password
			</label>
			<input
			  id="password"
			  name="password"
			  type="password"
			  autoComplete="current-password"
			  required
			  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			  placeholder="Password"
			  onChange={event => setPassword(event.target.value)}
			/>
		      </div>
		    </div>
		    <div>
		      <button
			type="button"
			className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			onClick={handleSubmit}
			
		      >
			<span className="absolute left-0 inset-y-0 flex items-center pl-3">
			</span>
			Sign in
		      </button>
		    </div>
		    <GoogleSignIn/>
		  </form>
		</div>
	      </div>
	    </>
	  )
}

const mapDispatchToProps = {
	signInUser: userActions.signInUser,
}

export default connect(null, mapDispatchToProps)(SignIn);
