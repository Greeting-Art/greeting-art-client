/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.css';

function Header() {
  return (
    <section className={styles.fullHeader}>
      <div className={styles.linkBar}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/ecard">
          <p>ECard</p>
        </Link>
        <Link to="/gallery">
          <p>Gallery</p>
        </Link>
        <Link to="/aboutus">
          <p>About Us</p>
        </Link>
      </div>
      <div className={styles.titleBar}>
        <p>Greeting Art</p>
      </div>
    </section>
  );
}

export default Header;
