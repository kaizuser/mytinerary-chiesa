import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Hero from './components/Hero'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import CarouselApp from './components/Carousel'
import './App.css';

function App() {
	return (
		<>
		<Header/>
		<main className='w-full min-h-screen'>
			<Hero/>
			<CallToAction/>
			<CarouselApp/>
		</main>
		<Footer/>
		</>
	  );
}

export default App;
