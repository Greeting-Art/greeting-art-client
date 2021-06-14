/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'

function GalleryDetail({Key}) {
    return (
        <div>
            <img src={`https://greetingart.s3.us-west-2.amazonaws.com/${Key}`}/>
        </div>
    )
}

GalleryDetail.propTypes = {
    Key: PropTypes.string.isRequired,

}

export default GalleryDetail
