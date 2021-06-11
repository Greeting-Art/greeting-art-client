/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import styles from './ECard.css';
import { sendMsg } from '../utils/sendGridMessage';

export default function ECard() {
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [emailSent, setSent] = useState('');
  const [formData, setForm] = useState({
    email: '',
    senderName: '',
    message: ''
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (formData.email.length > 1 && formData.senderName.length > 1) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }, [formData.email, formData.senderName])

  const handleForm = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSumbit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:7890/send', sendMsg(formData))
      .then(res => res.json())
      .then(setSent('You have sent an email successfully'))
  }

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
          <form>
            <label>Recipient Email: </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleForm}
            />
            <br /><br />
            <label>Your Name: </label>
            <input
              type='text'
              name='senderName'
              value={formData.senderName}
              onChange={handleForm}
            />
            <br /><br />
            <label>Message (optional): </label>
            <br />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleForm}
            />
            <br /><br />
            <button
              disabled={disabled}
              onClick={handleSumbit}>Send</button>
          </form>
        </div>
      </section>
      <section className={styles.eCardFooter}>footer
        <br />
        <h1>{emailSent}</h1>
      </section>
    </main>
  );
}
