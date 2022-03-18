/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {Link} from 'react-router-dom'
import {React, useEffect, useState} from 'react'
import usersActions from '../redux/actions/usersActions.js'
import {connect} from 'react-redux'


const home = [
  {
    name: 'Home',
  },
]

const cities = [
	{
		name:'Cities',
	}
]

const sign_up = [
	{
		name:'Sign in'
	}
]

const log_in = [
	{
		name:'Log up'
	}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header (props){

	let [active, setActive] = useState(false)

	useEffect(() => {
	    if(localStorage.getItem('token')!== null){
	      let token = localStorage.getItem("token")
	      let check = props.VerificarToken(token)
	      setActive(check)
	    }
	},[props])

	const handleSignOut = () => {
		props.signOut(active)
		setActive(false)
	} 

  return (
  <Popover className="relative bg-white z-10">
	  <div className="sm:px-6 hover:bg-blue-100 transition duration-300 ease-in">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
		<svg className='m-2'xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"viewBox="0 0 16 16">
		  <rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"/>
		  <path d="M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z"/>
		</svg>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10 flex flex-row w-40">
            <Popover className="">

		    <Link to={'home'}>
		    <span className='text-gray-500 hover:text-gray-700 cursor-pointer'>Home</span>
		   </Link>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {home.map((item) => (
                            <a
                              key={item.name}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
            </Popover>
            <Popover className="relative">

		    <Link to={'cities'}>

		    <span className='text-gray-500 hover:text-gray-700 cursor-pointer ml-5'>Cities</span>
		    </Link>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {cities.map((item) => (
                            <a
                              key={item.name}

                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
            </Popover>
          </Popover.Group>
	 {active==false ? <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
	    <Link to={'/signIn'}>
            <span href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </span>
	    </Link>
	    <Link to={'/logUp'}>
            <span
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Log up
            </span>
	    </Link> 
		  <svg className='ml-5 hover:text-blue-500 transition duration-300 ease-in cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
		  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
		  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
		</svg>
          </div> 
	  : 
	   <span
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-400 cursor-pointer"
	      onClick={handleSignOut}
            >
              Sign Out
	 </span>
	 }
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-around">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {home.map((item) => (
		    <Link to={'home'} key={item.name}>
                    <div
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer"
                    >
			<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 16 16">
			  <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
			  <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
			</svg>

		      <div className="ml-4">

			<p className="text-base font-medium text-gray-900">{item.name}</p>
		      </div>
                    </div>
		    </Link>
                  ))}

		  {cities.map((item) => (
		    <Link to={'cities'} key={item.name}>
		    <div
		      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
		    >
			<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"viewBox="0 0 16 16">
			  <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z"/>
			</svg>
		      <div className="ml-4">
			<p className="text-base font-medium text-gray-900">{item.name}</p>
		      </div>
		    </div>
		    </Link>
		  ))}
		  {sign_up.map((item) => (

	            <Link to={'/signIn'} key={item}>
		    <div
		      key={item.name}

		      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
		    >
			<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 16 16">
			  <path d="M8.5 6a.5.5 0 1 0-1 0h-2A1.5 1.5 0 0 0 4 7.5v2A1.5 1.5 0 0 0 5.5 11h.473l-.447 1.342a.5.5 0 1 0 .948.316L7.027 11H7.5v1a.5.5 0 0 0 1 0v-1h.473l.553 1.658a.5.5 0 1 0 .948-.316L10.027 11h.473A1.5 1.5 0 0 0 12 9.5v-2A1.5 1.5 0 0 0 10.5 6h-2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2z"/>
			  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
			</svg>
		      <div className="ml-4">
			<p className="text-base font-medium text-gray-900">{item.name}</p>
			<p className="mt-1 text-sm text-gray-500">{item.description}</p>
		      </div>
		    </div>

		    </Link>

		  ))}
		  {log_in.map((item) => (

		    <Link to={'/logUp'} key={item}>
		    <div
		      key={item.name}

		      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
		    >
			<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 16 16">
			  <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
			  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
			</svg>

		      <div className="ml-4">
			<p className="text-base font-medium text-gray-900">{item.name}</p>
			<p className="mt-1 text-sm text-gray-500">{item.description}</p>
		      </div>
		    </div>

		    </Link>
		  ))}
		</nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
const mapDispatchToProps = {
	VerificarToken: usersActions.VerificarToken,
	signOut: usersActions.SignOutUser
}

const mapStateToProps = (state) => {
  return {
      snackbar: state.usersReducer.snackbar,
      user: state.usersReducer.user
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
