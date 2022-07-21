import React, { useState, useEffect } from 'react';
import './App.css';
import styles from './styles.module.scss';

import Discover from './Discover';
import Header from './Header';
import Home from './Home';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'


// import { pages as initialPages } from './constants';

function App() {

  // const [pages, setPages] = useState(initialPages);
  const pages = [
    {
      id: 0,
      title: "Home",
      element: <Home />
    },
    {
      id: 1,
      title: "Discover",
      element: <Discover />
    },
    {
      id: 2,
      title: "Contact",
      element: <Home />
    },
  ];
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [scroll, setScroll] = useState(0)

  const handleChangePage = (page) => {
    setCurrentPage(page);
  }

  const handleScroll = () => {
    console.log("in event listnener");
    const scrollCheck = window.scrollY > 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
  }

  // useEffect(() => {
  //   var mainElem = document.getElementById("main");
  //   mainElem.addEventListener("scroll", handleScroll());
  // }, [])

  

  return (
    <div className={styles.main}>
      <div className={styles.main_header}>
        <Header
          pages={pages}
          currentPage={currentPage}
          handleChangePage={handleChangePage}
        />
      </div>
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          className={styles.parallax_home}
        >
          <div id="main" className={styles.main_content}>
            <Home />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#f5f5f5' }} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          className={styles.parallax_discover}
        >
          <Discover />
        </ParallaxLayer>
      </Parallax>
    </div>
    
  );
}

export default App;
