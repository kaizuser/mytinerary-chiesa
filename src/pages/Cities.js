import React from 'react'
import ApiData from '../components/ApiData'
import Snack from '../components/Snack.js'

export default function Cities(){

	return(
		<>
		<Snack/>
		<main>
			<section className='w-full flex justify-center items-center flex-col'>
				<ApiData/>

			</section>
		</main>
		</>
	)
}
