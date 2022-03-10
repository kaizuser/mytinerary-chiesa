import React from 'react'
import {useParams} from 'react-router-dom'

export default function CardDetails(props){
	let {id} = useParams()

	let city = props.cities.filter(city => city._id == id)
	let itinerary = props.itineraries.filter(itinerary => itinerary.city == id)

	return(
		<> 
		<div className='flex justify-center items-center'>

		</div>
		</>
	)

}
