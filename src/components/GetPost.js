import React, { useState, useEffect } from 'react'
import '../Styles/login.css';


export default function GetPost (){

  const [post, setPost] = useState()

  

const handlePost = (e) => {

    var storage = localStorage.getItem('token')
  var storage2 = JSON.parse(storage)

var requestOptions = {
    method: 'GET',
    headers:{
  
        'Authorization': `Bearer ${storage2.access_token}`
    },
    redirect: 'follow'
  };
  
  fetch("http://front-test.vinixcode.cloud:8000/api/v1/post", requestOptions)
    .then(response => response.text())
    .then(localStorage.removeItem('post'))
    .then(response => {localStorage.setItem('post', response);})
    .catch(error => console.log('error', error));


 }

var showpost = localStorage.getItem('post')
 var showpost3 = JSON.parse(showpost)




return(

    <div >
    <button className="buttons" onClick={(e) => handlePost(e)}type='submit' placeholder='submit' value='getPost'>Get Post</button>
  

    <ul>
      { 
      !showpost3 ? 'Cargando...' :
      showpost3.map((element) => {
        return <div key='element'><li>{element.title}</li><li>{element.body}</li></div>
      })
 
      }
    </ul>


    </div>
)



}