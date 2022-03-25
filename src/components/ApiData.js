import React from 'react'
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions.js'
import itinerariesActions from '../redux/actions/itinerariesActions.js'
import activitiesActions from '../redux/actions/activitiesActions.js'
import Filter from './Filter.js'

class ApiData extends React.Component{
	state = {
		citiesArray:[]
	}

	componentDidMount(){
		if (this.props.cities.length < 1){
			this.props.fetchCities()
			this.props.fetchActivities()
			this.props.fetchItineraries()
		}
	}

	render (){
		if (this.props.cities.length >= 1){
			return(
				<>
				<Filter cities={this.props.auxiliar} filter={this.props.filterCities}/>

				<div className='w-full m-4 flex justify-center items-center flex-wrap'>
				{this.props.cities && this.props.cities.map(city =>
					<div className="w-96 h-80 m-5 rounded overflow-hidden shadow-lg" key={city.name}>
					  <img className="w-full h-60 object-cover" src={city.src} alt="Sunset in the mountains"/>

					<Link to={`/cities/details/${city._id}`}>

						<div className="w-full h-20 flex justify-center items-center hover:bg-blue-500 transition duration-300 ease-in">
						  <div className="font-bold text-xl mb-2 object-cover">{city.name}
					    </div>
					
					   </div>
					</Link>
					</div>
					)

				}
				</div>
				</>
			)
		}
		else {
			return(
				<>
					<Filter cities={this.props.auxiliar} filter={this.props.filterCities}/>
					<div className='w-full h-96 bg-red-300 hover:bg-blue-300 transition duration-300 ease-in flex justify-center items-center mt-5'>
						<h1 className='text-4xl'>No cities found</h1>
					</div>

				</>
			)
		}
	}
}

const mapDispatchToProps = {
	fetchCities:citiesActions.fetchCities,
	fetchItineraries:itinerariesActions.fetchItineraries,
	fetchActivities:activitiesActions.fetchActivities,
	filterCities:citiesActions.filterCities,
}

const mapStateToProps = (state) => {
	return {
		cities:state.citiesReducer.cities,
		auxiliar:state.citiesReducer.auxiliar,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiData);
