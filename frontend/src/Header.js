import React, { useState } from 'react';
import styles from './styles.module.scss';

function Header(props) {
  return (
    <div className={styles.header_container}>
        <div className={styles.header_title}>
            Why Space?
        </div>
        <div className={styles.header_pages}>
            {props.pages.map(pg=>{
                return(
                    <div 
                        key={pg.id}
                        className={styles.header_page} 
                        onClick={(e)=>props.handleChangePage(pg)}
                        style={ props.currentPage.id === pg.id ? {fontWeight: 700} : {} }
                    >
                        {pg.title}
                    </div>
                )}
            )}
        </div>
    </div>
  );
}

export default Header;