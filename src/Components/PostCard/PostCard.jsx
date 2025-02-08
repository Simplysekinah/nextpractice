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
              <Image src='https://images.pexels.com/photos/1931143/pexels-photo-1931143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='picture' fill className={styles.img}/>
            </div>
            <span className={styles.date}>o2.02.2025</span>
          </div>
          <div className={styles.bottom}>
            <h1 className={styles.h1}>Title</h1>
            <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsa recusandae modi eaque sit delectus, totam velit assumenda magnam? Iste deleniti ea incidunt aut impedit sapiente nulla! Aperiam, vel fugiat?</p>
            <Link className={styles.read} href="/Blog/Singlepage">Read More</Link>
          </div>
      </div>
    </>
  )
}

export default PostCard