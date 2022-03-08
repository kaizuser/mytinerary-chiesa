const Filter = (props) => {

	const {cities, filter} = props;

	return (
		<input className='border-black border-2 w-2/4 m-3 p-2 rounded-full hover:bg-blue-200 transition duration-300 ease-in text-center' placeholder='Search' onKeyUp={(event) => filter(cities, event.target.value)}></input>
	)
}

export default Filter
