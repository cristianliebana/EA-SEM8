import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser () {
    const [username, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [rol, setRol] = useState()
    const navigate = useNavigate()

    const Submit = (e: any) => {
        e.preventDefault();
        axios.post("http://localhost:9090/users/createuser", {username, email, password,rol})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter username" className="form-control"
                        onChange={(e: any) => setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter email" className="form-control"
                        onChange={(e: any) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter password" className="form-control"
                        onChange={(e: any) => setPassword(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Rol</label>
                        <input type="text" placeholder="Enter rol" className="form-control"
                        onChange={(e: any) => setRol(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;