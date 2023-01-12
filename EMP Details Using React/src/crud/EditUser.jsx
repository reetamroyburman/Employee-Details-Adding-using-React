import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import desgine from "./home.module.css"

const EditUser=()=>{
    let [name,setName] = useState("")
    let [sal,setSal]=useState("")
    let [company,setCompany]=useState("")
    let {index} = useParams()
    let navigator=useNavigate()

    console.log(index);

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((x)=>{
            // console.log(x.data);
            setName(x.data.name)
            setSal(x.data.sal)
            setCompany(x.data.company)

        })
    },[])


    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,sal,company}
        axios.put(`http://localhost:3000/users/${index}`,payload)
        .then(()=>{
          console.log("Added");
          
        })
        navigator("/user")
    }
    return(
        <form id={desgine.frm} >
            <h2>Edit User</h2>
            <label htmlFor="">Emp Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} required /><br />
            <label htmlFor="">Emp salary</label>
            <input type="number" onChange={(e)=>setSal(e.target.value)} value={sal} required/><br />
            <label htmlFor="">Emp Company</label>
            <input type="text" onChange={(e)=>setCompany(e.target.value)} value={company} required/><br /><br />
            <button onClick={formHandle}>Submit</button>
      </form>
    )
}

export default EditUser