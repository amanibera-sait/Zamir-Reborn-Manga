"use client";

import { Suspense } from 'react';
import Viewer from '@/components/reader-components/ViewerContent';
import React from 'react';

export default function page() {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Viewer />
        </Suspense>
    )
}
