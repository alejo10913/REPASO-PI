const axios = require('axios')
const {Character, Episode} = require("../db")

const getApicharacters= async()=>{
    try {
      const allCharacters = [] 

      let apiUrl = "https://rickandmortyapi.com/api/character"
        for(let i = 0; i <= 4; i++){
          let apiData = await axios.get(apiUrl)
         
      
        apiData.data.results?.forEach((el) => {
          return allCharacters.push({
            id: el.id,
            name: el.name,
            species: el.species,
            origin: el.origin.name,
            image: el.image,
            characterApi: true,
          });
        });
       
       apiUrl=apiData.data.info.next
      }
      console.log(allCharacters)
      return allCharacters
    } catch (error) {
        console.log(error)
    }
}


const getDbcharacters = async() =>{
  return await Character.findAll({
    include:{
      model: Episode,
      attributes: ["name"],
      through: {
        attributes:[],
      }
    }
  })
}


const getAllInfo = async () =>{
  try {
    const dbInfo = await getDbcharacters();
    const apiInfo = await getApicharacters();

    const InfoTotal =dbInfo?.concat(apiInfo);
    return InfoTotal;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {getApicharacters, getDbcharacters, getAllInfo}