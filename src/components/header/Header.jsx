/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.css';

function Header() {
  return (
    <div className={styles.linkWrapper}>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/ecard">
        <h3>ECard</h3>
      </Link>
      <Link to="/gallery">
        <h3>Gallery</h3>
      </Link>
      <Link to="/aboutus">
        <h3>About Us</h3>
      </Link>
    </div>
  );
}

export default Header;
