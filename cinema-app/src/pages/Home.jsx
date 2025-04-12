import { useState } from 'react';
import { movies as allMovies } from '../data/movies';
import MovieList from '../components/MovieList';
import Sidebar from '../components/Sidebar';


const Home = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("Усі");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const genres = ["Усі", ...new Set(allMovies.map((m) => m.genre.split(", ")[0]))];

  const filteredMovies = allMovies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genre === "Усі" || movie.genre.includes(genre);
    return matchesTitle && matchesGenre;
  });

  const handleGenreChange = (newGenre) => {
    setGenre(newGenre);
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      {!sidebarOpen && (
        <button className="toggle-sidebar-btn" onClick={() => setSidebarOpen(true)}>
          ☰ Фільтри
        </button>
      )}
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}

      <Sidebar
        isOpen={sidebarOpen}
        genres={genres}
        selectedGenre={genre}
        onGenreChange={handleGenreChange}
      />

      <div className="content">
        <input
          className="search-input"
          type="text"
          placeholder="Пошук за назвою..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MovieList movies={filteredMovies} />
      </div>
    </div>
    
  );
};

export default Home;
