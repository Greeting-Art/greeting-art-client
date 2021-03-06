/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import AboutUsComp from '../components/aboutUs/AboutUs';
import styles from '../components/aboutUs/aboutUs.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className={styles.loadingSpinner}>
        <CircularProgress color="secondary" />
      </div>
    );

  return (

    <main className={styles.aboutPage}>
      <section className={styles.aboutHeader}></section>
      <section className={styles.aboutBody}>
        <div className={styles.aboutBar}>
          <div className={styles.leftColumn}>
            <p></p>
          </div>
          <div className={styles.centerColumn}>
            <AboutUsComp />
          </div>
          <div className={styles.rightColumn}>
            <p></p>
          </div>
        </div>
        <div className={styles.lowerBar}>
          <p></p>
        </div>
      </section>
    </main>
  );
}
