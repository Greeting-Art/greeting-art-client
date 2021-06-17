/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import styles from './aboutUs.css';
import linkedIn from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import Blob from '../../assets/appIcons/blob-ross_8f128.gif';
import Eion from '../../assets/teamPics/Eion.jpg';
import Parker from '../../assets/teamPics/Parker.jpg';
import Sam from '../../assets/teamPics/Sam_1.jpg';
import Stephen from '../../assets/teamPics/Stephen.jpg';

function AboutUsComp() {
  return (
    <>
      <p className={styles.teamHeader}>About the Team</p>
    <div className={styles.teamContainer}>
      <div className={styles.teamMembers}>
        <div className={styles.memberItem}>
        <img className={styles.memberImage} alt="Eion" src={Eion}/>
          <h4>Eion Nelson</h4>
          <p className={styles.devTitle}>Software Developer</p>
          <p>
            <a
              href="https://www.linkedin.com/in/eionnelson/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.linkedInLogo}
                src={linkedIn}
                alt="linkedIn"
              />
            </a>
            <a
              href="https://github.com/ecnelson1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.githubLogo}
                src={github}
                alt="github"
              />
            </a>
          </p>
        </div>
        <div className={styles.memberItem}>
        <img className={styles.memberImage} alt="Parker" src={Parker}/>
          <h4>Parker Sequeira</h4>
          <p className={styles.devTitle}>Software Developer</p>
          <p>
            <a
              href="https://www.linkedin.com/in/parker-sequeira/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.linkedInLogo}
                src={linkedIn}
                alt="linkedIn"
              />
            </a>
            <a
              href="https://github.com/phsequeira"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.githubLogo}
                src={github}
                alt="github"
              />
            </a>
          </p>
        </div>

        <div className={styles.memberItem}>
          <img className={styles.blobImage} alt="Blob" src={Blob} />
          <h4>Blob Ross</h4>
          <p className={styles.devTitle}>Sr. Art Generator</p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=YLO7tCdBVrA"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.linkedInLogo}
                src={linkedIn}
                alt="linkedIn"
              />
            </a>
            <a
              href="https://github.com/Greeting-Art"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.githubLogo}
                src={github}
                alt="github"
              />
            </a>
          </p>
        </div>
      </div>
        <div className={styles.memberItem}>
        <img className={styles.memberImage} alt="Sam" src={Sam}/>
          <h4>Sam Gerber</h4>
          <p className={styles.devTitle}>Software Developer</p>
          <p>
            <a
              href="https://www.linkedin.com/in/sam-h-gerber/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.linkedInLogo}
                src={linkedIn}
                alt="linkedIn"
              />
            </a>
            <a
              href="https://github.com/sgerpdx"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.githubLogo}
                src={github}
                alt="github"
              />
            </a>
          </p>
        </div>
        <div className={styles.memberItem}>
        <img className={styles.memberImage} alt="Stephen" src={Stephen}/>
          <h4>Stephen Tamiesie</h4>
          <p className={styles.devTitle}>Software Developer</p>
          <p>
            <a
              href="https://www.linkedin.com/in/stephentamiesie/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.linkedInLogo}
                src={linkedIn}
                alt="linkedIn"
              />
            </a>
            <a
              href="https://github.com/stamiesie"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.githubLogo}
                src={github}
                alt="github"
              />
            </a>
          </p>
        </div>
        
      <footer className={styles.aboutFooter}>
      **This app was made using resources by p5*js, AWS, SendGrid, Material-UI, FlatIcon and 3D Thirteen Pixel and Pixel Caps fonts by 30100flo and Mirz123, respectively. Blob Ross would also like to thank PiskelApp and last but certainly not least, "Blob Master" Jerud. Happy Rendering!
      </footer>
    </div>
    </>
  );
}

export default AboutUsComp;
