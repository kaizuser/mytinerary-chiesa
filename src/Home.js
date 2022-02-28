import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero'
import CallToAction from './components/CallToAction'
import CarouselApp from './components/Carousel'
import './App.css';

function Home() {
	return (
		<>
		<main className='w-full min-h-screen'>
			<Hero/>
			<CallToAction/>
			<CarouselApp/>
		</main>
		</>
	  );
}

export default Home;
