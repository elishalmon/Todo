import {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ErrorSharp } from '@material-ui/icons';


function validateEmail(email) {

        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}

function Login() {

	const [ isLoading, setIsLoading ] = useState(false)
	const [ values, setValues ] = useState({
			email: '',
			password: ''
	})

	const [ errors, setErrors ] = useState({
			email: null,
			password: null
	})
	const history = useHistory()
	const dispatch = useDispatch()

    const handleSubmit = async (event) => {

		event.preventDefault()

		let tempErrors = { email: null, password: null }
		let isValid = true

		if( !values.email ) {
			tempErrors = {
				...tempErrors,
				email : 'Email field is required'
			}
		}

		if( !values.password ){
			tempErrors = {
				...tempErrors,
				password : 'Password field is required'
			}
		}

		if( values.password.length < 5 && values.password.length > 0 ){
			tempErrors = {
				...tempErrors,
				password : 'Password minimal length is 5 characters'
			}
		}

		if( !validateEmail(values.email) && values.email.length > 0 ) {
			tempErrors = {
				...tempErrors,
				email : 'Email is not valid'
			}
		}

		if( tempErrors.email !== null || tempErrors.password !== null ) {
			isValid = false
		}
		setErrors(tempErrors)
		if( !isValid) {
			return
		}

		setIsLoading(true)
		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		const data = await response.json()
		console.log(data) 
		setIsLoading(false)
		dispatch( { type: 'SET_TOKEN', payload: data.token } )
		history.push('/todo')
	}

	const handelChange = ( event ) => {
		setValues({
			...values,
			[event.target.name] : event.target.value
		})
	}

	return (
		<Paper elevation={9} className="container"> 
			<form className="login-form" onSubmit={handleSubmit}>
				<div className="login-item">
					<TextField 
						onChange = { handelChange }
						name="email"
						id= "standart"
						label={errors.email ? 'Error' : 'Enter your email'}
						error = {errors.email}
						helperText={errors.email}
					/>	
				</div>
				<div className="login-item">
					<TextField 
						onChange = { handelChange }
						name="password"
						id="standart" 
						type="Password" 
						label={errors.password ? 'Error' : 'Enter your password'}
						error = {errors.password}
						helperText={errors.password}
					/>
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