import React, { useEffect, useState } from "react"



const Pokemon = (props) => {

    const[pokemon, setPokemon] = useState("")
    const[Search, setSearch] = useState("")
    const[Texto, setTexto] = useState("")
    const[image, setImage] = useState("")
    const[imageShiny, setImageShiny] = useState("")
    const[imageBack,setBackimage] = useState("")
    const[imageBackShiny,setBackimageShiny] = useState("")
    

    useEffect (() => {
        fetch ("https://pokeapi.co/api/v2/pokemon/"+ Search)
            .then(res => res.json())
            .then(
                (data) => {
                    setPokemon(data)
                    setImageShiny(data.sprites.front_shiny)
                    setImage(data.sprites.front_default)
                    setBackimage(data.sprites.back_default)
                    setBackimageShiny(data.sprites.back_shiny)
                }
                )
        }   ,[Texto])
     
            
        const handleChange = (e) => {
            setSearch(e.target.value)
        }

        const clickUsuario = (event) => {
            setTexto(Search)
        }
        

        

    

    return(
        <> 
        <img src={image}/>
        <img src={imageBack}/>
        <p ></p>
        <input type={props} onChange={ (e) => {handleChange(e) }}/>
        <button type= "button" onClick ={clickUsuario}>Search</button>
        
        
        

        
        <p>Name:</p>
        <p >{pokemon.name} </p>
        
        <p>Weight:</p>
        <p>{pokemon.weight}</p>


        <p>Abilities:</p>
        
        {pokemon.abilities?.map((Abilities, pkm) => {
            return(<div  key={pkm}>{Abilities.ability.name}</div>)
        })}

        
        <p>Base XP:</p>
        <div > {pokemon.base_experience}</div>
        

        <p>Moves:</p>
        {pokemon.moves?.map((Moves, pkm) => {
            return(<div key={pkm}>{Moves.move.name}</div>)
        })}

        <p>Stats:</p>
        {pokemon.stats?.map((Stats, pkm) => {
            return(<div  key={pkm}>{Stats.stat.name}: {Stats.base_stat}</div>)
        })}
        </>
    )
}

export default Pokemon