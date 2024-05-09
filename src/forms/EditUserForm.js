
import { useState , useEffect} from "react";

const EditUserForm = (props) => {

    const[user,setUser] = useState(props.currentUser);

    useEffect(()=>{
        setUser(props.currentUser);
    },[props]);

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setUser({...user, [name] : value});
    }

    

    return (
        <form onSubmit={
            (event) => {
                event.preventDefault();
                if(!user.name || ! user.username) {
                    return;
                }
                props.updateUser(user.id,user);
            }
        }>
            <div className="mb-3 ">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" onChange={handleInputChange} className="form-control" name="name" 
                value={user.name}/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" onChange={handleInputChange} className="form-control" name="username" value={user.username}/>
            </div>   
            <div className="row">
                <div className="col-3 ps-3 pe-0">
                    <button type="submit" className="btn btn-dark ps-1 pe-1">Update User</button>
                </div>
                <div className="col ps-1">
                    <button onClick={()=> {props.setEditing(false)}} className="btn btn-dark">Cancel</button>   
                </div>
            </div>
            
        </form>
        
    )
}



        
        
export default EditUserForm;
