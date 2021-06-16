/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import SaveAndGalleryButtons from '../components/artControls/SaveAndGalleryButtons';
import { randomArt, weirdArt } from '../utils/randomization';
import { geometricArt, stealthyArt, spaceyArt } from '../utils/geometrify';
import downloadCanvas from '../utils/utils';
import styles from './ArtGenerator.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ArtGenerator() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

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
    let variableAxe = Math.round(Math.random() * 4);
    if (counter % 2 !== 0) {
      console.log('VVVMMMAAA', variableAxe);
      const artSource = functionArray[variableAxe];
      return artSource;
    } else {
      if (variableAxe < 3) {
        variableAxe = variableAxe + 2;
        const artSource = functionArray[variableAxe];
        return artSource;
      } else {
        if (variableAxe >= 3) variableAxe = variableAxe - 2;
        const artSource = functionArray[variableAxe];
        return artSource;
      }
    }
  };

  const handleRandomClick = () => {
    setCounter(counter + 1);
    console.log('>>>', counter);
  };

  const handleSaveClick = () => {
    downloadCanvas();
  };

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
            {/* <img src="src\assets\appIcons\speak-beautiful.png" height="100" />
            <img src="src\assets\appIcons\gif-blob-one.gif" /> */}
          </div>
          <div className={styles.centerColumn}>
            <figure className={styles.canvasWrapper}>
              <P5Wrapper sketch={toggleArtSource()} />
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
