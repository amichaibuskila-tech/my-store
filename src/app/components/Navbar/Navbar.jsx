import React from 'react';
import styles from "./Navbar.module.css";
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <p>
                <Link href="/">KSP</Link>
            </p>

            <p>
                <Link href="/computer"> computers </Link> |
                <Link href="/smartphone"> Smartphone </Link> |
                <Link href="/smartwatch"> Smartwatch </Link> |
                <Link href="/cart"> Cart</Link>
            </p>
            <p>

            </p>
        </nav>
    );
}