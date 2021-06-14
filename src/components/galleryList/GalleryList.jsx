/* eslint-disable indent */
import React from 'react';
import GalleryDetail from '../galleryDetail/GalleryDetail';
import PropTypes from 'prop-types';

function GalleryList({Contents}) {
    console.log('Contents in Gallery', Contents)
    return (
        <ul>
            {Contents.map((artWork) => 
                <li key={artWork.Key}>
                    <Art Key={artWork.Key}/>
                </li>
            )}
            
        </ul>
    )
}

GalleryWalls.propTypes = {
   Contents: PropTypes.arrayOf(
    PropTypes.shape({
      Key: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GalleryList
