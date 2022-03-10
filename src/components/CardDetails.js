import React from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux' 
import citiesActions from '../redux/actions/citiesActions.js'
import itinerariesActions from '../redux/actions/itinerariesActions.js'

class CardDetails extends React.Component{

	componentDidMount(){
		if (this.props.cities.length < 1){
			this.props.fetchCities()
			this.props.fetchItineraries()
		}
	}

	render(){
		return(
			<> 
			<div className='flex justify-center items-center'>

			</div>
			</>
		)
	}
}

const mapDispatchToProps = {
	fetchCities:citiesActions.fetchCities,
	filterCities:citiesActions.filterCities,
	fetchItineraries:itinerariesActions.fetchItineraries
}

const mapStateToProps = (state) => {
	return {
		cities:state.citiesReducer.cities,
		auxiliar:state.citiesReducer.auxiliar,
		itineraries:state.itinerariesReducer.itineraries,
		auxiliar_it:state.itinerariesReducer.auxiliar_it
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
