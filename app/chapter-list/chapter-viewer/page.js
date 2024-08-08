"use client";

import { Suspense } from 'react';
import Viewer from '@/components/reader-components/ViewerContent';
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
            <div className="bg-black w-full min-h-screen justify-center items-center">
                <Heading/>
                <div className='mb-24'>
                    <Viewer />
                </div>
                <Footing/>
            </div>
        </Suspense>
    )
}
