/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import styles from './Gallery.css';
import GalleryList from '../components/galleryList/GalleryList';
import { getGallery } from '../utils/s3-utils';
import CircularProgress from '@material-ui/core/CircularProgress';
import { sortGallery } from '../utils/utils';

export default function Gallery() {
  const [loading, setLoading] = useState(true);
  const [Contents, setContents] = useState([]);  

  useEffect(() => {
    getGallery()
    .then((Contents) => setContents(sortGallery(Contents)))
      .finally(() => setLoading(false));
  }, []);

  // if (loading) return <h2 className={styles.loadingIndicator}>loading...</h2>;
  if (loading)
    return (
      <div className={styles.loadingSpinner}>
        <CircularProgress color="secondary" />
      </div>
    );

  return (
    <main className={styles.galleryPage}>
      <section className={styles.galleryHeader}>
        <p>Gallery</p>
      </section>
      <section className="gallery-art">
        <GalleryList Contents={Contents} />
      </section>

      <section className={styles.galleryBody}>
        <div className={styles.controlBar}>
          <button>← Page</button>
          <button>Page →</button>
        </div>
        <div className={styles.galleryBar}>
          <div className={styles.centerColumn}>
            <figure className={styles.canvasWrapper}>
              {/* <img
                src="https://ca-times.brightspotcdn.com/dims4/default/3212b7e/2147483647/strip/true/crop/3167x2000+0+0/resize/1486x938!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2Fb2%2Fd435345b4a44b49ac1191f05e8d4%2Fla-ca-muppet-show-disney-plus-hensonv2.jpg"
                width="480"
              /> */}
            </figure>
          </div>
        </div>
        <div className={styles.lowerBar}>
          <button>Send Art as eCard</button>
        </div>
      </section>
    </main>
  );
}
