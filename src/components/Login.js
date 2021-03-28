import {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';


function Login() {

	const [ isLoading, setIsLoading ] = useState(false)

    const handleSubmit = async (event) => {

		setIsLoading(true)
		
		event.preventDefault()
		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify({
					email: 'yariv@nerdeez.com',
					password: '12345678'
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		const data = await response.json()
		console.log(data) 
		setIsLoading(false)
	}

	return (
		<Paper elevation={9} className="container"> 
			<form className="login-form" onSubmit={handleSubmit}>
				<div className="login-item">
					<TextField id="standart" type="email" label="Email" />
				</div>
				<div className="login-item">
					<TextField id="standart" type="Password" label="Password" width={250}/>
				</div>
				<div className="login-item">
					<Button 
						className="login-item"
						disabled = {isLoading}
						type="submit" 
						variant="contained"
						color="primary"
						className=""
					>Submit</Button>
				</div>
				{
					isLoading && <CircularProgress size={24} />
				}
			</form>
		</Paper> 
	)
}

export default Login;