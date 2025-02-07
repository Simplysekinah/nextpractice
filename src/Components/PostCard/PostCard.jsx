import React from 'react'
import styles from './postcard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <>
      <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.imgcon}>
              <Image src='/dubaibeach.png' alt='picture' fill className={styles.img}/>
            </div>
            <span className={styles.date}>o2.02.2025</span>
          </div>
          <div className={styles.bottom}>
            <h1 className={styles.h1}>Title</h1>
            <p className={styles.p}>Desc</p>
            <Link href="/blog/post">Read More</Link>
          </div>
      </div>
    </>
  )
}

export default PostCard