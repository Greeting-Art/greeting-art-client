/* eslint-disable indent */
import React, { useState } from 'react';
import PropTypes from 'prop-types';


function SaveAndGalleryButtons({ handleSaveClick }) {
    const [disable, setDisable] = useState(false); 

    const handleClick = () => {
        handleSaveClick();
        setDisable(true);
    };

    const handleGalleryClick = () => {
        console.log('Added to gallery');
    };

    
    return (
        <div>
            {disable ?
            <button onClick={handleGalleryClick}>Add to Gallery?</button> : 
    
            <button onClick={handleClick}>Save</button>}
        </div>

    );
}

SaveAndGalleryButtons.propTypes = {
    handleSaveClick: PropTypes.func.isRequired,
};

export default SaveAndGalleryButtons;