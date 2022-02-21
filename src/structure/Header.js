import React from 'react'

export default function Header(){
	return(
		<>
		<header className='w-full h-24 bg-white border-b-2 border-black flex justify-between items-center flex-wrap hover:bg-gray-200 transition duration-300 ease-in'>
			<div id='logo-container' className='logo-container flex justify-center items-center'>
				<svg id='logo' className='m-3 mr-5 transition duration-700 ease-in-out' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
				  <rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"/>
				  <path d="M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z"/>
				</svg>

				<h1 className='text-6xl m-3 mb-4'>My Tinerary</h1>

			</div>

			<nav className='h-20 flex justify-between items-center'> 
				<a className='h-6 px-5 py-2 mt-3 mx-3 text-xl rounded-xl bg-blue-400 hover:bg-blue-300 transition duration-300 ease-in flex justify-center items-center' href='../App.js'>Home</a>
				<a className='h-6 px-5 py-2 mt-3 mx-3 text-xl rounded-xl bg-blue-400 hover:bg-blue-300 transition duration-300 ease-in flex justify-center items-center' href='../App.js'>Cities</a>

				<a className=''>
					<button className='h-6 px-5 py-2 mt-3 mx-1 text-xl rounded-xl bg-blue-400 hover:bg-blue-300 transition duration-300 ease-in flex justify-center items-center'>Sign in</button>
				</a>

				<svg className='m-s mx-5 hover:cursor-pointer hover:text-blue-300 transition duration-300 ease-in' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
				  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
				  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
				</svg>
			</nav>
		</header>
		</>
	)
}

