import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import Refresh from './Refresh';
import '../Styles/login.css';


export default function Profile(){



  const submit = (e) => {


  var storage = localStorage.getItem('token')
  console.log(storage)
  var storage2 = JSON.parse(storage)

  var requestOptions = {

    method: 'GET',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${storage2.access_token}`
    },
    redirect: 'follow',
    };

  fetch("http://front-test.vinixcode.cloud:8000/api/auth/user-profile", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



    return (

      <form className="form-login" method='post' action='/post' onSubmit={(e) => submit(e)} >
       <Link to='/add-post'><button className="buttons">Add Post</button></Link>
       <Link to='/get-post'><button className="buttons"> Get Post</button></Link>
       <Link to='refresh'><button className="buttons">refresh</button></Link>
       <Link to='/'><button className="buttons" onClick={Logout}>Logout</button></Link>

      </form>
    )
}


