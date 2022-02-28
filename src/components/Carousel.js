import React from 'react';
import cities from '../data/cities.js'
import Carousel from 'react-bootstrap/Carousel';

export default class CarouselApp extends React.Component{

    render() {

        return (
	<Carousel className='w-full bg-blue-700' interval={2800}>
		{
			cities.map(slide => 

			<Carousel.Item className='mb-5' key={slide[0].name}>
				<div className='slide-container flex justify-center flex-wrap items-center'>
				{
					slide.map(city => 
					<div className='m-3' key={city.id}>
					<img src={city.src} className='carousel-img object-cover'/>
					<a className='h-12 flex justify-center items-center bg-blue-600 hover:bg-white transition duration-300 ease-in cursor-pointer'>
						<h3>{city.name}</h3>
					</a>
					</div>

					)
				}

				</div>
			</Carousel.Item>

			)
		}	
	</Carousel>
        );
    }
};
