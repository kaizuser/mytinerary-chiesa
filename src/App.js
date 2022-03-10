import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Cities from './components/Cities'
import Home from './components/Home'
import CardDetails from './components/CardDetails'
import { connect } from 'react-redux'
import itinerariesActions from './redux/actions/itinerariesActions.js'
import citiesActions from './redux/actions/citiesActions.js'

class App extends React.Component {

	componentDidUpdate(){
		if(this.props.itineraries.length < 1){
			this.props.fetchCities()
			this.props.fetchItineraries()
		}
	}

	render () {
		return (
			<>
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/home' element={<Home/>}/>
					<Route path='/cities' element={<Cities/>}/>
					<Route path='/cities/details/:id' element={<CardDetails cities={this.props.cities} itineraries={this.props.itineraries}/>}/>
				</Routes>
				<Footer/>
			</BrowserRouter>
			</>
		  );
	}
}

const mapDispatchToProps = {
	fetchItineraries:itinerariesActions.fetchItineraries,
	fetchCities:citiesActions.fetchCities,
	filterCities:citiesActions.filterCities,

}

const mapStateToProps = (state) => {
	return {
		itineraries:state.itinerariesReducer.itineraries,
		auxiliar_it:state.itinerariesReducer.auxiliar_it,
		cities:state.citiesReducer.cities,
		auxiliar:state.citiesReducer.auxiliar,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
