import React from 'react'
import Gallery from '../components/card'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import NavBar from '../components/nav_bar'

export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>usm.cl</h1>
      <NavBar />
      <h2>Página de Inicio</h2>
      <p>Contenidos normales de la página <a href="www.usm.cl">usm.cl</a></p>
      <div>
      <div className='rowC2'>
          <h1>Eventos próximos</h1>
          <Button size='small' variant="contained" href="\internal" sx={{height: 50}}>Ver Todo</Button>
      </div>
      <Gallery /> 
      </div>
    </div>
  )
}

export default HomePage
