import React, { useState } from 'react';

function Authorship() {
  const [bookings, setBookings] = useState([
    { id: 1, article: 'AI in Healthcare', position: 'First Author', status: 'Available' },
    { id: 2, article: 'Machine Learning Applications', position: 'Second Author', status: 'Booked' },
    { id: 3, article: 'Data Science Trends', position: 'Third Author', status: 'Available' }
  ]);

  const bookPosition = (id) => {
    setBookings(bookings.map(booking => 
      booking.id === id 
        ? {...booking, status: 'Booked'} 
        : booking
    ));
  };

  return (
    <div className="authorship">
      <h2>Position Booking in Articles</h2>
      <div className="bookings-grid">
        {bookings.map(booking => (
          <div key={booking.id} className="booking-card">
            <h3>{booking.article}</h3>
            <p>Position: {booking.position}</p>
            <p>Status: {booking.status}</p>
            {booking.status === 'Available' && (
              <button onClick={() => bookPosition(booking.id)}>Book Position</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Authorship;
