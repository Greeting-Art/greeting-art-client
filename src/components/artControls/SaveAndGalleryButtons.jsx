/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { sendToGallery } from '../../utils/s3-utils';
import styles from './saveAndGalleryButtons.css';

function SaveAndGalleryButtons({ handleSaveClick }) {
  const [disable, setDisable] = useState(false);

  const handleClick = () => {
    handleSaveClick();
    setDisable(true);
  };

  const upload = (e) => {
    const file = e.target.files[0];
    sendToGallery(file)
      .then((data) => {
        console.log('Data Sent', data.location);
      })
      .catch((err) => {
        console.log(err);
      });
    document.getElementById('uploadedMsg').style.visibility = 'visible';
    document.getElementById('publishMsg').style.visibility = 'hidden';
    console.log('Added to gallery');
  };

  return (
    <div>
      {disable ? (
        <div>
          <p id="publishMsg">Publish to the Gallery!</p>
          <input type="file" onChange={upload} />
          <p id="uploadedMsg" style={{ visibility: 'hidden' }}>
            Uploaded to Gallery!
          </p>
        </div>
      ) : (
        <button className={styles.saveButton} onClick={handleClick}>
          Save
        </button>
      )}
    </div>
  );
}

SaveAndGalleryButtons.propTypes = {
  handleSaveClick: PropTypes.func.isRequired,
};

export default SaveAndGalleryButtons;
