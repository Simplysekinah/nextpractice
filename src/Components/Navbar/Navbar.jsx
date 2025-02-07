import Link from 'next/link'
import React from 'react'
import Links from './Links/Links'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
       <div className={styles.containers}>
            <div href="/" className={styles.logo}>Logo</div>
            <div>
                <Links/>
            </div>
        </div> 
    </>
  )
}

export default Navbar