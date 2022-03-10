import React from 'react'
import {useParams} from 'react-router-dom'

export default function CardDetails(props){
	let {id} = useParams()

	let city = props.cities.filter(city => city._id == id)
	let itinerary = props.itineraries.filter(itinerary => itinerary.city == id)

	if (city.length > 0 && itinerary.length > 0){
		return(
			<> 
			<div className='w-full min-h-screen flex justify-start items-center flex-col'>
				{city && city.map(item => 
				<div className="w-4/5 h-80 m-5 rounded overflow-hidden shadow-lg" key={item.name}>
					<img className="w-full h-60 object-cover" src={item.src} alt="Sunset in the mountains"/>


					<div className="w-full h-20 flex justify-center items-center hover:bg-blue-500 transition duration-300 ease-in cursor-pointer">
					<div className="font-bold text-xl mb-2 object-cover">{item.name}
					</div>

					</div>
				</div>

				)
				}

				{itinerary && itinerary.map(item => 
				<div className='itinerary-container m-5 bg-blue-500 w-3/5 h-80 rounded-full flex justify-around items-center flex-wrap' key={item._id}>
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

					<label id='expand-btn' className='w-40 h-20 bg-blue-700 flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-600 transition duration-300 ease-in'>
						<h1 className='un_1'>View More</h1>
						<h1 className='un_2 hidden'>Under construction</h1>
					</label>

				</div>
				)
				}


			</div>
			</>
		)
	} else{
		return(
			<>
			<div className='w-full min-h-screen flex justify-start items-center flex-col'>
				{city && city.map(item => 
				<div className="w-4/5 h-80 m-5 rounded overflow-hidden shadow-lg" key={item.name}>
					<img className="w-full h-60 object-cover" src={item.src} alt="Sunset in the mountains"/>


					<div className="w-full h-20 flex justify-center items-center hover:bg-blue-500 transition duration-300 ease-in cursor-pointer">
					<div className="font-bold text-xl mb-2 object-cover">{item.name}
					</div>

					</div>
				</div>

				)
				}


				<div className='flex justify-center w-3/4 bg-red-500 h-60 rounded-lg items-center font-bold'>No itineraries yet :(</div>

			</div>
			</>
		)
	}
}
