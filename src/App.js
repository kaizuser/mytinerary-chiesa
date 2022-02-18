import './App.css';
import Header from './structure/Header'
import Hero from './structure/Hero'

function App() {
	return (
		<>
		<Header/>
		<main className='w-full min-h-screen'>
			<Hero/>
			<p>hola</p>
		</main>
		
		</>
	  );
}

export default App;
