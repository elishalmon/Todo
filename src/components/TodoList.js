import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import InputLabel from '@material-ui/core/InputLabel';

function TodoList() {
    const [todoList, setTodoList] = useState([]);

    const loadList = async () => {
        const response = await fetch('http://nztodo.herokuapp.com/api/tasks/?format=json');
        const todos = await response.json();
        setTodoList(todos);
        console.log(todoList.length);
    }

    const handleDelete = async (item) => {
        await fetch(`http://nztodo.herokuapp.com/api/task/${item.id}?format=json`, {
                method: 'DELETE'
        });
        loadList();
    }

    return(
        <Paper elevation={9} className="container">
            <div className="load-list">
                <Button onClick={loadList} variant="contained" color="secondary">
                    Load List
                </Button>

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
    )
}

export default TodoList;