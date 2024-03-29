import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import { CardPokemon } from '../components'

export const SearchPage = () => {

  const location = useLocation()

  const {globalPokemons} = useContext(PokemonContext)
  const filteredPokemons = globalPokemons.filter(pokmeon => pokmeon.name.includes(location.state.toLowerCase()))
  console.log(filteredPokemons)

  return (
    <div className="container">
      <p className="p-search">
        We found <span>{filteredPokemons.length}</span> results:
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemons.map(pokemon => (
        <CardPokemon pokemon={pokemon} key ={pokemon.id}/>
        ))}
      </div>
    </div>
  )
}
