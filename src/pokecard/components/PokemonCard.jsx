import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Grid, Paper} from '@mui/material'
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import { Box, Container } from '@mui/system';
import SearchAppBar from '../../login/searchbar/SearchAppBar';
import { fetchPokemon } from '../../actions/PokeActions';
import { useNavigate } from 'react-router-dom';

const PokemonCard = () => {

  const {logged} = useSelector((state) => state.logged)

  const [pokemon, setPokemon] = useState([]);
  const [isSeeingAPokemon, setIsSeeingAPokemon] = useState(false)
  const navigate = useNavigate();

  const APIURL = "https://pokeapi.co/api/v2/pokemon?limit=50"

  useEffect(() => {
      getAllPokemons();
  }, [])

  const getAllPokemons = async () => {
    axios.get(`${APIURL}`).then(response => {
      for (let i=0; i<response.data.results.length; i++){
        axios.get(response.data.results[i].url)
        .then(eachPokemon => {setPokemon(pokemonArray => [...pokemonArray, eachPokemon.data])})
      }
    })
  }

  const onSearch = async(pokemon) => {
    if(!pokemon){
      setIsSeeingAPokemon(false)
      return getAllPokemons()
    }
    const pokeFound = await fetchPokemon(pokemon)
    if(pokeFound !== false){
      setIsSeeingAPokemon(true)
      setPokemon([pokeFound])
    } else {
      return setPokemon([])

    }
  }

  const seePokemon = async(pokeName) => {
    setIsSeeingAPokemon(true)
    console.log("You've been clicked on ", pokeName);
    const pokeFound = await fetchPokemon(pokeName)
    if(pokeFound !== false){
      setPokemon([pokeFound])
    } else {
      setIsSeeingAPokemon(false)
      return setPokemon([])

    }
  }

  const backToPokeList= (e) => {
    e.preventDefault()
    setIsSeeingAPokemon(false)
    return getAllPokemons()
  }

  return (

    <div>
      {logged !== false ?
        <>
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <img className="h-8 w-20" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Workflow" />
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <SearchAppBar onSearch={onSearch}/>
              <div className="px-4 py-6 sm:px-0">
              <Container maxWidth='lg' component={Paper} elevation={8}>
                <Grid container spacing={2}>
              {pokemon.map((poke, index) => (
                <Grid key={index} item xs={12} sm={4}>
                  <Card onClick={() => seePokemon(poke.name)}>
                    <CardActionArea>
                      <CardContent>
                        <CardMedia style={{height: "40vh"}} image={poke.sprites.front_default}/>
                        <Box sx={{display: "flex", justifyContent: 'center', marginBottom: '2vh'}}>
                        <Typography align='center' variant='button' style={{color: "#FFC300"}}>{poke.name}</Typography>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                          {poke.types.map(eachType => <Typography key={index} align='left' variant='button' style={{color: "#B533FF"}}>{eachType.type.name}</Typography>)}
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  {isSeeingAPokemon &&
                  <div className="px-4 py-6 sm:px-0">
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={(e) => backToPokeList(e)}> Back to the PokeList </button>
                  </div>
                }
                </Grid>
              ))}
              </Grid>
              </Container>
              </div>
            </div>
          </main>
        </> : <></>}
    </div>
  )
}


export default PokemonCard
