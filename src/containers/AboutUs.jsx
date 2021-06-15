/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import AboutUsComp from '../components/aboutUs/AboutUs';
import styles from '../components/aboutUs/aboutUs.css';

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <h2 className={styles.loadingIndicator}>loading...</h2>;

  return (
    // <div>
    //   <AboutUsComp />
    // </div>

    <main className={styles.aboutPage}>
      <section className={styles.aboutHeader}></section>

      <section className={styles.aboutBody}>
        <div className={styles.aboutBar}>
          <div className={styles.leftColumn}>
            <p>left</p>
          </div>
          <div className={styles.centerColumn}>
            <AboutUsComp />
          </div>
          <div className={styles.rightColumn}>
            <p>right</p>
          </div>
        </div>
        <div className={styles.lowerBar}>
          <p>lower margin</p>
        </div>
      </section>
    </main>
  );
}
