import React, { useState } from 'react';
import styles from './styles.module.scss';

function Home(props) {
  return (
    <div className={styles.home_container}>
        <div className={styles.home_title}>
            Discover Space
        </div>
        <div className={styles.test}>
            <div className={styles.home_timeline_container}>
                events go here
            </div>
            <div className={styles.test_image}></div>
        </div>
        
    </div>
  );
}

export default Home;