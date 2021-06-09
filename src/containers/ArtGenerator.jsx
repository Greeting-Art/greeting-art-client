/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { randomArt } from '../utils/randomization';
import downloadCanvas from '../utils/utils';
import styles from './ArtGenerator.css';

export default function ArtGenerator() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setLoading(false);
    console.log('***', counter);
  }, [counter]);

  const artwork = randomArt();
  // const sketch = (p5) => {
  //   p5.setup = () => {
  //     p5.createCanvas(400, 400);
  //     p5.background(255);
  //     // p5.noStroke();

  //     for(let i = 0; i < 100; i++) {
  //       p5.fill(p5.random(255), p5.random(255), p5.random(255), p5.random(255));

  //       p5.square(
  //         p5.random(400),
  //         p5.random(400),
  //         p5.random(100)
  //         );

  //         p5.circle(
  //           p5.random(400),
  //           p5.random(400),
  //           p5.random(100)
  //           );
  //         }
  //   };
  // };

  const handleRandomClick = () => {
    setCounter(counter + 1);
    console.log('>>>', counter);
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
