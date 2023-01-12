import React from 'react'
import { Link } from 'react-router-dom'
import style from './home.module.css'


const Homecrud = () => {
  return (
    <div>
    <section id={style.nav}>
        <Link to="/create-user"> Create-User </Link>
        <Link to="/user"> User </Link>
    </section>

    
    </div>
  )
}

export default Homecrud