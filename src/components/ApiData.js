import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function ApiData(props){
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get(`http://localhost:4000/api/cities/`)
			.then((response) => {
				let cities = response.data.response.cities
				let search = String(props.search)
				let filtered = cities.filter(city=>city.name.toLowerCase().startsWith(search.toLowerCase().split(' ').join('')))

				console.log(search.toLowerCase().split('').join(''))


				if (filtered.length == 0 || filtered == undefined || filtered == null){
					setData(cities)
					return
				}

				setData(filtered)
			})
			.catch(error => console.log('Server request failed'))
	}, [props.search])

	return(
		<>
                <div className='w-full m-4 flex min-w-3/4 flex justify-center items-center flex-wrap'>
                {
                data.map(city =>
                        <div className="w-96 h-80 m-5 rounded overflow-hidden shadow-lg" key={city.name}>
                          <img className="w-full h-60 object-cover" src={city.src} alt="Sunset in the mountains"/>
                          <div className="w-full h-20 flex justify-center items-center">
                            <div className="font-bold text-xl mb-2 object-cover">{city.name}</div>
                          </div>
                        </div>
                        )

                }
                </div>
		</>
	)
}
