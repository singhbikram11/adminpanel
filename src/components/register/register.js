import React, { useState } from 'react'
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser ] = useState({
        name: "",
        email:"",
        password: "",
         role:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const register = () => {
        const { name, email, password, role  } = user
        if( name && email && password && role){
              axios.post("http://localhost:9002/register", user)
              .then( res => {
                  alert(res.data.message)
                   history.push("/login")
            })
        } else{
            alert("invalid input")
        }
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange= { handleChange }></input>

            <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange= { handleChange }></input>

            <input type="password" name="password" value={user.password} placeholder="enter your password" onChange= { handleChange }></input>

            {/* <input type="text" name="role" value={user.role} placeholder="Select role" onChange= { handleChange }></input> */}
            <select name="role" id="role" onChange={handleChange}>
                <option value="">Select role</option>
                <option value="admin">Admin</option>
                <option value="receptionist">Receptionist</option>
                <option value="telecaller">Telecaller</option>
            </select>
            <div className="button" onClick = {register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
       
    )
}
export default Register