import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'



const User = () => {
  let [contant,setContant]=useState([])
  useEffect(()=>{axios.get("http://localhost:3000/users").then((response)=>{setContant(response.data)})},[])
  console.log(contant);

  
  let deletedata=(x)=>{
    axios.delete(`http://localhost:3000/users/${x}`) 
    window.location.assign("./user")}

  return (
    <section id={style.outerbox}>
      {
        contant.map((x)=>{
          return(
            <div key={x.id} id={style.userbox}>
              <h1>ID: {x.id} </h1>
              <h1>Name: {x.name}</h1>
              <h1>Salary: {x.sal}</h1>
              <h1>Company Name: {x.company}</h1>
              <button><Link to={`/e/${x.id}`}>Edit</Link></button> 
              <button onClick={()=>{deletedata(x.id)}}>Delete</button>
            </div>
          )
        })
      }
    </section>
  )
}

export default User