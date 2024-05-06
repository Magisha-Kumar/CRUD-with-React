import { useEffect, useState } from "react"

const EditUserForm = (props) => {
    const [user,setUser] = useState(props.currentUser);

    useEffect(()=>{
        setUser(props.currentUser);
    },[props]);

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setUser({...user,[name] : value});
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!user.name || !user.username) {
                    return;
                }
                props.updateUser(user.id,user);
            }
        }>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input className="form-control" onChange={handleInputChange} type="text" name="name" value={user.name} />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input className="form-control" onChange={handleInputChange} type="text" name="username" value={user.username} />
            </div>
            <button className="btn btn-outline-dark">Update user</button>
            <button onClick={()=>{
                props.setEditing(false)
            }} className="btn btn-outline-dark">Cancel</button>
        </form>
    );
}

export default EditUserForm;