import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import data from './Data.js'


export default function CardDetails() {
	const {name} = useParams()
	const [card, setCard] = useState(data.filter(city => city.name == name))

	return(
		<> 
		<div className='flex justify-center items-center'>
			{
				card.map(city => 
				<div className='w-full h-screen bg-blue-200 flex justify-center items-center' key={city.name}>  
				 <div className="w-96 h-80 m-5 rounded overflow-hidden shadow-lg" key={city.name}>
				  <img className="w-full h-60 object-cover" src={city.src} alt="Sunset in the mountains"/>


			        <div className='flex justify-center items-center flex-col'>


				<div className="w-full h-20 flex justify-center items-center hover:bg-blue-500 transition duration-300 ease-in cursor-pointer flex-col">
                                  <div className="font-bold text-xl mb-2 object-cover flex justify-center items-center flex-col">{city.name}

				<h1>Under construction</h1>
				</div>

				</div>

				   </div>
				</div>
				</div>
				)
			}
		</div>
		</>
	)
}
