import React from 'react';
import styles from './header.css';

export default function HelpModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <main className={styles.newModal}>
      <section className={styles.newModalContent}>
        <div className={styles.newModalHeader}>
          <h4 className={styles.newModalTitle}>Hey There!</h4>
        </div>
        <div className={styles.newModalBody}>
          <ul>
            <li>
              <p>🖌 make art</p>
            </li>
            <li>
              <p>🖼 browse gallery</p>
            </li>
            <li>
              <p>✉ send cCard</p>
            </li>
            <li>
              <p>🖱 meet the team</p>
            </li>
          </ul>
        </div>
        <div className={styles.newModalFooter}>
          <button onClick={onClose} className={styles.modalCloseButton}>
            close
          </button>
        </div>
      </section>
    </main>
  );
}
