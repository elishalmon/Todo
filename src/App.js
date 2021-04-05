import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Todo from './pages/Todo';
import Error404 from './pages/Error404';


const queryClient = new QueryClient()

function App() {
	return (
		<div className="wrapper">

			<Header/>

			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/todo" exact>
					<Todo />
				</Route>
				<Route >
					<Error404 />
				</Route>
			</Switch>

			<Footer />		
		</div>	
	)
}

export default App;
