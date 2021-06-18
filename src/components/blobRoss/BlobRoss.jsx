import React from 'react';
import PropTypes from 'prop-types';
import BlobGIF from '../../assets/appIcons/blob-ross_8f128.gif';
// navigational aids speech bubbles:
import SpeechWelcome from '../../assets/appIcons/blob-speech_nav-welcome.png';
import SpeechGallery from '../../assets/appIcons/blob-speech_nav-gallery.png';
// art feedback speech bubbles:
import SpeechArt1 from '../../assets/appIcons/speechbubbles/speech_art-beautiful.png';
import SpeechArt2 from '../../assets/appIcons/speechbubbles/speech_art-crazy.png';
import SpeechArt3 from '../../assets/appIcons/speechbubbles/speech_art-duck.png';
import SpeechArt4 from '../../assets/appIcons/speechbubbles/speech_art-fun.png';
import SpeechArt5 from '../../assets/appIcons/speechbubbles/speech_art-it-do.png';
import SpeechArt6 from '../../assets/appIcons/speechbubbles/speech_art-it-happy.png';
import SpeechArt7 from '../../assets/appIcons/speechbubbles/speech_art-shapes.png';
import SpeechArt8 from '../../assets/appIcons/speechbubbles/speech_art-trees.png';
import SpeechArt9 from '../../assets/appIcons/speechbubbles/speech_art-weird.png';
import SpeechArt10 from '../../assets/appIcons/speechbubbles/speech_art-beauty.png';
import styles from './blobRoss.css';

export default function BlobRoss({ stage }) {
  const blobSpeechArray = [
    SpeechArt1,
    SpeechArt2,
    SpeechArt3,
    SpeechArt4,
    SpeechArt5,
    SpeechArt6,
    SpeechArt7,
    SpeechArt8,
    SpeechArt9,
    SpeechArt10,
  ];

  const toggleSpeech = () => {
    if (stage === 0) return SpeechWelcome;
    if (stage === 1) {
      const speechIndex = Math.round(
        Math.random() * (blobSpeechArray.length - 1)
      );
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
