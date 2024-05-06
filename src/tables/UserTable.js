const UserTable = (props) =>(
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ?
            (
                props.users.map((user) =>
                    (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td className="gap-3">
                                <button onClick={()=>props.editRow(user)} className="btn btn-outline-dark">Edit</button>
                                <button onClick={()=>props.deleteUser(user.id)} className="btn btn-outline-dark">Delete</button>
                            </td>
                        </tr>
                    )
                ) 
            ):(
                <tr>
                    <td >No Users</td>
                </tr>
            )
            }            
        </tbody>
    </table>
)

export default UserTable;