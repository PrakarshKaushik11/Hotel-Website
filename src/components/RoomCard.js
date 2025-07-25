// src/components/RoomCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './RoomCard.css';


const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.title} className="room-image" />
      <div className="room-info">
        <h3 className="room-title">{room.title}</h3>
        <p className="room-description">{room.description}</p>
        <p className="room-price">${room.price} / night</p>
        <ul className="room-amenities">
          {room.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        <Link to={`/book?roomType=${encodeURIComponent(room.title)}`} className="book-now-btn">
        Book Now
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
