import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './structure/Header'
import Hero from './structure/Hero'
import CallToAction from './structure/CallToAction'
import Footer from './structure/Footer'
import Carousel from './structure/Carousel'
import './App.css';

function App() {
	return (
		<>
		<Header/>
		<main className='w-full min-h-screen'>
			<Hero/>
			<CallToAction/>
			<Carousel/>
		</main>
		<Footer/>
		</>
	  );
}

export default App;
