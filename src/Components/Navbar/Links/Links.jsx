"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import styles from './Links.module.css'
import NavbarLink from './navbarLink/NavbarLink';
import Image from 'next/image';

const Links = () => {
    const [open, setopen] = useState(false)
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/About",
        },
        {
            title: "Contact",
            path: "/Contact",
        },
        {
            title: "Blog",
            path: "/Blog",
        }
    ];

    // const session =[
    //     {
    //         title:"Login",
    //         path:"/login"
    //     },
    //     {
    //         title:"Register",
    //         path:"/register"
    //     }
    // ];

    const session = true;
    const isAdmin = true;
    return (
        <>
            <div className={styles.container}>

                <div className={styles.links}>

                    {
                        links.map((link => (
                            <NavbarLink item={link} key={link.title} />
                            // <Link  href={link.path}  key={link.title}>{link.title}</Link>
                        )))
                    }
                    {
                        session ? (
                            <>
                                {
                                    isAdmin && (
                                        <NavbarLink item={{ title: "Admin", path: "/Admin" }} />
                                    )
                                }
                                <button className={styles.logout}>Logout</button>
                            </>
                        ) : (
                            <NavLink item={{ title: "Login", path: "/Login" }} />
                        )
                    }
                </div>
                {/* <button className={styles.menubutton} onClick={() => setopen((prev) => !prev)}>Menu</button> */}
                <Image src='/menu.png' className={styles.menubutton} width={30} height={30} onClick={() => setopen((prev) => !prev)}/>
                {
                    open && <div className={styles.mobile}>
                        {
                            links.map((link => (
                                <NavbarLink item={link} key={link.title} />
                            )))
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default Links