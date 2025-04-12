import { useEffect, useRef, useState } from 'react';
import MovieModal from './MovieModal';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, description, genre, country, year, date, time, poster, delay, id}) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    const currentRef = cardRef.current; // зберігаємо поточне значення
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
         
          observer.unobserve(currentRef); // припиняємо спостереження саме за цим елементом
        }
      },
      {
        threshold: 0.2,
      }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);
    return (
    <>
      <div 
      ref={cardRef}
      className={`movie-card ${isVisible ? 'visible' : ''}`}
      onClick={() => setShowModal(true)}
      >
        <img src={poster} alt={title} />
        <div className="movie-info">
          <h2>{title}</h2>
          <p><strong>Дата:</strong> {date}</p>
          <p><strong>Сеанс:</strong> {time}</p>
          <div className="book-card-container">
            <Link to={`/booking/${id}`} className="btn-book-card">Забронювати</Link>
          </div>
        </div>
      </div>
      {showModal && (
      <MovieModal 
        movie={{ title, description, genre, country, year,date, time, poster, id }}
        onClose={() => setShowModal(false)}>
        <Link to={`/booking/${id}`} className="btn-book-modal">Забронювати</Link>
      </MovieModal>
      )}
    </>
    );
  };
  
  export default MovieCard;