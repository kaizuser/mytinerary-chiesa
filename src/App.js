import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {withRouter} from './utils/withRouter.js'
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Cities from './pages/Cities'
import Home from './pages/Home'
import CardDetails from './components/CardDetails'

const Element = withRouter(CardDetails)

export default function App(){
	return (
		<>
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/home' element={<Home/>}/>
				<Route path='/cities' element={<Cities/>}/>
				<Route path='/cities/details/:id' element={<Element/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
		</>
	  );
}
