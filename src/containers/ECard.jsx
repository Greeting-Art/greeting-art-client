/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import styles from './ECard.css';

export default function ECard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <h2>loading...</h2>;

  return (
    <main className={styles.eCardPage}>
      <section className={styles.eCardHeader}>
        <h1>ECard</h1>
      </section>

      <section className={styles.eCardBody}>
        <div className={styles.eCardDisplay}>
          <figure className={styles.canvasWrapper}>
            <img
              src="src\assets\placeholder-art.png"
              height="360"
              width="360"
            />
          </figure>
        </div>
        <div className={styles.eCardForm}>
          <input type="text" value="email"></input>
          <input type="date" value="2021-06-10"></input>
          <textarea rows="4" cols="50">
            message
          </textarea>
          <button>submit</button>
        </div>
      </section>
      <section className={styles.eCardFooter}>footer</section>
    </main>
  );
}
