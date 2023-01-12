import axios from "axios";
import React, { useState } from "react";
import style from "./home.module.css";
import { useNavigate} from 'react-router-dom'

const Createuser = () => {
  let [name , setName] =useState("")
  let [sal , setSal] =useState("")
  let [company , setCompany] =useState("")
  let Navigate = useNavigate()

  let nameData=(e)=>{
    setName(e.target.value)
  }
  let salData=(e)=>{
    setSal(e.target.value)
  }
  let companyData=(e)=>{
    setCompany(e.target.value)
  }


  let FormHandle =(e) =>{
    e.preventDefault()
    // console.log(name);
    // console.log(sal);
    // console.log(company);
    let payload ={name,sal,company}
    axios.post("http://localhost:3000/users",payload)
    .then(()=>{console.log("data has been added");})
    Navigate("/user")
    
  }
  
  return (
    
        <div id={style.box}>
          <form >
            <p>Employe Details</p> 

            <label>Emp-name</label>
            <input type="text" value={name} onChange={nameData}/>

            <label>Emp-Sal</label>
            <input type="number" value={sal} onChange={salData}/>

            <label>Emp-Company</label>
            <input type="text" value={company} onChange={companyData}/>
            
            <button onClick={FormHandle}>submit</button>
          </form>
        </div>
  );
};

export default Createuser;
