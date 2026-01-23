import React from 'react';
import styles from "./Button.module.css";

export default function Button({ callBack }) {

    return (
        <div className={styles.container} onClick={callBack}>
            <p>Click</p>
        </div>
    );
}