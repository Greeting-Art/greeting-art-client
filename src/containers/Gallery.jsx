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

  if (loading)
    return (
      <div className={styles.loadingSpinner}>
        <CircularProgress color="secondary" />
      </div>
    );

  return (
    <>
    <main className={styles.galleryPage}>
      <section className={styles.galleryHeader}>
        <p>Gallery</p>
      </section>
    
      <section className={styles.galleryBody}>
        <GalleryList Contents={Contents} />
      </section>
    </main>
    </>
  );
}
