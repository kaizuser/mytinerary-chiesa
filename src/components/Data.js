import axios from 'axios'

let data = []

axios.get(`http://localhost:4000/api/cities/`)
		.then((response) => {
			data.push(...response.data.response.cities)
		})
		.catch(error => console.log(error))

export default data

