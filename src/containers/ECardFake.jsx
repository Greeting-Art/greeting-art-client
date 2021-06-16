/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import styles from './ECard.css';
import { sendMsg } from '../utils/sendGridMessage';
import { useHistory } from 'react-router-dom';

export default function ECard() {
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [emailSent, setSent] = useState(true);
  const [artId, setArtId] = useState('7c4e1ed9-1ec7-43f6-93a5-12be6d0b3bd4.jpg');
  const [formData, setForm] = useState({
    email: '',
    senderName: '',
    message: ''
  });

  let history = useHistory();

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
    await fetch('https://limitless-everglades-53305.herokuapp.com/send', sendMsg(formData, artId))
      .then(res => res.json())
      .then(setSent(false))
  }

  const handleReroute = () => {
    
    history.push('/')
  }

  if (loading) return <h2>loading...</h2>;

  return (
    <main className={styles.eCardPage}>
      <section className={styles.eCardHeader}>
        <h1>Choose a Greeting Art from the Gallery before sending an E-card</h1>
      </section>
        
      <section className={styles.eCardBody}>
      
        <div className={styles.eCardDisplay}>
          <figure className={styles.canvasWrapper}>
            <img
              src={`https://greetingart.s3.us-west-2.amazonaws.com/7c4e1ed9-1ec7-43f6-93a5-12be6d0b3bd4.jpg`}
              height="360"
              width="360"
            />
          </figure>
        </div>
        <div className={styles.eCardFormParent}>
          {emailSent ? (
          <form className={styles.eCardForm}>
            <label>Recipient Email: </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleForm}
            />
            <label>Your Name: </label>
            <input
              type='text'
              name='senderName'
              value={formData.senderName}
              onChange={handleForm}
            />
            <label>Message (optional): </label>
            <br />
            <textarea className={styles.eCardTextArea}
              name='message'
              value={formData.message}
              onChange={handleForm}
            />
            <br /><br />
            <button
              className={styles.buttons}
              disabled={disabled}
              onClick={handleSumbit}>Send</button>
          </form>
         ) : (
           <div className={styles.sentMsg}>
          <h1>You E-card has been sent!</h1>
          <button 
            className={styles.buttons}
            onClick={handleReroute}>Create Art</button>
          </div>
          )
}
        </div>
      </section>
      <section className={styles.eCardFooter}>
        <br />
        
      </section>
    </main>
  );
}
