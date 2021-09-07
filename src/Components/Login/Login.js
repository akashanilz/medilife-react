import axios from '../axios';
import React from 'react'
import { useState } from 'react';

function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e)=>{
            e.preventDefault();
            const data = {
                name:name,
                password:password,
                email:email
            }
            axios.post("/register",data).then((response)=>{
                console.log(response.data);
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" name="name" />
                <br />
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="email" />
                <br />
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
