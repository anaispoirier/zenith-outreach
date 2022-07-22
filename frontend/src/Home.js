import React, { useState } from 'react';
import styles from './styles.module.scss';

function Home(props) {
  return (
    <div className={styles.home_outer}>
        <div className={styles.home_inner}>
            <div className={styles.home_title}>
                Discover Space
            </div>
            <div className={styles.home_timeline}>timeline</div>
        </div>
    </div>
  );
}

export default Home;