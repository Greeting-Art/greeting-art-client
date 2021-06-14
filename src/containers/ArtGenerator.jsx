/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { randomArt, weirdArt, strangeArt } from '../utils/randomization';
import { geometricArt } from '../utils/geometrify';
import downloadCanvas from '../utils/utils';
import styles from './ArtGenerator.css';

export default function ArtGenerator() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('red');

  console.log('Color:', color);
  //console.log('P5', P5Wrapper);

  useEffect(() => {
    setLoading(false);
    console.log('***', counter);
  }, [counter]);

  const functionArray = [randomArt(), strangeArt()];

  const toggleArtSource = () => {
    const variax = Math.round(Math.random() * 1);
    const artSource = functionArray[variax];
    return artSource;
  };

  //const artwork = randomArt();
  // const artwork = weirdArt();
  const artwork = geometricArt();

  const handleRandomClick = () => {
    setCounter(counter + 1);
    console.log('>>>', counter);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSaveClick = () => {
    downloadCanvas();
  };

  if (loading) return <h2>loading...</h2>;

  return (
    <main className={styles.artPage}>
      <section className={styles.artHeader}>
        <h1>Art Generator</h1>
      </section>

      <section className={styles.artBody}>
        <div className={styles.controlBar}></div>
        <div className={styles.artBar}>
          <div className={styles.leftColumn}>
            <p>left column</p>
          </div>
          <div className={styles.centerColumn}>
            <figure className={styles.canvasWrapper}>
              <P5Wrapper sketch={artwork} />
              {/* <img src="https://i.ytimg.com/vi/PXye-6_ZB1w/hqdefault.jpg" /> */}
            </figure>
          </div>
          <div className={styles.rightColumn}>
            <input type="color" onChange={handleColorChange}></input>
            <button onClick={handleRandomClick}>Randomize</button>
            <button onClick={handleSaveClick}>Save</button>
          </div>
        </div>
        <div className={styles.lowerBar}>
          <p>lower margin</p>
        </div>
      </section>
    </main>
  );
}
