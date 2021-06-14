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
                        {/* <img alt='Sam' src={sam} />
                        <div>Software Engineer</div>
                        <a href="linkedinLink"><img src="linkedIn.png" alt="linkedIn"/></a>
                        <a href="githubLink"><img src="githubIn.png" alt="github"/></a> */}
                    </div>
                    <div className={styles.memberItem}>
                        {/* <img alt='Parker' src={parker} />
                        <div>Software Engineer</div>
                        <a href="linkedinLink"><img src="linkedIn.png" alt="linkedIn"/></a>
                        <a href="githubLink"><img src="githubIn.png" alt="github"/></a> */}
                    </div>
                    <div className={styles.memberItem}>
                        {/* <img alt='Eion' src={eion} />
                        <div>Software Engineer</div>
                        <a href="linkedinLink"><img src="linkedIn.png" alt="linkedIn"/></a>
                        <a href="githubLink"><img src="githubIn.png" alt="github"/></a> */}
                    </div>
                    <div className={styles.memberItem}>
                        {/* <img alt='Stephen' src={stephen} />
                        <div>Software Engineer</div>
                        <a href="linkedinLink"><img src="linkedIn.png" alt="linkedIn"/></a>
                        <a href="githubLink"><img src="githubIn.png" alt="github"/></a> */}
                    </div>
                </div>
        </div>
        
    );
}



export default AboutUsComp;

