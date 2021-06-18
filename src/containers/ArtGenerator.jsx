/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import SaveAndGalleryButtons from '../components/artControls/SaveAndGalleryButtons';
import { randomArt, weirdArt, blankP5Canvas } from '../utils/randomization';
import { geometricArt, stealthyArt, spaceyArt } from '../utils/geometrify';
import downloadCanvas from '../utils/utils';
import styles from './ArtGenerator.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import BlobRoss from '../components/blobRoss/BlobRoss';

export default function ArtGenerator() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [yetRendered, setYetRendered] = useState(false);
  const [userStage, setUserStage] = useState(0);

  useEffect(() => {
    setLoading(false);
  }, [counter]);

  const functionArray = [
    randomArt(),
    weirdArt(),
    geometricArt(),
    stealthyArt(),
    spaceyArt(),
  ];

  const toggleArtSource = () => {
    let artIndex = Math.round(Math.random() * (functionArray.length - 4));
    if (counter % 2 !== 0) {
      const artSource = functionArray[artIndex];
      return artSource;
    } else {
      if (artIndex < 3) {
        artIndex = artIndex + 2;
        const artSource = functionArray[artIndex];
        return artSource;
      } else {
        if (artIndex >= 3) artIndex = artIndex - 2;
        const artSource = functionArray[artIndex];
        return artSource;
      }
    }
  };

  const handleRandomClick = () => {
    setCounter(counter + 1);
    setYetRendered(true);
    setUserStage(1);
  };

  const handleSaveClick = () => {
    downloadCanvas();
  };

  if (loading)
    return (
      <div className={styles.loadingSpinner}>
        <CircularProgress color="secondary" />
      </div>
    );

  return (
    <main className={styles.artPage}>
      <section className={styles.artHeader}></section>
      <section className={styles.artBody}>
        <div className={styles.controlBar}></div>
        <div className={styles.artBar}>
          <div className={styles.leftColumn}>
            <BlobRoss stage={userStage} />
          </div>
          <div className={styles.centerColumn}>
            <figure className={styles.canvasWrapper}>
              {!yetRendered ? (
                <P5Wrapper sketch={blankP5Canvas()} />
              ) : (
                <P5Wrapper sketch={toggleArtSource()} />
              )}
            </figure>
          </div>
          <div className={styles.rightColumn}>
            <button className={styles.randomButton} onClick={handleRandomClick}>
              Randomize
            </button>
            <SaveAndGalleryButtons handleSaveClick={handleSaveClick} />
          </div>
        </div>
        <div className={styles.lowerBar}></div>
      </section>
    </main>
  );
}
