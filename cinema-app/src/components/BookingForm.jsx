import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/BookingForm.css';
import { useParams } from 'react-router-dom';
import { BookingService } from '../services/BookingService';


const BookingForm = ({ selectedSeats, onSuccess }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const { id } = useParams();
  
    const validate = () => {
      const newErrors = {};
      const nameValid = /^[А-Яа-яA-Za-zІіЇїЄєҐґ\s'-]{2,}$/;
      const phoneValid = /^\+380\d{9}$/;
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!name.trim() || !nameValid.test(name)) {
        newErrors.name = 'Введіть дійсне ім’я (мін. 2 букви, без цифр)';
      }
  
      if (!phone.trim()) {
        newErrors.phone = 'Телефон обов’язковий';
      } else if (!phoneValid.test(phone)) {
        newErrors.phone = 'Некоректний номер. Формат: +380XXXXXXXXX';
      }
  
      if (!email.trim()) {
        newErrors.email = 'Email обов’язковий';
      } else if (!emailValid.test(email)) {
        newErrors.email = 'Некоректний email';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!selectedSeats.length) {
        toast.error('Оберіть принаймні одне місце');
        return;
      }
      if (validate()) {
        BookingService.saveBooking(id, { name, phone, email }, selectedSeats);
        toast.success('🎉 Бронювання успішно збережено!', {
            style: {
              background: '#4B2C77',
              color: '#fff',
            },
            icon: '✅',
        });
        setName('');
        setPhone('');
        setEmail('');
        if (onSuccess) onSuccess();
      } else {
        toast.error('Будь ласка, заповніть всі поля коректно', {
            style: {
              background: '#6A1B9A',
              color: '#fff',
            },
            icon: '⚠️'
            });
        }
    };
  
    return (
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Ваше ім’я"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <input
            type="phone"
            placeholder="Телефон(+380)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit" className="confirm-btn">Підтвердити бронювання</button>
      </form>
    );
  };
  
  export default BookingForm;