import React, {useState, useEffect } from "react";
import { postCharacter, getEpisodes } from "../redux/actions";
import {useDispatch,  useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import {useHistory} from 'react-router-dom'


export default function CharacterCreate() {

    const dispatch = useDispatch()
    // const history = useHistory() 
    const episodes = useSelector((state) => state.episodes)
    const [input, setInput] = useState({
        name: '',
        species: '',
        origin: '',
        image: '',
        episodes: [],
    })
console.log(episodes)
    useEffect(() => {
        dispatch(getEpisodes());
    }, [dispatch]);


const handleChange=(e) =>{
    setInput({
        ...input,
        [e.target.name] : e.target.value,
    })
}



const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCharacter(input))
    alert('Personaje Creado')
    setInput({
        name: '',
        species: '',
        origin: '',
        image: '',
        episodes: [],
        
    }) 
}


const handleSelect = (e) =>{
    setInput({
        ...input, 
        episodes: [...new Set( [...input.episodes, e.target.value])]
    })

}
     
  return (
   <div>
   <br></br>
            <Link to='/'><button>Volver</button></Link>
            <h1>Crea Tu Perro</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
            <label>Nombre</label>
                    <input
                    type= 'text'
                    value= {input.name}
                    name= 'name'
                    onChange={(e) => handleChange(e)}
                    placeholder='Nombre'
                    />
            </div>
            <div>
            <label>Especie</label>
                    <input
                    type= 'text'
                    value= {input.species}
                    name= 'species'
                    onChange={(e) => handleChange(e)}
                    placeholder= 'Especie'
                    />
            </div>
            <div>
            <label>Origen</label>
                    <input
                    type= 'text'
                    value= {input.origin}
                    name= 'origin'
                    onChange={(e) => handleChange(e)}
                    placeholder='Origen'
                    />
            </div>
            <div>
            <label>Imagen</label>
                    <input
                    type= 'text'
                    value= {input.image}
                    name= 'image'
                    onChange={(e) => handleChange(e)}       
                    placeholder='Imagen/url'
                    />
            </div>
           
            

            
<select  onChange={(e) => handleSelect(e)}>
<option value=""  default>seleciona una opcion</option>
            { episodes?.map((e, i)=> {
                return(
                    <>
                    <option key={i} value= {e.name}>{e.name}</option>
                    </>
                )
            })}
</select>
            <p>{input.episodes.map(e => e + " ,")}</p>


<button type="submit">enviar</button>




        </form>
   </div>
  )
        }
    //e tiene una propiedad que es target,  e.target tiene propiedades 
  //onchange = es el que va a estar pendiente de lo que pase detro del input