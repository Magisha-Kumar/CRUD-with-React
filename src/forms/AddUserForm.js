import { useState } from "react";

const AddUserForm = (props) => {

    const initialFormState = {id:null,name:'',username:''};

    const[user,setUser] = useState(initialFormState);

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
                props.addUser(user);
                setUser(initialFormState);
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
            <button className="btn btn-dark">Add new user</button>
        </form>
    )
}

export default AddUserForm;