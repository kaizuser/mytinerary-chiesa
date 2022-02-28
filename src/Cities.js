import React from 'react'
import {useState} from 'react'

export default function Cities(){

	const [input, setInput] = useState()

	return(
		<main>
			<section className='w-full flex justify-center items-center flex-row'>
				<input className='bg-black' onKeyUp={(event) => setInput(event.target.value)}></input>

			</section>
		</main>
	)
}
