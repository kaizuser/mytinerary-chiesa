import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header.js'
import Cities from './Cities.js'
import Home from './Home'

function App() {
	return (
		<>
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/home' element={<Home/>}/>
				<Route path='/cities' element={<Cities/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
		</>
	  );
}

export default App;
