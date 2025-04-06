const MovieCard = ({ title, description, genre, time, poster}) => {
    return (
      <div className="movie-card">
        <img src={poster} alt={title} />
        <div className="movie-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <p><strong>Жанр:</strong> {genre}</p>
          <p><strong>Сеанс:</strong> {time}</p>
        </div>
      </div>
    );
  };
  
  export default MovieCard;