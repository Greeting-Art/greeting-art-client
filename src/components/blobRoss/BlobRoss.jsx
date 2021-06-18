import React from 'react';
import PropTypes from 'prop-types';
import BlobGIF from '../../assets/appIcons/blob-ross_8f128.gif';
import SpeechWelcome from '../../assets/appIcons/blob-speech_nav-welcome.png';
import SpeechGallery from '../../assets/appIcons/blob-speech_nav-gallery.png';
import SpeechArt1 from '../../assets/appIcons/blob-speech_art-duck.png';
import SpeechArt2 from '../../assets/appIcons/blob-speech_art-beautiful.png';
import SpeechArt3 from '../../assets/appIcons/blob-speech_art-trees.png';
import styles from './blobRoss.css';

export default function BlobRoss({ stage }) {
  const blobSpeechArray = [SpeechArt1, SpeechArt2, SpeechArt3];

  const toggleSpeech = () => {
    if (stage === 0) return SpeechWelcome;
    if (stage === 2) return SpeechGallery;
    if (stage === 1) {
      const speechIndex = Math.round(Math.random() * 2);
      return blobSpeechArray[speechIndex];
    }
  };
  const currentSpeech = toggleSpeech();
  return (
    <div className={styles.blobWrapper}>
      <figure className={styles.blobSpeechBubble}>
        <img src={currentSpeech} height="180" />
      </figure>
      <figure className={styles.blobRossHimself}>
        <img src={BlobGIF} />
      </figure>
    </div>
  );
}

BlobRoss.propTypes = {
  stage: PropTypes.number.isRequired,
};
