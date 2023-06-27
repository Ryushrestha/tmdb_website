import axios from "axios";

// export const getPopularMovies = async () =>{
//         const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8bab6fb009a45a203252c92e2d45640d')
//         const data = response.data
//         const results = data.results
//         return results
// }

export const getNowPlayingMovies = async() =>{
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8bab6fb009a45a203252c92e2d45640d')
        const data = response.data
        return data
}