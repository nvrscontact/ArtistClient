'use client';
import { useProduct } from '@/contexts/data/DataContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React from 'react'

    const albums = [
    {   id:1, 
        name:'Midnights Album',
        price:15,
        img:'/midnightsAlbum.jpg'
    },
    {   id:2, 
        name:'Red Album', 
        price:15,
        img:'/red_album.jpg'
    },
    {   id:3, 
        name:'Red Album', 
        price:15,
        img:'/folklore.jpg'
    },
    {   id:4, 
        name:'Red Album', 
        price:15,
        img:'/style_album.jpg'
    },
    ]

    function page() {

    const {setSelectedProduct} = useProduct();
    const router = useRouter();
        


  return (
    <>

    <section className='flex flex-col items-center mx-auto mt-10 mb-8'>
        <h1 className='text-white/70 text-3xl text-center '>Albums</h1>
        <span className='text-white/40 text-[12px] '>Available to Buy</span>
    </section>    

    <section className='flex flex-col border'>   
        {albums.map((p) => (
            
            <div key={p.id} className='text-center'>
                <Image src={p.img} alt="" width='120' height='120' onClick={() => { 
                    setSelectedProduct(p),
                    router.push(`/Payments?id=${p.id}&category=albums`)
                }} />
                <h2>{p.name}</h2>
                <p>{p.price}</p>
                <button onClick={() => { 
                    setSelectedProduct(p),
                    router.push(`/Payments?id=${p.id}&category=albums`)
                }} className='bg-black/40 border border-white/30'>Order</button>
            </div>

        ))}
    </section>
    </>
  )
}

export default page