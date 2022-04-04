import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/login.css';




export default function RegisterUser(){

    const [input, setInput] = useState({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    })
 

    const handleChange = (e) => {
        e.preventDefault();
        setInput({
          ...input,
          [e.target.name] : e.target.value,
        })
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Enviando Datos...')

      var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    console.log(input.name)
    console.log(input.email)
    console.log(input.password)
    console.log(input.password_confirmation)

    var formdata = new FormData();
    formdata.append("name", input.name);
    formdata.append("email", input.email);
    formdata.append("password", input.password);
    formdata.append("password_confirmation", input.password_confirmation);



    var requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: formdata,
     redirect: 'follow'
    };


       fetch("http://front-test.vinixcode.cloud:8000/api/auth/register", requestOptions)
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', error));
    

    };

    


     useEffect(()=> {
      setInput(input)
     }, [])

    return (

    <div>
       <form  className="form-login" method='post' action='/register' onSubmit={(e) => handleSubmit(e) }>
         <h5>Registrate</h5>
         <input className="controls" name='name' placeholder='Name' value={input.name}  onChange={(e) => handleChange(e)} />
         <input  className="controls" type='email' name='email' placeholder='Email' value={input.email}   onChange={(e) => handleChange(e)} />
         <input className="controls" type='password' name='password' placeholder='password' value={input.password}  onChange={(e) => handleChange(e)} />
         <input className="controls" type='password_confirmation' name='password_confirmation' placeholder='password_confirmation' value={input.password_confirmation}  onChange={(e) => handleChange(e)} />
         <button className="buttons" type='submit' placeholder='submit' value='register' >Register</button>
         <Link to='/'><button className="buttons" placeholder='Cancel'>Cancel</button></Link>
       </form>
    </div>
    )
}