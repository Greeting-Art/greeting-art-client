import React from 'react';
import styles from './header.css';
import PropTypes from 'prop-types';

export default function HelpModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <main className={styles.newModal}>
      <section className={styles.newModalContent}>
        <div className={styles.newModalHeader}>
          <h4 className={styles.newModalTitle}>Welcome to Greeting Art!</h4>
        </div>
        <div className={styles.newModalBody}>
          <p>
            This app is designed to be fun and easy to use! Here's a brief guide
            to the features:
          </p>
          <p className={styles.helpItem}>
            🖌 Click <b>Randomize</b> on the homepage to create unique,
            generative digital art, and then if you'd like:
            <ul className={styles.helpList}>
              <li>save your art as a download</li>
              <li>add your art to the Gallery</li>
            </ul>
          </p>

          <p className={styles.helpItem}>
            🖼 Browse artwork:
            <ul className={styles.helpList}>
              <li>
                use the upper-left-hand menu to navigate to the <b>Gallery</b>
              </li>
              <li>select any art to send as an e-greeting-card</li>
            </ul>
          </p>

          <p className={styles.helpItem}>
            ✉ Send an E-Greeting Card:
            <ul className={styles.helpList}>
              <li>select any art from the Gallery</li>
              <li>add an email address, day/time and a message</li>
              <li>send away!</li>
            </ul>
          </p>
        </div>
        <div className={styles.newModalFooter}>
          <button onClick={onClose} className={styles.modalCloseButton}>
            close
          </button>
        </div>
      </section>
    </main>
  );
};

HelpModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};
