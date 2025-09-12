'use client';
import { useProduct } from '@/contexts/data/DataContext';
import { useRouter } from 'next/navigation';
import React from 'react'

    const merch = [
            { id:1, name:'Mercancia uno', price:15},
            { id:2, name:'album b', price:15},
        ]

function page() {
    const router = useRouter();
        const {setSelectedProduct} = useProduct();
    



  return (
    <>
        <h1>Merch</h1>
        {merch.map((p) => (
            <div key={p.id}>
                <h2>{p.name}</h2>
                <p>{p.price}</p>
                <button onClick={() => {
                setSelectedProduct(p),
                router.push(`/Payments?id=${p.id}&category=merch`)}}>Comprame</button>
            </div>
        ))}
    </>
  )
}

export default page