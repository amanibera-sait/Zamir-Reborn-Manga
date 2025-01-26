"use client";

import { Suspense } from 'react';
import Reader from '@/components/reader-components/ViewerContent';
import React from 'react';
import Footing from '@/components/layout-components/Footer';
import Heading from '@/components/layout-components/Header';
import Loading from 'react-loading';

export default function page() {
    return(
        <Suspense 
            fallback={<div className='flex m-72 justify-center items-center text-xl font bold'>
            <Loading type="spin" height={'10%'} width={'10%'} color="#deb018"/>
            </div>}>
            <div className="bg-neutral-900 w-full min-h-screen justify-center items-center">
                <Heading/>
<<<<<<< HEAD
                <div>
=======
                <div className='mb-24'>
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f
                    <Reader />
                </div>
                <Footing/>
            </div>
        </Suspense>
    )
}
