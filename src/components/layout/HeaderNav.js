import React from 'react'
import { NavLink } from 'react-router-dom'
const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>C</span>
        <h2>
            cristian
        </h2>
        </div>
      <nav>
        <ul>
            <li>
            <NavLink to= '' className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink>
            </li>
            <li>
            <NavLink to= '/contacto'  className={({isActive}) => isActive ? 'active' : ''}>Contacto</NavLink>
            </li>
            <li>
            <NavLink to= '/portfolio'  className={({isActive}) => isActive ? 'active' : ''}>Portfolio</NavLink>
            </li>
            <li>
            <NavLink to= '/servicios'  className={({isActive}) => isActive ? 'active' : ''}>Servicios</NavLink>
            </li>
            <li>
            <NavLink to= '/curriculum'  className={({isActive}) => isActive ? 'active' : ''}>Curriculum</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderNav
