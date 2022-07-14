import React, { useEffect, useState } from 'react'

const SearchAppBar = ({onSearch}) => {

  const [enteredPokemon, setEnteredPokemon] = useState("");



  const inputPokemon = (event) => {
    event.preventDefault()
    setEnteredPokemon(event.target.value)
  }

  // const fetchPokemon = async (pokemon) => {
  //   let url =  `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   return data
  // }

  const searchPokemon = async (event) => {
    event.preventDefault()
    // const pokemonFound = await fetchPokemon(enteredPokemon)
    // console.log(pokemonFound);
    onSearch(enteredPokemon)
    // useEffect(() => {
    //   setEnteredPokemon('')
    // }, [])
    

  }

  return (
    <div>
      <div>
      <input type="text" placeholder='Search a Pokemon...' onChange={(event) => inputPokemon(event)}/>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded shadow" onClick={(event) => searchPokemon(event)}> search </button>
      </div>
    </div>
  )
}

export default SearchAppBar
