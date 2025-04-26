import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';
import MovieModal from '../components/MovieModal';
import '../styles//Popular.css';

const Popular = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem('bookings')) || {};
    const bookingCounts = movies.map((movie) => {
      const bookings = allBookings[movie.id] || [];
      const seats = bookings.flatMap((b) => b.seats || []);
      return {
        ...movie,
        bookedCount: seats.length,
      };
    });

    const sorted = bookingCounts
      .filter(m => m.bookedCount > 0)
      .sort((a, b) => b.bookedCount - a.bookedCount)
      .slice(0, 5); // показуємо тільки топ-5

    setTopMovies(sorted);
  }, []);

  const handleBookNow = (id) => {
    document.querySelector('.movie-modal')?.classList.add('fade-out');
    setTimeout(() => {
      setSelectedMovie(null);
      navigate(`/booking/${id}`);
    }, 300);
  };

  return (
    <div className="popular-page">
      <h1> Найпопулярніші фільми</h1>
      <div className="popular-list">
        {topMovies.map((movie, index) => (
          <div key={movie.id} className="popular-card" onClick={() => setSelectedMovie(movie)}>
            <span className="rank">#{index + 1}</span>
            <img src={movie.poster} alt={movie.title} />
            <div className="info">
              <h3>{movie.title}</h3>
              <p>Бронювань: {movie.bookedCount}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        >
          <button className="book-now-btn" onClick={() => handleBookNow(selectedMovie.id)}>
             Забронювати
          </button>
        </MovieModal>
      )}
    </div>
  );
};

export default Popular;

