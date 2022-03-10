import React from 'react'
import {useParams} from 'react-router-dom'

export default function CardDetails(props){
	let {id} = useParams()

	let city = props.cities.filter(city => city._id == id)
	let itinerary = props.itineraries.filter(itinerary => itinerary.city == id)

	console.log(props)

	return(
		<> 
		<div className='w-full h-screen flex justify-center items-start'>
			{city && city.map(item => 
			<div className="w-3/4 h-80 m-5 rounded overflow-hidden shadow-lg" key={item.name}>
				<img className="w-full h-60 object-cover" src={item.src} alt="Sunset in the mountains"/>


				<div className="w-full h-20 flex justify-center items-center hover:bg-blue-500 transition duration-300 ease-in cursor-pointer">
				<div className="font-bold text-xl mb-2 object-cover">{item.name}
				</div>

				</div>
			</div>

			)
			}

			<div>
			</div>

		</div>
		</>
	)

}
