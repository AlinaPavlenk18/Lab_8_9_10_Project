import { useEffect, useRef, useState } from 'react';

const MovieCard = ({ title, description, genre, date, time, poster, delay}) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
       
      >
        <img src={poster} alt={title} />
        <div className="movie-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <p><strong>Жанр:</strong> {genre}</p>
          <p><strong>Дата:</strong> {date}</p>
          <p><strong>Сеанс:</strong> {time}</p>
        </div>
      </div>
    </>
    );
  };
  
  export default MovieCard;