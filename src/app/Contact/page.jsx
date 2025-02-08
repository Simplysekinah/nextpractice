"use clients"
import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

const Contactpage = () => {
  return (
    <>
      <div className={styles.con}>
        <div className={styles.imgcon}>
          <Image className={styles.img} src='/contact.png' alt='contact' fill/>
        </div>
        <div className={styles.txtcon}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='Name and Surname' />
                <input type="email" placeholder='Email address' />
                <input type="text" placeholder='Phone Number(Optional)' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button>Send</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contactpage