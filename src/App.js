import { useState } from "react";
import UserTable from "./table/UserTable";
import EditUserForm from "./forms/EditUserForm";
import AddUserForm from "./forms/AddUserForm";

function App() {

	const usersData = [
		{id:1,name:'Magisha',username:'magishakumar'},
		{id:2,name:'Sabitha',username:'sabithasivan'},
		{id:3,name:'Kumar',username:'kumarramalingam'}
	];

	const [users,setUsers] = useState(usersData);

	const addUser = (user) => {
		user.id = users.length+1;
		setUsers([...users,user]);
	}
	
	const deleteUser = (id) => {
		setUsers(users.filter((user)=>user.id!==id));
		setEditing(false);
	}

	const[editing,setEditing] = useState(false);

	const initialFormState = {id:null,name:'',username:''};

	const [currentUser,setCurrentUser] = useState(initialFormState);

	const editUser = (user) => {
		setEditing(true);
		setCurrentUser({id:user.id,name:user.name,username:user.username});
	}

	const updateUser = (id,updatedUser) => {
		setEditing(false);
		setUsers(users.map((user) => (user.id===id?updatedUser:user)));
	}


	return (
		<div className="container ">

			<h1 className="text-center pt-3 pb-4">React Hooks Practice</h1>
			
			<div className="d-flex gap-5">
				<div className="flex-fill">
					{editing?
					(
						<div>
							<h1 className="pb-3">Edit User</h1>
							<EditUserForm 
								setEditing = {setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</div>
					):(
						<div>
							<h1 className="pb-3">Add User</h1>
							<AddUserForm addUser={addUser}/>
						</div>
					)}
					
				</div> 
				<div className="flex-fill">
					<h1 className="ps-1 pb-2">View Users</h1>
					<UserTable users = {users} deleteUser={deleteUser} editUser={editUser}/>
				</div>
			</div>
			
		</div>
		
	);
}

export default App;
