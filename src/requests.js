const KEY = "8a36975b4bc70fda85b6386d1ad3d4ed";

const requests = {
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${KEY}&with_networks=213`,
    fetchMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`,
    fetchTv: `https://api.themoviedb.org/3/tv/popular?api_key=${KEY}&language=en-US&page=1`,
    fetchtrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`,
    fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=35`,
}

export default requests;