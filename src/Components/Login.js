import React, { useEffect, useState } from 'react'
import "../Assets/Css/Login.css"
import validation from './Validation'

function Login() {
 
 const [values , setvalue] = useState({
  firstname:"",
  email:"",
  password:"",


 })

 const [errors , seterrors] = useState({})

//  function handlechanges(e){
//   setvalue({...values, [e.traget.name]: e.traget.value });

//  }

 function handlechanges(e) {
  setvalue({ ...values, [e.target.name]: e.target.value });
}

 
function handlesubmit(e) {
  e.preventDefault();
  seterrors(validation(values));
}

useEffect(()=> {
  if(Object.keys(errors).length === 0 && (values.firstname !== "" && values.email !== "" && values.password !== "") ){
    alert("login succesfull")
  } 
},[errors])
 
  return (
    <>
  <div className='container login'>
    <form onSubmit={handlesubmit}>
      <input type='text' placeholder='Firstname' name='firstname' value={values.firstname}  onChange={handlechanges}/>
      {errors.firstname && <p style={{color:"red"}}>{errors.firstname}</p>}
      <input type='email' placeholder='Enter Email' name='email' value={values.email} onChange={handlechanges}/>
      {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
      <input type='password' placeholder='Enter The Password' name='password' value={values.password} onChange={handlechanges}/>
      {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
      <br></br><button style={{fontSize:"larger"}}>login in</button> 
    </form>
  </div>
    </>
  )
}

export default Login