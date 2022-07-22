import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import styles from './styles.module.scss';

import Discover from './Discover';
import Header from './Header';
import Home from './Home';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Contact from './Contact';

// Little helpers ...
const url = (name, wrap=false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


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
  const [scroll, setScroll] = useState(0);

  const parallaxRef = useRef();

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

  const onHeaderPageClick = (page) => {
    console.log("PAGE", page);
    setCurrentPage(page);
    parallaxRef.current.scrollTo(page.id);
  }

  const onScroll = () => {
    console.log("on scroll")
    console.log(parallaxRef.current.current / parallaxRef.current.space);
  }

  useEffect(() => {
    if (!parallaxRef.current || !parallaxRef.current.container) return
    parallaxRef.current.container.onscroll = onScroll

    console.log("HERE: setting scroll", parallaxRef.current.container);
  })

  return (
    <div className={styles.main}>
      
      <Parallax ref={parallaxRef} pages={3} style={{ top: '0', left: '0' }} onScroll={onScroll}>
        
        {/* Header */}
        <ParallaxLayer
          sticky={{ start: 0, end: 3 }}
          style={{ height: "auto" }}
        >
          <div className={styles.main_header}>
            <Header
              pages={pages}
              currentPage={currentPage}
              handleChangePage={handleChangePage}
              onPageClick={onHeaderPageClick}
            />
          </div>
        </ParallaxLayer>

        {/* Background */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
            backgroundColor: '#014465'
          }}
        />
        
        {/* Home Page */}
        <ParallaxLayer
          offset={0}
          speed={1.5}
          className={styles.parallax}
        >
          <div id="main" className={styles.main_content}>
            <Home />
          </div>
        </ParallaxLayer>

        {/* Discover Offset */}
        <ParallaxLayer offset={1} speed={0} className={styles.parallax_discover_bg} />
        
        {/* Discover Page */}
        <ParallaxLayer
          offset={1}
          speed={1.5}
          className={styles.parallax}
        >
          <Discover  />
        </ParallaxLayer>

        {/* Contact Offset */}
        <ParallaxLayer offset={2} speed={0} />
        
        {/* Contact Page */}
        <ParallaxLayer
          offset={2}
          speed={1.5}
          className={styles.parallax}
        >
          <Contact  />
        </ParallaxLayer>

      </Parallax>
    </div>
    
  );
}

export default App;
