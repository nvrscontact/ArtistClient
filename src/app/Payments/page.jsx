'use client'
import PaymentsContent from '@/components/PaymentsContent';
import { Suspense } from 'react';


function page() {  
  
  return (
    <Suspense fallback={<p>...</p>}>
    <PaymentsContent/>
    </Suspense>
  )
}

export default page