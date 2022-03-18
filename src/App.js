import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {withRouter} from './utils/withRouter.js'
import {React, useEffect} from 'react'

import Cities from './pages/Cities'
import Home from './pages/Home'
import SignIn from './pages/SignIn.js'
import LogUp from './pages/LogUp.js'

import Footer from './components/Footer'
import Header from './components/Header'
import CardDetails from './components/CardDetails'

import usersActions from './redux/actions/usersActions';
import { connect } from 'react-redux';



const Element = withRouter(CardDetails)

function App(props){

	 
	useEffect(() => {
	    if(localStorage.getItem('token')!== null){
	      const token = localStorage.getItem("token")
	      props.VerificarToken(token)
	    }
	},[])

	return (
		<>
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/home' element={<Home/>}/>
				<Route path='/cities' element={<Cities/>}/>
				<Route path='/signIn' element={<SignIn/>}/>
				<Route path='/logUp' element={<LogUp/>} />

				<Route path='/cities/details/:id' element={<Element/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
		</>
	  );
}

const mapDispatchToProps = {
	VerificarToken: usersActions.VerificarToken,

}

export default connect(null, mapDispatchToProps)(App);
