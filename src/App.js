import './App.css';
import Header from './components/Header/Header'
import Login from './components/Login'
import Footer from './components/Footer'
import TodoList from './components/TodoList'

function App() {
	return (
		<div className="wrapper">
			<Header/>
			<div className="main">
				<Login />
				<div className="gap"></div>
				<TodoList />
			</div>
			<Footer />		
		</div>	
	)
}

export default App;
