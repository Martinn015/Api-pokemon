import React, {useEffect, useInsertionEffect, useState} from "react"

const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [titulo, setTitulo] = useState("^^^^^Lista Pokemon^^^^^")


//    useEffect(() => {
//        console.log("Soy el userEffect gatillandose ;0")
//    },[titulo])

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(res => res.json())
        .then(
            (data) => {
                setPokemons(data.results)
            }
        )
    })
       
    
    
    return (
        <>
            {titulo}
           
            {pokemons.map((pokemon) => {
                return(<div>{pokemon.name}</div>)
            })}
            ^^^^^Fin Lista Pokemon^^^^^ 
        </>
    )
}

export default Pokemon