import { useParams,  useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';
import CinemaHall from '../components/CinemaHall';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find((m) => m.id === parseInt(id));
  
  return (
    <div className="booking-page">
      <button className="btn-back" onClick={() => navigate(-1)}>	
      &lArr; Назад</button>
      <h1>Бронювання місць</h1>
      <h2>{movie.title}</h2>
      <p><strong>Сеанс:</strong> {movie.date} {movie.time}</p>
      <CinemaHall />
    </div>
  );
};

export default Booking;