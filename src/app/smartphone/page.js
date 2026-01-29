'use client';

import React, { useState, useEffect } from 'react';
import { getPhones } from '@/services/data';
import { Card } from '@/app/components/Card/Card.jsx';


export default function SmartPhone() {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // Fetch phones data when the component mounts
        const fetchPhones = async () => {
            const data = await getPhones();
            setPhones(data);
        };

        fetchPhones();
    }, []);


   if (phones) return (
        <div className="smartphone-page page-container">
            <h1>SmartPhone Page</h1>
            <div className="row">
                {
                    
                    phones.map(
                        (phone) => {
                            console.log(phone);
                            return <Card data={phone} />
                        }
                    )
                }
            </div>
        </div>
    );
}