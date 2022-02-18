import React from 'react'
import CallToActionComponent from '../components/CallToActionComponent'

export default function CallToAction(){ return(
		<>
			<div className='bg-white'>
				<div className='call-1 w-full h-60 bg-blue-400'></div>
				<CallToActionComponent/>
				<div className='call-2 w-full h-60 bg-blue-400'></div>
			</div>
		</>
	)
}
