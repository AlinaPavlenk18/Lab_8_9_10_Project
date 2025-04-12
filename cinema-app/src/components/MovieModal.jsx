import '../styles/MovieModal.css';
import { useNavigate } from 'react-router-dom';


const MovieModal = ({ movie, onClose }) => {
  const navigate = useNavigate();
  const handleBook = () => {
    const modal = document.querySelector('.movie-modal');
    if (modal) {
      modal.classList.add('fade-out'); // додаємо клас для анімації
    }

    setTimeout(() => {
      onClose(); 
      navigate(`/booking/${movie.id}`); // переходимо на сторінку бронювання
    }, 300); 
  };

  if (!movie) return null;

  return (
  <>
     <div className="modal-overlay" onClick={onClose} />
      <div className="movie-modal-container">
        <div className="movie-modal">
          <button className="close-btn" onClick={onClose}>✖</button>
          <div className="modal-scroll-container">
            <div className="modal-content">
              <img className="modal-poster" src={movie.poster} alt={movie.title} />
              <div className="movie-details">
                <h2>{movie.title}</h2>
                <p><strong>Жанр:</strong> {movie.genre}</p>
                <p><strong>Країна:</strong> {movie.country}</p>
                <p><strong>Рік:</strong> {movie.year}</p>
                <p><strong>Час сеансу:</strong> {movie.time}</p>
                <p><strong>Опис:</strong> {movie.description}</p>
                <button className="btn-book-modal" onClick={handleBook}>
                  Забронювати
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieModal;