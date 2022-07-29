import React from "react";


export default function Card({name, species, origin,image}){
    return(
        <div>
            <h1>{name}</h1>
            <img src="{image}" alt="imagen de personaje" />
            <p>{species}</p>
            <p>{origin}</p>
        </div>
    )
}