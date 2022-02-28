import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Cities from './components/Cities'
import Home from './components/Home'

function App() {
	return (
		<>
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/home' element={<Home/>}/>
				<Route path='/cities' element={<Cities/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
		</>
	  );
}

export default App;
