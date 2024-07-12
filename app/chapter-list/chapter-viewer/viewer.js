"use client";

import { Suspense } from 'react';
import ViewerContent from '@/components/reader-components/ViewerContent';

const Viewer = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ViewerContent />
        </Suspense>
    );
};

export default Viewer;
