const UserTable = (props) => {
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>     
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map( (user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <div className="row ">
                                    <div className="col-2 ">
                                        <button onClick={()=>props.editUser(user)} className="btn btn-dark">Edit</button>
                                    </div>
                                    <div className="col ps-4">
                                        <button onClick={()=>props.deleteUser(user.id)} className="btn btn-dark">Delete</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))
                ): (
                    <h1>No Users</h1>
                )
            }
                
            </tbody>
        </table>
    );
    
}

export default UserTable;