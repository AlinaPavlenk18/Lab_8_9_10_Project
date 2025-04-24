const BOOKING_KEY = 'bookings';

export const BookingService = {
  saveBooking: (movieId, userInfo, selectedSeats) => {
    const current = JSON.parse(localStorage.getItem(BOOKING_KEY)) || {};
    current[movieId] = current[movieId] || [];

    const newBooking = {
      ...userInfo,
      seats: selectedSeats,
      time: new Date().toISOString(),
    };

    current[movieId].push(newBooking);
    localStorage.setItem(BOOKING_KEY, JSON.stringify(current));
  },

  getBookedSeats: (movieId) => {
    const current = JSON.parse(localStorage.getItem(BOOKING_KEY)) || {};
    const bookings = current[movieId] || [];
    return bookings.flatMap(b => b.seats);
  }
};