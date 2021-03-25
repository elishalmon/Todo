
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

function Login() {

    const isLoading = false

    const handleSubmit = async (event) => {
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
	}

	return (
		<Paper elevation={3}> 
			<form className="middle-container" onSubmit={handleSubmit}>
				<div className="mb-3">
					{/*
					<label className="form-label">Email address</label>
					<input type="email" className="form-control" />	
					*/}
				
					<TextField id="standart" type="email" label="Email" />
				</div>
				<div className="mb-3">
					{/*
					<label>Password</label>
					<input type="password" className="form-control" />
					*/}
					<TextField id="standart" type="Password" label="password" />
				</div>
				<Button 
					disabled = {isLoading}
					type="submit" 
					variant="contained"
					color="primary"
					className=""
				>Submit</Button>
				{
					isLoading && <h1>Loading...</h1>
				}
			</form>
		</Paper> 
	)
}

export default Login;