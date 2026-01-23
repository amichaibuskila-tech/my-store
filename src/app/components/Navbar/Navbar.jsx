import React from 'react';
import styles from "./Navbar.module.css";
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <p>

                LOGO

            </p>
            <p>

                <Link href="/computer"> computers </Link> |
                <Link href="/smartphone"> smart phone </Link> |
                <Link href="/smartwatch"> smart watch </Link> 

            </p>
            <p>

            </p>
        </nav >
    );
}