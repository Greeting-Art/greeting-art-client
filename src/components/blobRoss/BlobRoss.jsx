import React from 'react';
import BlobGIF from '../../assets/appIcons/blob-ross_8f128.gif';
import SpeechWelcome from '../../assets/appIcons/blob-speech_nav-welcome.png';

export default function BlobRoss({ stage }) {
  const blobSpeechArray = [1, 2, 3];

  const toggleSpeech = () => {
    return 'hey';
  };

  return (
    <div>
      <img src={SpeechWelcome} height="180" />
      <img src={BlobGIF} />
    </div>
  );
}
