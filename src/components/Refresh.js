import React, { useEffect } from 'react';
import '../Styles/login.css';


export default function Refresh(){


    var storage = localStorage.getItem('token')
  console.log(storage)
  var storage2 = JSON.parse(storage)

  const handleRefresh = () => {

    var requestOptions = {
        method: 'POST',
        headers:{
            'Authorization': `Bearer ${storage2.access_token}`
        },
        redirect: 'follow'
      };

      fetch("http://front-test.vinixcode.cloud:8000/api/auth/refresh", requestOptions)
        .then(response => response.text())
        .then(result => {localStorage.setItem('token', result);})
        .catch(error => console.log('error', error));

  }


  useEffect(() => {
      handleRefresh()
  }, [])
    return(
        <div className="form-login"><button  className="buttons" onClick={handleRefresh}>refresh</button></div>
    )
}

