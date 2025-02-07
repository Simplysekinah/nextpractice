import Image from 'next/image'
import React from 'react'
import styles from './about.module.css';

const Aboutpage = () => {
  return (
    <>
      <div>
        <div className={styles.Con}>
          <div className={styles.textCon}>
            <h2 className={styles.h2}>About Agency</h2>
            <h1 className={styles.h1}>We create digital ideas that are bigger,bolder,braver and better.</h1>
            <p className={styles.p}>
              We create digital ideas that are bigger,bolder,braver and better.We
              believe in good ideas flexibility and precission We're world's Our 
              Special Team best consulting & finance solution provider.Wide range of 
              web and software development services.
            </p>
            <div className={styles.score}>
              <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Years of experience</p>
              </div>
              <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Years of experience</p>
              </div>
              <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
          <div className={styles.imgCon}>
            <Image className={styles.img} src="/about.png" alt='picture of author' fill/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutpage