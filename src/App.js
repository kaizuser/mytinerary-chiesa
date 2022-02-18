import './App.css';
import Header from './structure/Header'
import Hero from './structure/Hero'
import CallToAction from './structure/CallToAction'
import Footer from './structure/Footer'

function App() {
	return (
		<>
		<Header/>
		<main className='w-full min-h-screen'>
			<Hero/>
			<CallToAction/>
		</main>
		<Footer/>
		</>
	  );
}

export default App;
