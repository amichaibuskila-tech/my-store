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

                <Link href="/women">women</Link> |
                <Link href="/kids">kids</Link> |
                <Link href="/men">men</Link>

            </p>
            <p>

            </p>
        </nav >
    );
}