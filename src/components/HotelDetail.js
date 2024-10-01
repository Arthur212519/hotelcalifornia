import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../style.module.css';

const HotelDetail = ({ darkMode }) => { 
  const { id } = useParams();
  const [hotel, setHotel] = React.useState(null);

  React.useEffect(() => {
    const storedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
    const foundHotel = storedHotels.find((h) => h.id === parseInt(id));
    setHotel(foundHotel);
  }, [id]);

  if (!hotel) return <div>Carregando...</div>;

  return (
    <div className={`${styles.hotelDetail} ${darkMode ? styles.darkMode : ''}`}>
      <h1>{hotel.name}</h1>
      <img src={hotel.mainImage} alt={hotel.name} />
      <p>Preço: R${hotel.price}</p>
      <p>Nota: {hotel.rating}</p>
      <p>Descrição: {hotel.description}</p>
      <h2>Outras Fotos:</h2>
      <div>
        {hotel.secondaryImages.map((image, index) => (
          <img key={index} src={image} alt={`Imagem ${index + 1}`} style={{ width: '100%', marginBottom: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default HotelDetail;
