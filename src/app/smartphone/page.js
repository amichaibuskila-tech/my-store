'use client';

import React, { useState } from 'react';
import { getSmartphone } from '@/services/data';
import { Card } from '@/app/components/Card/Card.jsx';


export default function SmartPhone() {

    return (
        <div className="smartphone-page page-container">
            <h1>SmartPhone Page</h1>
            <div className="row">
                {
                    getSmartphone().map(
                        (phone) => {
                            return <Card data={phone} />
                        }
                    )
                }
            </div>
        </div>
    );
}