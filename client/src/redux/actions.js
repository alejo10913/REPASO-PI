import axios from "axios"
export const GET_CHARACTER = 'GET_CHARACTER'
export const POST_CHARACTER = 'POST_CHARACTER'
export const GET_EPISODES = 'GET_EPISODES'


export const getCharacter = () => {
    return async (dispatch) => {
         const json = await axios.get(`http://localhost:3001/characters`)
         return dispatch({
            type: GET_CHARACTER,
            payload: json.data
         })
        }
    }

export const postCharacter = (payload) => {
    return async (dispatch) => {
         await axios.post(`http://localhost:3001/characters`, payload)
        // var json = await axios.post(`http://localhost:3001/characters`, payload)
        // return dispatch({
        //     type: POST_CHARACTER,
        //     payload: json.data
        // })
    }
}
export const getEpisodes = () => {
    return async (dispatch) => {
        var info = await axios('http://localhost:3001/episodes')
        return dispatch({
            type: GET_EPISODES, 
            payload: info.data})
     }
}