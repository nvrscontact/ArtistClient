'use client';
import { useProduct } from '@/contexts/data/DataContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React from 'react'

    const albums = [
    {   id:1, 
        name:'Midnights',
        price:15,
        img:'/midnightsAlbum.jpg'
    },
    {   id:2, 
        name:'Red', 
        price:15,
        img:'/red_album.jpg'
    },
    {   id:3, 
        name:'Red', 
        price:15,
        img:'/folklore.jpg'
    },
    {   id:4, 
        name:'Red', 
        price:15,
        img:'/style_album.jpg'
    },
    ]

    function page() {

    const {setSelectedProduct} = useProduct();
    const router = useRouter();
        


  return (
    <>

    <section className='flex flex-col items-center mx-auto my-10'>
        <h1 className='text-white/70 text-3xl text-center '>Albums</h1>
        <span className='text-white/40 text-[12px] '>Available to Buy</span>
    </section>    

    <section className='flex flex-col gap-32 mx-10'>   
        {albums.map((p) => (
            
            <div key={p.id} className='flex  flex-col items-start'>
                <h2 className='text-[20px]'>{p.name}</h2>
                <span className='text-xs text-white/60'>February 2018</span>
                <Image src={p.img} alt="" width='160' height='160' onClick={() => { 
                    setSelectedProduct(p),
                    router.push(`/Payments?id=${p.id}&category=albums`)
                }} className='pt-6 pb-8'/>
                <p className='mb-2'>Price: <span className='text-white/70'>{p.price} €</span></p>
                <p className='text-sm mb-5'>Includes: <span className='text-white/70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium eligendi consectetur neque adipisci natus deserunt perspiciatis ut atque illum!</span></p>
                <button onClick={() => { 
                    setSelectedProduct(p),
                    router.push(`/Payments?id=${p.id}&category=albums`)}}>
                    <Link href='/Store/Albums' className='bg-white/20 btnSecond text-sm flex gap-2'>Buy Now<Image src="/arrowLink.svg" alt="" width={12} height={12} /></Link>
                </button>
            </div>

        ))}
    </section>
    </>
  )
}

export default page