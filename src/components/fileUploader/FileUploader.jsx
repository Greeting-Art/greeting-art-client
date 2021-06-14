import React from 'react';
import { sendToGallery } from '../../utils/api-utils';

const FileUploader =() => {
  const upload = (e) => {
    const file = e.target.files[0];
    sendToGallery(file)
    .then((data)=> {
      console.log('Data Sent', data.location)
    })
    .catch( (err)=> {
      console.log(err)
    })
  }
    return (
      <div>
        <h3>Publish to the Gallery!</h3>
        <input
        type='file'
        onChange={upload}
        />
      </div>
    )
  };
  export default FileUploader

