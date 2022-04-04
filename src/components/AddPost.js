import { useState, useEffect } from "react"
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../Styles/login.css';



export default function AddPost (){

    // const history = useHistory();




    const [input2, setInput2] = useState({
      
        title: "",
        body: ""

      })

      const handleChange = (e) => {
          e.preventDefault();
          // console.log(e.target.name)
          // console.log(e.target.value)
          setInput2({
            ...input2,
            [e.target.name] : e.target.value,
          })
      };
      // var rawBody = JSON.stringify(input.body)
      // console.log(rawBody)
      // var raw = `\n${rawTitle}` 
      // var raw = {"\n"  " \"title\":\"Test Title\","\n"   \"body\":\"This body\"\n"};
      // "{\"title\":\"sdsd\",\"body\":\"sdsd\"}"
      // "{\"title\":\"Test Title\",\"body\":\"This body\"}"
  console.log(input2)
      var raw = JSON.stringify(input2);

      //  var raw = {  `${raww.title}`, `${raww.body}` }
  
    //   {
    //     "title":"Test Title",
    //     "body":"This body"
    //  }

const handleSubmit = (e) => {
    // e.preventDefault();
    console.log('Enviando Datos...')

    var storage = localStorage.getItem('token')
    var storage2 = JSON.parse(storage)

var requestOptions = {
  method: 'POST',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storage2.access_token}`
  },
  body: raw,
  redirect: 'follow'
};

fetch("http://front-test.vinixcode.cloud:8000/api/v1/post", requestOptions)
  .then(response => response.text())
  .then(result => {localStorage.setItem('post2', result);})
  .catch(error => console.log('error', error));

  // history.push('/get-post')

}

useEffect(()=> {
handleSubmit()
 }, [input2])

return(
        <form className="form-login" method='post' action='/post' onSubmit={(e) => handleSubmit(e) }>
        <input className="controls" name='title' placeholder='title' value={input2.title} onChange={(e) => handleChange(e)} />
        <input className="controls" name='body' placeholder='body' value={input2.body} onChange={(e) => handleChange(e)} />
        <Link to='/get-post'><button className="buttons" onSubmit={(e) => handleSubmit(e)} type='submit' placeholder='submit' >Send Post</button></Link>
        </form>

)

}
