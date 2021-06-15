/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import styles from './aboutUs.css';
// import team member photos here


function AboutUsComp() {
    return (
        <div className={styles.teamContainer}>
            <h1 className={styles.teamHeader}>About the Team</h1>
                <div className={styles.teamMembers}>
                    <div className={styles.memberItem}>
                        <p>Photo goes here!</p>
                        {/* <img alt='Sam' src={sam} /> */}
                        <div>Eion</div>
                            <p>
                                <a href="https://www.linkedin.com/in/eionnelson/" target="_blank" rel="noreferrer noopener"><img className={styles.linkedInLogo} src="src/assets/linkedin.png" alt="linkedIn"/></a>
                                <a href="https://github.com/ecnelson1" target="_blank" rel="noreferrer noopener"><img className={styles.githubLogo} src="src/assets/github.png" alt="github"/></a>
                            </p>
                    </div>
                    <div className={styles.memberItem}>
                        <p>Photo goes here!</p>
                        {/* <img alt='Sam' src={sam} /> */}
                        <div>Parker</div>
                            <p>
                                <a href="https://www.linkedin.com/in/parker-sequeira/" target="_blank" rel="noreferrer noopener"><img className={styles.linkedInLogo} src="src/assets/linkedin.png" alt="linkedIn"/></a>
                                <a href="https://github.com/phsequeira" target="_blank" rel="noreferrer noopener"><img className={styles.githubLogo} src="src/assets/github.png" alt="github"/></a>
                            </p>
                    </div>
                    <div className={styles.memberItem}>
                        <p>Photo goes here!</p>
                        {/* <img alt='Sam' src={sam} /> */}
                        <div>Sam G</div>
                            <p>
                                <a href="https://www.linkedin.com/in/sam-h-gerber/" target="_blank" rel="noreferrer noopener"><img className={styles.linkedInLogo} src="src/assets/linkedin.png" alt="linkedIn"/></a>
                                <a href="https://github.com/sgerpdx" target="_blank" rel="noreferrer noopener"><img className={styles.githubLogo} src="src/assets/github.png" alt="github"/></a>
                            </p>
                    </div>
                    <div className={styles.memberItem}>
                        <p>Photo goes here!</p>
                        {/* <img alt='Sam' src={sam} /> */}
                        <div>Stephen</div>
                            <p>
                                <a href="https://www.linkedin.com/in/stephentamiesie/" target="_blank" rel="noreferrer noopener"><img className={styles.linkedInLogo} src="src/assets/linkedin.png" alt="linkedIn"/></a>
                                <a href="https://github.com/stamiesie" target="_blank" rel="noreferrer noopener"><img className={styles.githubLogo} src="src/assets/github.png" alt="github"/></a>
                            </p>
                    </div>
                </div>
        </div>
        
    );
}



export default AboutUsComp;

