import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createuser from "./crud/Createuser";
import EditUser from './crud/EditUser';
import Homecrud from "./crud/Homecrud";
import Lifecycle from './crud/Lifecycle';
import User from "./crud/User";


const App = () => {

  let [state, Setstate]=useState(true)
  return (
    <div>
        <BrowserRouter>
        <Homecrud />
        <Routes>  
          <Route path="/Create-user" element={<Createuser />} />
          <Route path="/user" element={<User />} />
          <Route path="/e/:index" element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>

      <button onClick={()=>{Setstate(true)}}>mount component</button>
      <button onClick={()=>{Setstate(false)}}>unmount component</button>
      {state?<Lifecycle/>:null}
    </div>
  )
}

export default App