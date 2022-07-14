import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './login/components/Login'
import { BrowserRouter } from 'react-router-dom'
import PokeRoutes from './routes/PokeRoutes'

function App() {

  return (
    <BrowserRouter>
      <PokeRoutes/>
    </BrowserRouter>
  )
}

export default App
