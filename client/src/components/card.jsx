import React from 'react'


export default function Card({name, species, origin, image}) {      //destructurin es=props
    
  return (

    <div >
    <h1 >{name} </h1>
    <img src={image} alt='algo'/>
    <p>{species}</p>
    <p>{origin}</p>
    </div>
  )
}