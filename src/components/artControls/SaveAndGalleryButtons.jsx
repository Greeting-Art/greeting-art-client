/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { sendToGallery } from '../../utils/s3-utils';
import styles from './saveAndGalleryButtons.css';

function SaveAndGalleryButtons({ handleSaveClick }) {
  // const [disable, setDisable] = useState(false);

  const handleClick = () => {
    handleSaveClick();
    // setDisable(true);
  };
  

  const uploadClick = () => {
    const canvas = document.getElementsByClassName('p5Canvas')[0];
    console.log('Upload canvas', canvas);

    canvas.toBlob((blob) => {
      
      sendToGallery(blob)
      .then((data) => {
        console.log('Data Sent', data.location);
      })
      .catch((err) => {
        console.log(err);
      });

    document.getElementById('uploadedMsg').style.visibility = 'visible';
    
  });
  };

  return (
    <div>
      <button className={styles.saveButton} onClick={handleClick}>
          Save Canvas
      </button>

      <button className={styles.galleryButton} onClick={uploadClick}>
        Add to Gallery
      </button>

      <p id="uploadedMsg" style={{ visibility: 'hidden' }}>
            Uploaded to Gallery!
      </p>
    </div>
  );
}

SaveAndGalleryButtons.propTypes = {
  handleSaveClick: PropTypes.func.isRequired,
};

export default SaveAndGalleryButtons;
