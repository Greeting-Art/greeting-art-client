/* eslint-disable indent */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { sendToGallery } from '../../utils/s3-utils';


function SaveAndGalleryButtons({ handleSaveClick }) {
    const [disable, setDisable] = useState(false); 

    const handleClick = () => {
        handleSaveClick();
        setDisable(true);
    };

    // const handleGalleryClick = (e) => {
        const upload = (e) => {
            const file = e.target.files[0];
            sendToGallery(file)
            .then((data) => {
              console.log('Data Sent', data.location);
            })
            .catch((err) => {
              console.log(err);
            });
        console.log('Added to gallery');
    };

    
    return (
        <div>
            {disable ?
            <p>Publish to the Gallery!
            <input type="file" onChange={upload}/>
            </p> : 
    
            <button onClick={handleClick}>Save</button>}
        </div>

    );
}

SaveAndGalleryButtons.propTypes = {
    handleSaveClick: PropTypes.func.isRequired,
};

export default SaveAndGalleryButtons;