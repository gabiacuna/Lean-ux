import React from 'react'


import NavBar from '../components/nav_bar'

import StaticDatePickerLandscape from '../components/calendar'
import { StyledEngineProvider } from '@mui/material/styles'
import Gallery from '../components/card'

export const InternalPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>usm.cl</h1>
      <NavBar />

      <h2>Eventos</h2>
    
      <div className='rowC'>
        
        <StyledEngineProvider injectFirst>
          <StaticDatePickerLandscape/>
        </StyledEngineProvider>
        <Gallery/>

      </div>
    </div>
  )
}

export default InternalPage
