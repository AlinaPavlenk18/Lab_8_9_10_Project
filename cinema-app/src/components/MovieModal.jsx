import '../styles/MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieModal;