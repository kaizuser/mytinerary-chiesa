import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/Hero'
import CallToAction from '../components/CallToAction'
import CarouselApp from '../components/Carousel'
import Snack from '../components/Snack.js'
import '../App.css';


function Home() {
	return (
		<>
	        <Snack/>
		<main className='w-full min-h-screen'>
			<Hero/>
			<CallToAction/>
			<CarouselApp/>
		</main>
		</>
	  );
}

export default Home;
