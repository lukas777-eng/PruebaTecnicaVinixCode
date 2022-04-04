import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../Styles/login.css';

export default function Login(){

  const history = useHistory();                                                       // mètodo del
  
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name] : e.target.value,
    })
  };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(login.email)
        console.log(login.password)

        var formdata = new FormData();
        formdata.append("email", login.email);
        formdata.append("password", login.password);
    
    
        var requestOptions = {
         method: 'POST',
         body: formdata,

         redirect: 'follow',
         };

         fetch("http://front-test.vinixcode.cloud:8000/api/auth/login", requestOptions)
               .then(response => response.text())
               .then(response => {localStorage.setItem('token', response);})
               .catch(error => console.log('error', error));

          history.push('/user-profile')   

    };


   
    // useEffect(() => {

    //   handleSubmit()
    //     }, [])



    return (
            <form  className="form-login" method='post' action='/login' onSubmit={(e) => handleSubmit(e)} >
              <h5>Login</h5>
                <input className="controls" type="email" name='email' autoComplete="on" autoFocus  placeholder="Email" required size="32" maxLength="64" value={login.email}   onChange={(e) => handleChange(e)}/>
                <input className="controls" type="password" name='password' value={login.password}  placeholder="Password" onChange={(e) => handleChange(e)} />
                <button className="buttons" type='submit' value='Login'>Login</button>
                <Link to='/register'><button className="buttons">Sign Up</button></Link>
            </form>
    )
}
