// src/pages/RoomsPage.js
import React from 'react';
import './RoomsPage.css';
import RoomCard from '../components/RoomCard';

const rooms = [
  {
    title: 'Deluxe Suite',
    image: '/images/room1.jpg',
    description: 'Spacious room with king-sized bed, private balcony, and sea view.',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini Bar', 'Smart TV'],
    price: 250,
  },
  {
    title: 'Executive Room',
    image: '/images/room2.jpg',
    description: 'Modern room ideal for business travelers with workspace and fast Wi-Fi.',
    amenities: ['High-speed Wi-Fi', 'Workspace', 'Coffee Maker', 'Smart TV'],
    price: 180,
  },
  {
    title: 'Family Suite',
    image: '/images/room3.jpg',
    description: 'Perfect for families, featuring two queen beds and a spacious lounge.',
    amenities: ['2 Queen Beds', 'Sofa Lounge', 'Room Service', 'Bathtub'],
    price: 320,
  },
  {
    title: 'Honeymoon Suite',
    image: '/images/room4.jpg',
    description: 'Romantic suite with luxurious décor and private jacuzzi.',
    amenities: ['Jacuzzi', 'Mood Lighting', 'Complimentary Wine', 'Private Balcony'],
    price: 400,
  },
];

const RoomsPage = () => {
  return (
    <div className="rooms-page">
      <h2 className="rooms-title">Our Rooms</h2>
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
