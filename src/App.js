import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './View/Home';
import About from './View/About';

function App() {
	return (
		<div>
			<Router>
				<Header name={'Nícolas'}></Header>
				<div className='p-3'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
					</Switch>
				</div>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
