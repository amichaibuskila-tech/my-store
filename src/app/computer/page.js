'use client';

import React, { useState } from 'react';
import { getComputers } from '@/services/data.js';
import { Card } from '@/app/components/Card/Card.jsx';


export default function Home() {


    return (
        <div className='page-container '>
            <h1>Computer Page</h1>

            <div className="row">

                {
                    getComputers().map(
                        (computer) => {
                            return <Card data={computer} />
                        }
                    )
                }

            </div>

        </div>
    );
}