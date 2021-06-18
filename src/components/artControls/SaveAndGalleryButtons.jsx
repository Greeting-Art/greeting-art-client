/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { sendToGallery } from '../../utils/s3-utils';
import styles from './saveAndGalleryButtons.css';

function SaveAndGalleryButtons({ handleSaveClick }) {

  const handleClick = () => {
    handleSaveClick();
  };
  
  const uploadClick = () => {
    const canvas = document.getElementsByClassName('p5Canvas')[0];

    canvas.toBlob((blob) => {    
      sendToGallery(blob)
      .catch((err) => {
        console.log(err);
      });

    document.getElementById('uploadedMsg').style.visibility = 'visible';
  });
  };

  return (
    <div className={styles.saveAndGalleryParent}>
    
      <button className={styles.saveButton} onClick={handleClick}>
          Save Canvas
      </button>
    
      <button className={styles.galleryButton} onClick={uploadClick}>
        Add to Gallery
      </button>
      
      <Link to={'/gallery'} className={styles.gLink}>
        <p id="uploadedMsg" className={styles.galleryLink} style={{ visibility: 'hidden' }}>
            See your art in the Gallery!
        </p>
      </Link>
      
    </div>
  );
}

SaveAndGalleryButtons.propTypes = {
  handleSaveClick: PropTypes.func.isRequired,
};

export default SaveAndGalleryButtons;
