import { useState, useEffect } from 'react';
import '../styles/CinemaHall.css';
import { useParams } from 'react-router-dom';
import { BookingService } from '../services/BookingService';
import BookingForm from './BookingForm';

const CinemaHall = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { id } = useParams();
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const booked = BookingService.getBookedSeats(id);
    setBookedSeats(booked);
  }, [id]);

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
    const booked = bookedSeats.includes(id);

    return (
      <div
        key={id}
        className={`seat ${booked ? 'booked' : selected ? 'selected' : 'available'}`}
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
      <BookingForm selectedSeats={selectedSeats} onSuccess={() => setSelectedSeats([])} />
    </div>
  );
};

export default CinemaHall;
