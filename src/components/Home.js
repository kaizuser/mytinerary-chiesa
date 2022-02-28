import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero'
import CallToAction from './CallToAction'
import CarouselApp from './Carousel'
import '../App.css';

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
