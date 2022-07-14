import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LogOut from '../login/components/LogOut'
import NavBarIn from '../navbars/NavBarIn'
import NavBar from '../navbars/NavBarIn'
import NavBarOut from '../navbars/NavBarOut'
import { Link, Route, Routes } from "react-router-dom";
import PokemonCard from '../pokecard/components/PokemonCard'

const PokeRoutes = () => {

  const {logged} = useSelector((state) => state.logged)


  return (
    <div>
      {logged == false?
        <NavBarOut/>
        : <NavBarIn/>
      }
      
      <Routes>
        <Route path='/pokelist' element={<PokemonCard/>}/>
      </Routes>
    </div>
  )
}

export default PokeRoutes
