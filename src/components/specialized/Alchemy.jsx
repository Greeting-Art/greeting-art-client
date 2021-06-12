import React, { useState, useEffect } from 'react';
import styles from '../../containers/Gallery.css';

export default function Alchemy() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <h2>loading...</h2>;

  return (
    <main className={styles.galleryPage}>
      <section className={styles.galleryHeader}>
        <h1>Alchem-eGreetings</h1>
      </section>

      <section className={styles.galleryBody}>
        <div className={styles.controlBar}>
          {/* <button>← Page</button>
          <button>Page →</button> */}
        </div>
        <div className={styles.galleryBar}>
          <div className={styles.centerColumn}>
            <h4>List of Alchemy In-Joke Cards</h4>
          </div>
        </div>
        <div className={styles.lowerBar}>
          <button>Send Art as eCard</button>
        </div>
      </section>
    </main>
  );
}
