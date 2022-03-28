import React from 'react'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions.js'
import commentsActions from '../redux/actions/commentsActions.js'
import usersActions from '../redux/actions/usersActions.js'


class CardDetails extends React.Component{
	constructor(props){
		super(props)
	}

	state = {city:{}, itineraries:[], activities:[], user:{}, addComment:'', users:{}}

	manageLikes = async (item) => {
		await this.props.likeDislike(item)
		this.props.fetchItineraries()
	}

	chargeComment = async (id) => {
		const commentData = {
			tinerary:id,
			comment:this.state.addComment
		}

		await this.props.addComment(commentData)
		this.props.fetchItineraries()
	}

	componentDidMount(){
		this.setState({city:this.props.cities.find(city => city._id === this.props.params.id), itineraries:this.props.itineraries.filter(itinerary => itinerary.city === this.props.params.id), activities:this.props.activities, user:this.props.user, users:this.props.users})
	}

	componentDidUpdate(props){
		if(props.itineraries !== this.props.itineraries){
			this.setState({city:this.props.cities.find(city => city._id === this.props.params.id), itineraries:this.props.itineraries.filter(itinerary => itinerary.city === this.props.params.id), activities:this.props.activities, user:this.props.user, users:this.props.users})
		}
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
				<div className='itinerary-container m-2 bg-blue-500 w-3/5 min-h-80 rounded-full flex justify-around items-center flex-wrap transition'>
					<div className='flex justify-between items-center flex-col'>
						<img src={item.photo} className='h-28 w-28 rounded-full object-cover my-8'/>

						<div className='my-8 flex justify-center items-center'>
							<h1 className=''>{item.likes.length}</h1>

							{this.state.user && this.state.user ?
							(
								<div onClick={func => this.manageLikes(item._id)}>
									{
										item.likes.includes(this.state.user.id)
										?
											<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-red-500 cursor-pointer" viewBox="0 0 16 16">
										  <path fillRule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a21.86 21.86 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354l-1.5 1.5Zm2.893-4.894A20.419 20.419 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708L5.747 10.96Z"/>
										</svg> 
										:
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-black-200 hover:text-red-500 transition duration-300 ease-in cursor-pointer" viewBox="0 0 16 16">
										<path fillRule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a21.86 21.86 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354l-1.5 1.5Zm2.893-4.894A20.419 20.419 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708L5.747 10.96Z"/>
										</svg>

									}
								</div>
							)
							:
							(
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a21.86 21.86 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354l-1.5 1.5Zm2.893-4.894A20.419 20.419 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708L5.747 10.96Z"/>
								</svg>
							)
							}

					        </div>
					</div>

					<div className='flex justify-between items-center flex-col h-full text-white font-bold my-auto'>
						<div className='h-12 my-9'>
							<h1>Duration: {item.duration} HS</h1>
						</div>

						<div className='w-full flex justify-center items-center flex-wrap h-12 my-9'>
							<h1 className='text-center text-3xl text-black'>{item.name}</h1>
						</div>

						<div className='flex justify-center items-center flex-wrap h-12 my-9'>
							{item.hashtags.map(hashtag => 
							<h1 className='mx-1' key={hashtag}>#{hashtag}</h1>
							)}
						</div>
					</div>

					<div className='flex items-center justify-between flex-col h-full'>
						<label htmlFor={item._id} id='expand-btn' className='w-28 h-28 flex bg-gray-50 justify-center items-center rounded-full cursor-pointer hover:bg-blue-200 transition duration-300 ease-in text-center my-8'>
							<h1 className='un_1 text-center'>View More</h1>
						</label>

						<label htmlFor={item.name}>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className='hover:text-gray-50 transition duration-300 ease-in cursor-pointer my-8' viewBox="0 0 16 16">
							  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
							  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
							</svg>
						</label>
					</div>

					<input type='checkbox' id={item.name} className='hidden'/>
						
					<div className='flex justify-center items-center hidden w-3/5 m-5 min-h-96 text-center flex-col'>
						<div>
							<input className='w-10/12 rounded-full border-black border-1 p-2' onChange={(event) => this.setState({addComment:event.target.value})}/>
							{this.props.user ? 
							<button className='bg-gray-50 hover:bg-blue-200 transition duration-300 ease-in rounded-full w-28 h-8 m-2' onClick={() => this.chargeComment(item._id)}>Comment</button>
							:

							<button className='bg-gray-50 hover:bg-blue-200 transition duration-300 ease-in rounded-full w-28 h-8 m-2' disabled>Comment</button>

							}
						</div>

						{item.comments.map((comment) => 
						<div className='flex justify-center items-center text-center flex-col'>
							{this.state.users.users.map((user) => {
								if(comment.userID == user._id){
									return(
										<h1>{user.fullName}</h1>
									)
								}
							})
							}
							<h1 className='w-3/5 h-8 bg-blue-400 m-2 rounded-full'>{comment.comment}</h1>
						</div>
						)}

					</div>

					<input type='checkbox' id={item._id} className='hidden'/>

					<div className='flex justify-around items-center flex-wrap m-2 w-4/5 hidden' id='activities'>

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
				</div>

				)
				}
			</div>
			</>
		)
	}
}

const mapDispatchToProps = {
	likeDislike:itinerariesActions.likeDislike,
	addComment:commentsActions.addComment,
	modifyComment:commentsActions.modifyComment,
	deleteComment:commentsActions.deleteComment,
	fetchItineraries:itinerariesActions.fetchItineraries,
	fetchUsers:usersActions.fetchUsers
} 

const mapStateToProps = (state) => {
	return {
		cities:state.citiesReducer.cities,
		itineraries:state.itinerariesReducer.itineraries,
		activities:state.activitiesReducer.activities,
		user:state.usersReducer.user,
		users:state.usersReducer.users,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
