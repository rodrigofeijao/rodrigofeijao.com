import axios from 'axios'

/**
 *  Import Api Key
 */
import apikey from '../../config/api'

export function fetchMovies() {
    return {
        type    : "FETCH_MOVIES",
        payload : axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key="+apikey) 
    }
}