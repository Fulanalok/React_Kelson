import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to="/">Inicial</Link><br/>
        <Link to="/Faculdade">Faculdade</Link><br/>
        <Link to="/dpo">Dpo</Link><br/>
        <Link to="/Noticias">Noticias</Link><br/>
    </div>
  )
}

export default NavBar