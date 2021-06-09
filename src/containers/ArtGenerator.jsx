/* eslint-disable indent */
import React, { useState } from 'react';
import styles from './ArtGenerator.css';

export default function ArtGenerator() {
  const [loading, setLoading] = useState(false);

  if (loading) return <h2>loading...</h2>;

  return (
    // <div>
    //     <h1>Art Generator</h1>
    // </div>

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
              <img src="https://i.ytimg.com/vi/PXye-6_ZB1w/hqdefault.jpg" />
            </figure>
          </div>
          <div className={styles.rightColumn}>
            <button>button</button>
          </div>
        </div>
        <div className={styles.lowerBar}>
          <p>lower margin</p>
        </div>
      </section>
    </main>
  );
}
