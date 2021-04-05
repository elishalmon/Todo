import { useQuery, useMutation, useQueryClient } from 'react-query'

async function fetchData() {
    const response = await fetch('http://nztodo.herokuapp.com/api/tasks/?format=json')
    const items = await response.json()
    return items;
}

async function deleteItem(itemId) {
    await fetch(`http://nztodo.herokuapp.com/api/task/${itemId}?format=json`, {
                method: 'DELETE'
        });
    fetchData()
}

function TodoListReactQuery () {

    const queryClient = useQueryClient()
    const { data } = useQuery("todos", fetchData)
    const {mutate} = useMutation(deleteItem, {
        onSuccess: () => {
            queryClient.refetchQueries("todos")
        },
    })

    if(!data) {
        return <span>Loading...</span>
    }

    return(
        <ul>
            {data.map(item => (
                <li key = {item.id}>
                    {item.title}
                    <button onClick = {() => mutate(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoListReactQuery;