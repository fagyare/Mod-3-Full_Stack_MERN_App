import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userRegister } from "../../services/userService";

let emptyForm = { 
    username: '',
    password: '',
    email: ''
}
//
const departments = ['Development', 'Finance', 'Operations', 'Marketing', 'Programs'];
const deptOptions = departments.map((dept, i) => {
    return <option key={i} value={dept}>{dept}</option>
});

function Register({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = await userRegister(form)

        if (!token) {
            setForm(emptyForm)
            return
        }

        localStorage.setItem("token", token)

        const user = await userInfo()
        setUser(user)

        navigate('/posts')
    }

    return ( 
       
        <div className="user-auth">
          <h1>Register</h1>
           
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Firstname"
                    type="text" 
                    id="firstName"
                    name="firstname"
                    onChange={handleChange}
                    value={form.firstName}
                />
                <input 
                    placeholder="Lastname"
                    type="text" 
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    value={form.lastName}
                />
                <input 
                    placeholder="username"
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <input 
                    placeholder="email"
                    type="email" 
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
                <input 
                    placeholder="password"
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <select name="department" id="" placeholder="Select Department" onChange={handleChange}>
                    <option value=""></option>
                    { deptOptions }
                </select>
                <button className="btn btn-outline-dark">Submit</button>
            </form>
        </div>
     );
}

export default Register;