/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styles from './ECard.css';
import { sendMsg } from '../utils/sendGridMessage';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ECard() {
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [emailSent, setSent] = useState(true);
  const [artId, setArtId] = useState('');
  const [formData, setForm] = useState({
    email: '',
    senderName: '',
    message: '',
  });

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    setLoading(false);
    setArtId(id);
  }, []);

  useEffect(() => {
    if (formData.email.length > 1 && formData.senderName.length > 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData.email, formData.senderName]);

  const handleForm = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault()
    await fetch('https://limitless-everglades-53305.herokuapp.com/send', sendMsg(formData, artId))
      .then(res => res.json())
      .then(setSent(false))
  }

  const handleReroute = () => {
    
    history.push('/')
  }

  // if (loading) return <h2>loading...</h2>;
  if (loading)
    return (
      <div className={styles.loadingSpinner}>
        <CircularProgress color="secondary" />
      </div>
    );

  return (
    <main className={styles.eCardPage}>
      <section className={styles.eCardHeader}>
        <h1>ECard</h1>
      </section>

      <section className={styles.eCardBody}>
        <div className={styles.eCardDisplay}>
          <figure className={styles.canvasWrapper}>
            <img
              src={`https://greetingart.s3.us-west-2.amazonaws.com/${id}`}
              height="360"
              width="360"
            />
          </figure>
        </div>
        <div className={styles.eCardForm}>
          {emailSent ? (
          <form>
            <label>Recipient Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleForm}
            />
            <br />
            <br />
            <label>Your Name: </label>
            <input
              type="text"
              name="senderName"
              value={formData.senderName}
              onChange={handleForm}
            />
            <br />
            <br />
            <label>Message (optional): </label>
            <br />
            <textarea
              name="message"
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
           <div>
          <h1>You ecard has been sent</h1>
          <button 
            className={styles.buttons}
            onClick={handleReroute}>Create Art</button>
          </div>
          )
}
        </div>
      </section>
      <section className={styles.eCardFooter}>
        footer
        <br />
        
      </section>
    </main>
  );
}
