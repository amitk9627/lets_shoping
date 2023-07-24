import React, { useState } from 'react'
import {Navbar }from "../component/Navbar"

const Contact = () => {
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const [query,setQuery]=useState("");
    const [error,setError]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
       
        if(email.includes('@') ){
           setError(false)
         alert(`name : ${name} , email : ${email} , query : ${query}` );
        }else{
             setError(true);
        }

    }
  return (<>
  <Navbar/>
    <div >
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh"}}>
     <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='name' id='name' value={name} onChange={(e)=>setName(e.target.value)} />
       
        <br/>

        <label htmlFor='email'>Email</label>
        <input type="text" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
      <p> {error ? " @ not present in email " :""}</p>
        <br/>

        <textarea value={query} onChange={(e)=>setQuery(e.target.value)}></textarea>
      
        <br />
        <button type='submit'>Submit</button>
     </form>
     </div>
    </div>
    </>
  )
}

export default Contact
