/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
//import ArtCanvas from '../components/artCanvas/ArtCanvas';
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
    console.log('***', counter);
  }, [counter]);

  const functionArray = [
    randomArt(),
    weirdArt(),
    geometricArt(),
    stealthyArt(),
    spaceyArt(),
  ];

  const toggleArtSource = () => {
    let artIndex = Math.round(Math.random() * 4);
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
    console.log('>>>', counter);
  };

  const handleSaveClick = () => {
    downloadCanvas();
    setUserStage(2);
  };

  console.log('>>>STAGE:', userStage);

  // if (loading) return <h2>loading...</h2>;
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
            {/* <img
              src="src\assets\appIcons\blob-speech_nav-welcome.png"
              height="180"
            />
            <img src="src\assets\appIcons\blob-ross_8f128.gif" /> */}
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
        <div className={styles.lowerBar}>
          {/* <img src="src\assets\navIcons\idea.png" height="40" /> */}
        </div>
      </section>
    </main>
  );
}
