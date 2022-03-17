import React from 'react'
import {connect} from 'react-redux'

class CardDetails extends React.Component{
	constructor(props){
		super()
	}

	state = {city:{}, itineraries:[]}

	componentDidMount(){
		this.setState({city:this.props.cities.find(city => city._id === this.props.params.id), itineraries:this.props.itineraries.filter(itinerary => itinerary.city === this.props.params.id)})
	}

	render(){
		if (this.state.itineraries.length == 0){
			return(
				<>
				<div className='w-full min-h-screen flex justify-start items-center flex-col'>
					<div className="w-4/5 h-80 m-5 rounded overflow-hidden shadow-lg">
						<img className="w-full h-60 object-cover" src={this.state.city.src} alt="Sunset in the mountains"/>


						<div className="w-full min-h-20 flex justify-center items-center flex-col flex-wrap hover:bg-blue-500 transition duration-300 ease-in cursor-pointer">
						<div className="font-bold text-xl mb-2 object-cover">{this.state.city.name}
						</div>

						<h1>{this.state.city.description}</h1>

						</div>
					</div>

					<div className='flex justify-center w-3/4 bg-red-500 h-60 rounded-lg items-center font-bold'>No itineraries yet :(</div>

				</div>
				</>
			)

		}
		return(
			<> 
			<div className='w-full min-h-screen flex justify-start items-center flex-col'>
				<div className="w-4/5 h-80 m-5 rounded overflow-hidden shadow-lg">
					<img className="w-full h-60 object-cover" src={this.state.city.src} alt="Sunset in the mountains"/>


					<div className="w-full h-20 flex justify-center items-center flex-col hover:bg-blue-500 transition duration-300 ease-in cursor-pointer">
						<div className="font-bold text-xl mb-2 object-cover">{this.state.city.name}
						</div>

						<div className='flex justify-around items-center w-full'>
							<h1>{this.state.city.description}</h1>
						</div>


					</div>
				</div>

				{this.state.itineraries && this.state.itineraries.map(item => 
				<div className='itinerary-container m-5 bg-blue-500 w-3/5 h-80 rounded-full flex justify-around items-center' key={item._id}>
					<img src={item.photo} className='h-28 w-28 rounded-full object-cover'/>
					<div className='flex justify-around items-center flex-col h-full text-white font-bold'>
						<div>
							<h1>Duration: {item.duration} HS</h1>
						</div>

						<div className='flex justify-center items-center flex-wrap'>
							{item.hashtags.map(hashtag => 
							<h1 className='mx-1 my-5' key={hashtag}>#{hashtag}</h1>
							)}
							<h1 className='mx-3'>{item.likes} likes</h1>
						</div>
					</div>

					<div id='expand-btn' className='w-40 h-20 bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-red transition duration-300 ease-in'>
						<h1 className='un_1'>View More</h1>
						<h1 className='un_2 hidden'>Under construction</h1>
					</div>

				</div>
				)
				}


			</div>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cities:state.citiesReducer.cities,
		auxiliar:state.citiesReducer.auxiliar,
		itineraries:state.itinerariesReducer.itineraries,
		auxiliar_it:state.itinerariesReducer.auxiliar_it
	}
}

export default connect(mapStateToProps)(CardDetails);
