import {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import InputLabel from '@material-ui/core/InputLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [ searchInput, setSearchInput ] = useState('')
    const history = useHistory()

    const token = useSelector( (state) => {
        return state.user.token
    })

    const loadList = async () => {
        //const response = await fetch('http://nztodo.herokuapp.com/api/tasks/?format=json');
        const response = await fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        })
        const todos = await response.json();
        setTodoList(todos);
    }

    const handleDelete = async (item) => {
        await fetch(`http://nztodo.herokuapp.com/api/task/${item.id}?format=json`, {
                method: 'DELETE'
        });
        loadList();
    }

    useEffect(
        loadList,
        []
    )

    const handleChange = ( event ) => {
        setSearchInput(event.target.value)
    }

    const handleSearchClick = (event) => {
        event.preventDefault()
        history.push(`todo?search=${searchInput}`)
    }

    return(
        <div style={{textAlign: 'center'}}>
            {
                todoList.length === 0 ? 
                <CircularProgress  size={96} /> 
                        :
                <Paper elevation={9} className="container">  
                    <form onSubmit = { handleSearchClick }>
                        <TextField 
                            onChange = { handleChange }
                            id="standard-basic" 
                            label="Search"
                        />
                    </form> 
                    <div className="load-list">
                        <ul>
                            {
                                todoList.map(function(item) {
                                    return (
                                        <li className="item" key = {item.id}>
                                            <InputLabel>
                                            {
                                                item.title
                                            }
                                            </InputLabel>
                                            <IconButton aria-label="delete" onClick = {() => handleDelete(item)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </Paper>    
            }
        </div> 
    )
}

export default TodoList;