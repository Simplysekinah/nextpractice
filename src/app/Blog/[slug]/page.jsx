import React from 'react'
import styles from './singlepage.module.css'
import Image from 'next/image'

const Singlepage = () => {
  return (
    <>
      <div className={styles.con}>
        <div className={styles.imgcon}>
          <Image className={styles.img} fill src='https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600' alt='picture' />
        </div>
        <div className={styles.txtcon}>
          <h1 className={styles.h1}>Tittle</h1>
          <div className={styles.dtls}>
            <Image className={styles.avatar} width='50' height='25'  src='https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='picture' />
            <div className={styles.dtlst}>
              <span className={styles.tit}>Author</span>
              <span className={styles.titd}>SimplySekinah</span>
            </div>
            <div className={styles.dtlst}>
              <span className={styles.tit}>Published</span>
              <span className={styles.titd}>08.02.2025</span>
            </div>
          </div>
          <div className={styles.contents}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis possimus laborum rem repellat incidunt, animi odio id illum debitis aliquid ipsa cumque officiis, consequatur totam exercitationem distinctio quod ratione!
          </div>
        </div>
      </div>
    </>
  )
}

export default Singlepage