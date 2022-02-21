import React, { Component } from 'react';
import cities from '../data/cities.js'
import Carousel from 'react-bootstrap/Carousel';

export default class CarouselComponent extends React.Component{

    render() {
	let {first_slide, second_slide, third_slide} = []

	first_slide = cities.filter(city => city.id <= 4)
	second_slide = cities.filter(city => city.id > 4 && city.id <= 8)
	third_slide = cities.filter(city => city.id > 8 && city.id <= 12)

        return (
	<Carousel className='w-full bg-blue-700' interval={2800}>

	<Carousel.Item className='item-container mb-5'>
		<div className='slide-container flex justify-center flex-wrap items-center'>
			{
				first_slide.map(city => 
				<div className='m-3'>
				<img src={city.src} className='carousel-img'/>
				<a className='h-12 flex justify-center items-center bg-blue-600 hover:bg-white transition duration-300 ease-in cursor-pointer'>
					<h3>{city.name}</h3>
				</a>

				</div>
				)
			}
		</div>
	</Carousel.Item>

	<Carousel.Item className='item-container mb-5'>
		<div className='slide-container flex justify-center flex-wrap items-center flex-row cursor-pointer'>
			{
				second_slide.map(city => 
				<div className='m-3'>
				<img src={city.src} className='carousel-img'/>
				<a className='h-12 flex justify-center items-center bg-blue-600 hover:bg-white transition duration-300 ease-in'>
					<h3>{city.name}</h3>
				</a>
				</div>
				)
			}
		</div>
	</Carousel.Item>

	<Carousel.Item className='item-container mb-5'>
		<div className='slide-container flex justify-center flex-wrap items-center cursor-pointer'>
			{
				third_slide.map(city => 
				<div className='m-3'>
				<img src={city.src} className='carousel-img'/>
				<a className='h-12 flex justify-center items-center bg-blue-600 hover:bg-white transition duration-300 ease-in'>
					<h3>{city.name}</h3>
				</a>
				</div>
				)
			}
		</div>
	</Carousel.Item>

	</Carousel>
        );
    }
};
