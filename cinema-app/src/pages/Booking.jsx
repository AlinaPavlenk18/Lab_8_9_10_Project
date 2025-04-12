import { useParams,  useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';
import CinemaHall from '../components/CinemaHall';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const selectedMovie = id ? movies.find((m) => m.id === parseInt(id)) : null;

    const handleSelect = (e) => {
      const selectedId = e.target.value;
      if (selectedId) {
        navigate(`/booking/${selectedId}`);
      }
    };
  
  return (
    <div className="booking-page">
      <button className="btn-back" onClick={() => navigate("/")}> &lArr; Назад</button>
      
      <h1> Бронювання місць</h1>

      {/* Якщо фільм не вибрано — показуємо select */}
      {!selectedMovie && (
        <>
          <p style={{ fontSize: "18px" }}>Оберіть фільм зі списку:</p>
          <select onChange={handleSelect} defaultValue="">
            <option value="" disabled>— Оберіть фільм —</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.title}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Якщо фільм вибрано — показуємо кінозал */}
      {selectedMovie && (
        <>
          <h2>{selectedMovie.title}</h2>
          <p><strong>Сеанс:</strong> {selectedMovie.date} {selectedMovie.time}</p>
          <CinemaHall />
        </>
      )}
    </div>
  );
};

export default Booking;