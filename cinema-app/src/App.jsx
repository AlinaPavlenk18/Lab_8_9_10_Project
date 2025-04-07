import { useState } from 'react';
import { movies as allMovies } from './data/movies';
import MovieList from '../src/components/MovieList';
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import './index.css';

const App = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("Усі");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Витягуємо унікальні жанри
  const genres = ["Усі", ...new Set(allMovies.map((m) => m.genre.split(", ")[0]))];
   // Фільтрація за назвою та жанром
   const filteredMovies = allMovies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genre === "Усі" || movie.genre.includes(genre);
    return matchesTitle && matchesGenre;
  });

  const handleGenreChange = (newGenre) => {
    setGenre(newGenre);
    setSidebarOpen(false); // Автоматичне закриття після вибору
  };

  return (
    <>
    <Header/>
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
      <input
        type="text"
        placeholder="Пошук за назвою..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <MovieList movies={filteredMovies} />
    </div>
    </>
  );
};

export default App;
