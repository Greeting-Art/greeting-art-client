/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import SaveAndGalleryButtons from '../components/artControls/SaveAndGalleryButtons';
import FileUploader from '../components/fileUploader/FileUploader';
import { randomArt, weirdArt } from '../utils/randomization';
import { geometricArt } from '../utils/geometrify';
import downloadCanvas from '../utils/utils';
import styles from './ArtGenerator.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ArtGenerator() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  console.log('P5', P5Wrapper);

  useEffect(() => {
    setLoading(false);
    console.log('***', counter);
  }, [counter]);

  const artwork = randomArt();

  const functionArray = [randomArt(), weirdArt(), geometricArt()];

  const toggleArtSource = () => {
    const variableAxe = Math.round(Math.random() * functionArray.length);
    const artSource = functionArray[variableAxe];
    return artSource;
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
              <p>left column</p>
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
            {/* <FileUploader /> */}
          </div>
        </div>
        <div className={styles.lowerBar}>
          {/* <img src="src\assets\navIcons\idea.png" height="40" /> */}
        </div>
      </section>
    </main>
  );
}
