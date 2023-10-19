import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser () {
    const {id} = useParams()
    const [username, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [rol, setRol] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios
          .get(`http://localhost:9090/users/readuser/${id}`)
          .then((result) => {
            console.log(result);
            setName(result.data.username);
            setEmail(result.data.email);
            setPassword(result.data.password);
          })
          .catch((err) => console.log(err));
      }, [id]);

      const Update = (e: any) => {
        e.preventDefault();
        axios
          .put(`http://localhost:9090/users/updateuser/${id}`, { username, email, password, rol })
          .then((result) => {
            console.log(result);
            navigate('/');
          })
          .catch((err) => console.log(err));
      };
    
    return (
<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Enter username" className="form-control"
                        value={username} onChange={(e: any) => setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter email" className="form-control"
                        value={email} onChange={(e: any) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter password" className="form-control"
                        value={password} onChange={(e: any) => setPassword(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Rol</label>
                        <input type="text" placeholder="Enter rol" className="form-control"
                        onChange={(e: any) => setRol(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;