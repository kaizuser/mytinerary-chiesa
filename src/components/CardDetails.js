import React from 'react'
import {connect} from 'react-redux'

class CardDetails extends React.Component{
	constructor(props){
		super()
	}

	state = {city:{}, itineraries:[], activities:[]}

	componentDidMount(){
		this.setState({city:this.props.cities.find(city => city._id === this.props.params.id), itineraries:this.props.itineraries.filter(itinerary => itinerary.city === this.props.params.id), activities:this.props.activities})
	}

	render(){
		if (this.state.itineraries.length == 0){
			return(
				<>
				<div className='w-full min-h-screen flex justify-start items-center flex-col'>

					<div className="w-4/5 min-h-80 m-5 rounded overflow-hidden shadow-lg">
						<img className="w-full h-60 object-cover" src={this.state.city.src} alt="Sunset in the mountains"/>


						<div className="w-full min-h-40 flex justify-center items-center flex-col hover:bg-blue-500 transition duration-300 ease-in cursor-pointer">
							<div className="font-bold text-xl mb-2 object-cover">{this.state.city.name}
							</div>

							<div className='flex justify-around items-center w-full m-2 text-center'>
								<h1>{this.state.city.description}</h1>
							</div>


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
				<div className="w-4/5 min-h-80 m-5 rounded overflow-hidden shadow-lg">
					<img className="w-full h-60 object-cover" src={this.state.city.src} alt="Sunset in the mountains"/>


					<div className="w-full min-h-40 flex justify-center items-center flex-col hover:bg-blue-500 transition duration-300 ease-in cursor-pointer">
						<div className="font-bold text-xl mb-2 object-cover">{this.state.city.name}
						</div>

						<div className='flex justify-around items-center w-full m-2 text-center'>
							<h1>{this.state.city.description}</h1>
						</div>


					</div>
				</div>

				{this.state.itineraries && this.state.itineraries.map(item => 
				<div key={item._id} className='flex justify-center items-center flex-col w-full'>
				<div className='itinerary-container m-5 bg-blue-500 w-3/5 min-h-80 rounded-full flex justify-around items-center'>
					<img src={item.photo} className='h-28 w-28 rounded-full object-cover'/>
					<div className='flex justify-between items-center flex-col h-full text-white font-bold my-auto'>
						<div className='h-12 my-9'>
							<h1>Duration: {item.duration} HS</h1>
						</div>

						<div className='w-full flex justify-center items-center flex-wrap h-12 my-9'>
							<h1 className='text-center'>{item.name}</h1>
						</div>

						<div className='flex justify-center items-center flex-wrap h-12 my-9'>
							{item.hashtags.map(hashtag => 
							<h1 className='mx-1' key={hashtag}>#{hashtag}</h1>
							)}
							<h1 className='mx-3'>{item.likes} likes</h1>
						</div>
					</div>

					<div id='expand-btn' className='w-24 h-24 flex bg-gray-50 justify-center items-center rounded-full cursor-pointer hover:bg-blue-200 transition duration-300 ease-in'>
						<h1 className='un_1'>View More</h1>
					</div>
				</div>

				<div className='flex justify-around items-center flex-wrap m-auto w-4/5'>

				{
					this.state.activities.map(activity => {
						if (activity.itinerary == item._id){
							return(
									<div key={activity._id} className='max-w-96 m-3 rounded-full bg-blue-200 flex justify-center items-center flex-col'>
										<div className='h-12 min-w-20 bg-gray-50 flex justify-center items-center hover:bg-blue-500 transition duration-300 ease-in cursor-pointer rounded-full'>

										<h1 className='text-center p-2'>{activity.name}</h1>
										</div>

										<img className='h-96 w-30 object-cover rounded-full' src={activity.photo}/>
									</div>
							)
						}
				})
				}

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
		itineraries:state.itinerariesReducer.itineraries,
		activities:state.activitiesReducer.activities,
	}
}

export default connect(mapStateToProps)(CardDetails);
