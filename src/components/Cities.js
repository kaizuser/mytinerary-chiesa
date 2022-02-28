import React from 'react'
import {useState} from 'react'
import ApiData from './ApiData'

export default function Cities(){

	const [input, setInput] = useState()

	return(
		<main>
			<section className='w-full flex justify-center items-center flex-row'>
				<input className='bg-black' onKeyUp={(event) => setInput(event.target.value)}></input>
				<ApiData search={input}/>

			</section>
		</main>
	)
}
