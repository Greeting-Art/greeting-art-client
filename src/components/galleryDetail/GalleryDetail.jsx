/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './galleryDetail.css';
import { useHistory } from 'react-router-dom';

function GalleryDetail({Key}) {
let history = useHistory();
    
    const handleClick = () => {
       history.push(`/ecard/${Key}`)
    }
    return (
        <div className={styles.container}>
        <img className={styles.image} src={`https://greetingart.s3.us-west-2.amazonaws.com/${Key}`}/>
            <div className={styles.middle}>
                <button className={styles.text} onClick={handleClick}>Send as Ecard</button>
            </div>
        </div>
        
    )
}

GalleryDetail.propTypes = {
    Key: PropTypes.string.isRequired,

}

export default GalleryDetail
