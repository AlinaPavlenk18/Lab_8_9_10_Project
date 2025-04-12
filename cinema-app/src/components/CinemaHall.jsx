import { useState } from 'react';
import '../styles/CinemaHall.css';

const CinemaHall = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  const seats = Array.from({ length: 40 }, (_, i) => {
    const id = i + 1;
    const selected = selectedSeats.includes(id);

    return (
      <div
        key={id}
        className={`seat ${selected ? 'selected' : 'available'}`}
        onClick={() => toggleSeat(id)}
      >
        {id}
      </div>
    );
  });

  return (
    <div>
      <div className="hall-grid">{seats}</div>
      <p>Обрані місця: {selectedSeats.join(', ') || 'немає'}</p>
    </div>
  );
};

export default CinemaHall;
