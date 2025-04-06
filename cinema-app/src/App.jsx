import { useState } from 'react';
import { movies as allMovies } from './data/movies';
import MovieList from '../src/components/MovieList';
import './index.css';

const App = () => {
  const [search, setSearch] = useState("");

  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">і
      <input
        type="text"
        placeholder="Пошук за назвою..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
