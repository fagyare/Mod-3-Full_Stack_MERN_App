import axios from 'axios'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userLogin } from '../../services/userService';

let emptyForm = { 
    username: '',
    password: '',
    email: ''
}

function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { token, user } = await userLogin(form)

        if (!token) {
            setForm(emptyForm)
            return
        }

        localStorage.setItem("token", token)
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user));

        navigate('/posts')
    }

    return ( 
        <div className='user-auth'>
            <h1 className='text-white'>Login</h1>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="username">Username:</label> */}
                <br />
                <input className='inpt'
                    placeholder="username"
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                
                <br /><br />
                <br />
                <br />
                <input 
                    placeholder="password"
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <button className="btn btn-outline-dark">Submit</button>

                {/* <button>Submit</button> */}
            </form>
        </div>
     );
}

export default Login;