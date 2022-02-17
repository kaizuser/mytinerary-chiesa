import React from 'react'

export default function Header(){
	return(
		<header className='w-full h-24 bg-white flex justify-between items-center hover:bg-gray-200 transition duration-300 ease-in'>
			<div id='logo-container' className='logo-container flex justify-center items-center'>
				<svg id='logo' className='m-2 mx-5 transition duration-700 ease-in-out' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
				  <rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"/>
				  <path d="M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z"/>
				</svg>
			</div>

			<nav className='h-20 flex justify-between items-center'> 
				<h1 className='header m-3 mb-5'>My Tinerary</h1>

				<a className='h-6 px-5 py-2 mt-3 mx-3 h-8 text-xl rounded-xl bg-blue-400 border-b-4 border-white hover:bg-blue-200 hover:border-blue-400 transition duration-300 ease-in flex justify-center items-center' href='../App.js'>Cities</a>
				<a className='h-6 px-5 py-2 mt-3 mx-3 h-8 text-xl rounded-xl bg-blue-400 border-b-4 border-white hover:bg-blue-200 hover:border-blue-400 transition duration-300 ease-in flex justify-center items-center' href='../App.js'>Home</a>

			</nav>

			<div>
				<a className=''>
					<button className='h-6 px-5 py-2 mt-3 mx-1 h-8 text-xl rounded-xl bg-blue-400 border-b-4 border-white hover:bg-blue-200 hover:border-blue-400 transition duration-300 ease-in flex justify-center items-center'>Sign in</button>
				</a>
			</div>
		</header>
	)
}

