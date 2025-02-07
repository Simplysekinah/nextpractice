import React from 'react'
import Image from 'next/image'
import styles from './home.module.css'
const Home = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.textcontain}>
        <h1 className={styles.h1}>Creative Thoughts Agency</h1>
        <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus in impedit, aspernatur obcaecati rerum hic recusandae modi aliquam tempora saepe quod id quidem odit itaque aut cumque consequuntur exercitationem!</p>
        <div className={styles.btn}>
          <button className={styles.learn}>Learn More</button>
          <button className={styles.contact}>Contact</button>
        </div>
        <div className={styles.picgrp}>
          <Image src='/brands.png' alt='picture-grp' fill className={styles.grp}/>
        </div>
      </div>
      <div className={styles.imgcontain}>
      <Image src='/hero.gif' alt='picture-grp' fill className={styles.side}/>
      </div>
    </div>
  )
}

export default Home