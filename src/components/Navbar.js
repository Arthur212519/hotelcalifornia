import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import styles from '../style.module.css';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/add-hotel">Adicionar Hotel</Link>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </nav>
  );
};

export default Navbar;
