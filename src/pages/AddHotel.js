
import React, { useState } from 'react';
import styles from '../style.module.css';

const AddHotel = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const [secondaryImages, setSecondaryImages] = useState(['', '', '']);
  const [description, setDescription] = useState('');

  const handleAddHotel = () => {
    const hotel = {
      id: Date.now(),
      name,
      state,
      city,
      price: parseFloat(price),
      rating: parseFloat(rating),
      mainImage,
      secondaryImages,
      description,
    };

    const storedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
    storedHotels.push(hotel);
    localStorage.setItem('hotels', JSON.stringify(storedHotels));

    setName('');
    setState('');
    setCity('');
    setPrice('');
    setRating(1);
    setMainImage('');
    setSecondaryImages(['', '', '']);
    setDescription('');
  };

  return (
    <div className={styles.container}>
      <h1>Adicionar Hotel</h1>
      <input
        className={styles.inputField}
        type="text"
        placeholder="Nome do Hotel"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="text"
        placeholder="Estado"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="text"
        placeholder="Cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="number"
        placeholder="Preço por Noite"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="number"
        placeholder="Nota (1 a 5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
      />
      <input
        className={styles.inputField}
        type="text"
        placeholder="URL da Foto Principal"
        value={mainImage}
        onChange={(e) => setMainImage(e.target.value)}
      />
      {secondaryImages.map((image, index) => (
        <input
          key={index}
          className={styles.inputField}
          type="text"
          placeholder={`URL da Foto Secundária ${index + 1}`}
          value={image}
          onChange={(e) => {
            const newImages = [...secondaryImages];
            newImages[index] = e.target.value;
            setSecondaryImages(newImages);
          }}
        />
      ))}
      <textarea
        className={styles.inputField}
        placeholder="Descrição do Hotel"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className={styles.addHotelButton} onClick={handleAddHotel}>
        Adicionar Hotel
      </button>
    </div>
  );
};

export default AddHotel;
