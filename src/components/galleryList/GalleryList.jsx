/* eslint-disable indent */
import React from 'react';
import GalleryDetail from '../galleryDetail/GalleryDetail';
import PropTypes from 'prop-types';
import styles from './galleryList.css';

function GalleryList({ Contents }) {
  return (
    <ul aria-label="artwork" className={styles.galleryUL}>
      {Contents.map((artWork) => (
        <li key={artWork.Key} className={styles.galleryLI}>
          <GalleryDetail Key={artWork.Key} />
        </li>
      ))}
    </ul>
  );
}

GalleryList.propTypes = {
  Contents: PropTypes.arrayOf(
    PropTypes.shape({
      Key: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GalleryList;
