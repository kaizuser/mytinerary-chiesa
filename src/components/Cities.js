import React from 'react'
import {useState} from 'react'
import ApiData from './ApiData'

export default function Cities(){

	const [input, setInput] = useState()

	return(
		<main>
			<section className='w-full flex justify-center items-center flex-col'>
				<input className='border-black border-2 w-2/4 m-3 p-2 rounded-full hover:bg-blue-200 transition duration-300 ease-in text-center' placeholder='Search' onKeyUp={(event) => setInput(event.target.value)}></input>
				<ApiData search={input}/>

			</section>
		</main>
	)
}
