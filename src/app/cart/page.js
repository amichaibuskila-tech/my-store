'use client';

import React, { useState } from 'react';
import Button from '@/app/components/Button/Button.jsx'


export default function Cart() {

    function aaa() {
        alert("Hey")
    }

    return (
        <div className='page-container'>
            <h1>Cart Page</h1>
            <Button callBack={aaa} />
        </div>
    );
}