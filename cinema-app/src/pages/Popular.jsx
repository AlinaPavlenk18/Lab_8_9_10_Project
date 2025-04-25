import { useEffect, useState } from 'react';
import { BookingService } from '../services/BookingService';
import { movies } from '../data/movies';
import '../styles/Popular.css';

const Popular = () => {
  const [topMovies, setTopMovies] = useState([]);

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

  return (
    <div className="popular-page">
      <h1>Найпопулярніші фільми</h1>
      <div className="popular-list">
        {topMovies.map((movie, index) => (
          <div key={movie.id} className="popular-card">
            <span className="rank">#{index + 1}</span>
            <img src={movie.poster} alt={movie.title} />
            <div className="info">
              <h3>{movie.title}</h3>
              <p>Бронювань: {movie.bookedCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;