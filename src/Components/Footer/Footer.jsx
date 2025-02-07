import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.containers}>
        <div className={styles.logo}>
          SimplySekinah
        </div>
        <div className={styles.text}>Sekinah creative thoughts All rights reserved.</div>
      </div>
    </>
  )
}

export default Footer