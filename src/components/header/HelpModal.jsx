import React from 'react';
import styles from './header.css';

export default function HelpModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    // <div className={styles.helpBox}>
    //   <p id="simple-modal-title" className={styles.welcomeText}>
    //     Hey there -- this app is designed to be fun and simple to use:
    //   </p>
    //   <ul id="simple-modal-description">
    //     <li>
    //       <p>just click 'Random' to make art!</p>
    //     </li>
    //     <li>
    //       <p>check out the Menu to visit the Gallery</p>
    //     </li>
    //     <li>
    //       <p>after you select Gallery art, you can send it as an eCard</p>
    //     </li>
    //   </ul>
    // </div>
    <main className={styles.newModal}>
      <section className={styles.newModalContent}>
        <div className={styles.newModalHeader}>
          <h4 className={styles.newModalTitle}>Hey There!</h4>
        </div>
        <div className={styles.newModalBody}>
          <p>make art</p>
          <p>browse gallery</p>
          <p>send cCard</p>
        </div>
        <div className={styles.newModalFooter}>
          <button onClick={onClose} className={styles.modalCloseButton}>
            Close
          </button>
        </div>
      </section>
    </main>
  );
}
