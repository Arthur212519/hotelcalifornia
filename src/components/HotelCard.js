import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style.module.css';

const HotelCard = ({ hotel, onRemove }) => {
  return (
    <div className={styles.hotelCard}>
      <Link to={`/hotel/${hotel.id}`}>
        <img src={hotel.mainImage} alt={hotel.name} />
        <h3>{hotel.name}</h3>
        <p>Preço: R${hotel.price}</p>
        <p>Nota: {hotel.rating}</p>
        <p>{hotel.description}</p>
        <button>Ver Detalhes</button>
      </Link>
      <button onClick={() => onRemove(hotel.id)} className={styles.removeButton}>
        Remover
      </button>
    </div>
  );
};

export default HotelCard;
