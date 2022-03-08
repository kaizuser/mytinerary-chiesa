import React from 'react'
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions.js'

class ApiData extends React.Component{
	state = {
		citiesArray:[]
	}

	componentDidMount(){
		if (this.props.cities.length < 1){
			this.props.fetchCities()
		}
	}


	render (){
		return(
			<>
			<div className='w-full m-4 flex min-w-3/4 flex justify-center items-center flex-wrap'>
			{this.props.cities.cities && this.props.cities.cities.map(city =>
				<div className="w-96 h-80 m-5 rounded overflow-hidden shadow-lg" key={city.name}>
				  <img className="w-full h-60 object-cover" src={city.src} alt="Sunset in the mountains"/>

				<Link to={`/cities/details/${city.name}`}>

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
}

const mapDispatchToProps = {
	fetchCities:citiesActions.fetchCities,
	filter:citiesActions.filterCities
}

const mapStateToProps = (state) => {
	return {
		cities:state.citiesReducer.cities,
		auxiliar:state.citiesReducer.auxiliar

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiData);


