import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import Contacto from '../components/Contacto'
import Curriculum from '../components/Curriculum'
import Inicio from '../components/Inicio'
import Footer from '../components/layout/Footer'
import HeaderNav from '../components/layout/HeaderNav'
import Portafolio from '../components/Portafolio'
import Servicios from '../components/Servicios'

const MisRutas = () => {
  return (
 <BrowserRouter>
 <HeaderNav />

<section className='content' >

 <Routes>

<Route path='/' element= {<Inicio />}/>
<Route path='/inicio' element= {<Inicio />}/>
<Route path='/portfolio' element= {<Portafolio />}/>
<Route path='/curriculum' element= {<Curriculum />}/>
<Route path='/contacto' element= {<Contacto />}/>
<Route path= '*' element= {<h1>Error pagina inexistente</h1>} />

 </Routes>

 </section>
 
 <Footer />
 </BrowserRouter>
  )
}

export default MisRutas
