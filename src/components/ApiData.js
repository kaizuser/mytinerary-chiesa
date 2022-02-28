import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function ApiData(props){
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get(`https://rickandmortyapi.com/api/character/?name=${props.search}`)
			.then(response => setData(response.data.results))
		        .catch(error => console.log('Server request failed'))

		console.log(data)
	}, [props.search])

	return(
		<div>
		</div>
	)
}
