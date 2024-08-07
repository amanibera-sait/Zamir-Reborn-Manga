"use client";

import { Suspense } from 'react';
import Viewer from '@/components/reader-components/ViewerContent';
import React from 'react';
import Footing from '@/components/layout-components/Footer';
import Heading from '@/components/layout-components/Header';

export default function page() {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Heading/>
            <Viewer />
            <Footing/>
        </Suspense>
    )
}
