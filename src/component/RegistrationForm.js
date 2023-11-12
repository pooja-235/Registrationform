import React, { useState } from 'react'
import Register from './Register.css'

export const RegistrationForm = () => {

    const[username,setUserName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('submitted data',{username,email,password})
        setEmail('')
        setPassword('')
        setUserName('')
        setPhone('')
    }
  return (
    <div className="container">
        <h2>Registration Form</h2>
       <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor ="username">username</label>
                <input type ='text' name='username' id='username' placeholder='type username' value={username} onChange={(e)=>setUserName(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor ="email">email</label>
                <input type ='text' name='email' id='email' placeholder='type email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor ="phone">phone</label>
                <input type ='text' name='phone' id='phone' placeholder='type phone' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor ="password">password</label>
                <input type ='text' name='password' id='password' placeholder='type password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <div>
                 <button type="submit">Submit</button>
            </div>
       </form>
    </div>
  )
}

