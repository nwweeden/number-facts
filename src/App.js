import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<Route exact path = '/'>
					<Home />
				</Route>
				<Route exact path = '/play'>
					<Game />
				</Route>
			</BrowserRouter>
    </div>
  );
}

export default App;
