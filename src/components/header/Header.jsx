/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.css';

function Header(props) {
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

Header.propTypes = {};

export default Header;
