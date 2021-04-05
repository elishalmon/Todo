import profilePicture from './profile picture.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';

/*
function Header() {
	return (
		<header className="navbar bg-light d-flex justify-content-between">
			<img src={profilePicture} height="100" width="100" />
			<nav className="navbar navbar-expand-lg navbar-light">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" href="/">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/about">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/todo">Todo List</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}*/

function Header() {
	const history = useHistory()

	const navigateToHome = () => {
		history.push('/')
	}
	const navigateToAbout = () => {
		history.push('/about')
	}
	const navigateToTodo = () => {
		history.push('/todo')
	}
	return (
		<AppBar position="static">
  			<Toolbar className="header">
			  	<Avatar alt="Elisha Shalmon" src={profilePicture}/>	
				<div>
					<Button onClick={ navigateToHome } color="inherit">Home</Button>
					<Button onClick={ navigateToAbout } color="inherit">About</Button>
					<Button onClick={ navigateToTodo } color="inherit">Todo List</Button>
				</div>
  			</Toolbar>
		</AppBar>
	)
}

export default Header;