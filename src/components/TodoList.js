

function TodoList() {

    function handleDelete(item) {
        console.log("Delete " + item);
    }

    const list = [
        {"id":9870,"title":"Lavi","description":"desc","group":"45","when":"2019-09-07T18:27:32.960000Z"},
        {"id":9874,"title":"Ofer","description":"desc","group":"45","when":"2019-09-07T18:27:32.960000Z"},
        {"id":9910,"title":"Thor","description":"yuval_azani7","group":"45","when":"2019-09-21T12:30:35.620000Z"},
        {"id":9914,"title":"Loreal","description":"yuval_azani7","group":"45","when":"2019-09-21T12:30:35.620000Z"}
    ]
    return(
        <ul className = "list-group">
            {
                list.map(function(item) {
                    return (
                        <li className = "align-items-center list-group-item d-flex justify-content-between" key = {item.id}>
                            {item.title}
                            <button onClick = {() => handleDelete(item.title)} type="button" class="btn btn-danger btn-sm">
								Delete
							</button>  
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList;