import React from 'react'
import { useHistory } from 'react-router-dom';
import '../Styles/login.css';



export default function Logout() {

    const history = useHistory();

    var storage = localStorage.getItem('token')
    console.log(storage)
    var storage2 = JSON.parse(storage)

    const handleOut = () => {

    var requestOptions = {
        method: 'POST',
        headers:{
            'Authorization': `Bearer ${storage2.access_token}`
        },
        redirect: 'follow'
      };
      
      fetch("http://front-test.vinixcode.cloud:8000/api/auth/logout", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        localStorage.removeItem('token')
          history.push('/')

    }

        return(
            <div className="form-login">
                 <button className="buttons" onClick={handleOut}>Logout</button>
            </div>
        )
}