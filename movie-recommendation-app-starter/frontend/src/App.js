import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=YOUR_TMDB_API_KEY")
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Popular Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {movies.map(movie => (
          <div key={movie.id} className="bg-gray-100 p-2 rounded">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h2 className="text-lg">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
