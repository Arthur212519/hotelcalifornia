// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import HotelCard from '../components/HotelCard';
import styles from '../style.module.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const [hotels, setHotels] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const storedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
    setHotels(storedHotels);
  }, []);

  const handleRemoveHotel = (id) => {
    const updatedHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(updatedHotels);
    localStorage.setItem('hotels', JSON.stringify(updatedHotels));
  };

  const filteredAndSortedHotels = hotels
    .filter((hotel) => hotel.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'rating-asc') return a.rating - b.rating;
      if (sortOption === 'rating-desc') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <label>Ordenar por:</label>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Selecione</option>
          <option value="price-asc">Menor Preço</option>
          <option value="price-desc">Maior Preço</option>
          <option value="rating-asc">Menor Nota</option>
          <option value="rating-desc">Maior Nota</option>
        </select>
      </div>
      {filteredAndSortedHotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} onRemove={handleRemoveHotel} />
      ))}
    </div>
  );
};

export default Home;
