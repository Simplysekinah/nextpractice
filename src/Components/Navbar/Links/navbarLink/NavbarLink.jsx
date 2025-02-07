"use client";
import React from 'react'
import Link from 'next/link'
import styles from './NavbarLink.module.css'
import { usePathname } from 'next/navigation'

const NavbarLink = ({ item }) => {
  const pathname = usePathname()
  return (
    <Link href={item.path} className={`${styles.containers} ${pathname === item.path && styles.active}`}>
      {item.title}
    </Link>
    // <div className={style.containers}>NavbarLink</div>
  )
}

export default NavbarLink