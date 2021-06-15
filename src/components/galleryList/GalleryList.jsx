/* eslint-disable indent */
import React from 'react';
import GalleryDetail from '../galleryDetail/GalleryDetail';
import PropTypes from 'prop-types';
import './galleryList.css'

function GalleryList({Contents}) {
    console.log('Contents in Gallery', Contents)
    return (
        <ul aria-label='artwork'>
            {Contents.map((artWork) => 
                <li key={artWork.Key}>
                    <GalleryDetail Key={artWork.Key}/>
                </li>
            )}
            
        </ul>
    )
}

GalleryList.propTypes = {
   Contents: PropTypes.arrayOf(
    PropTypes.shape({
      Key: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GalleryList
