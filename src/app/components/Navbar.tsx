"use client";

import Link from "next/link"
import React, { useState } from "react"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import styles from '../styles/landing-page/Navbar.module.scss'

export const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <header className={styles.header}>
                <div className={styles.navbar}>
                    <Link href="#">
                        <h2 className={`text-3xl font-bold ${styles.nav_logo}`}>kovcheg.eu</h2>
                    </Link>
                    <div>
                        <div>
                            <div
                                className={`justify-self-center lg:block lg:pb-0 lg:mt-0 ${menu ? 'block' : 'hidden'}`}>
                                <ul className="flex items-center justify-center gap-8 transition-all duration-500 ease-in max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:h-[100vh] max-lg:w-[100vw] max-lg:bg-[#fff] max-lg:-z-[10] max-lg:flex-col max-lg:gap-10 max-lg:text-3xl max-[768px]:text-xl">
                                    <li className={styles.menu_item}>
                                        <Link onClick={() => setMenu(!menu)} href="/">
                                            Головна
                                        </Link>
                                    </li>
                                    <li className={styles.menu_item}>
                                        <Link onClick={() => setMenu(!menu)} href="/offers-page/">
                                            Оголошення
                                        </Link>
                                    </li>
                                    <li className={styles.menu_item}>
                                        <Link onClick={() => setMenu(!menu)} href="#">
                                            Додаткова інформація
                                        </Link>
                                    </li>
                                    <li className={styles.menu_item}>
                                        <Link onClick={() => setMenu(!menu)} href="/posts-page/">
                                            Статті
                                        </Link>
                                    </li>
                                    <li className={styles.menu_item}>
                                        <Link onClick={() => setMenu(!menu)} href="#contact">
                                            Контакти
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className=" outline-none focus:border-0 hidden max-lg:block"
                                onClick={() => setMenu(!menu)}
                            >
                                {menu ? (
                                    <MenuRoundedIcon />
                                ) : (
                                    <MenuRoundedIcon />
                                )}
                            </button>
                            <div className="lg:hidden">
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}