import React,{useState, Fragment} from "react";
import Pokemon from "../Pokemon/Pokemon";

const Historial = () => {

    const[historial, Pokemon] = useState([])

    return (
        <>
            {
                historial.map((pkm) =>
                <p>{pkm}</p>
                )
            }  
            
            
            
            
         
        </>
    )
}

export default Historial