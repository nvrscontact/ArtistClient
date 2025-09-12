"use client";

import React, { useContext } from 'react'
import Image from "next/image";
import Link from "next/link"

import { LanguageContext } from '../contexts/languages/context/LanguageContext';

function Album() {
    const {textos} = useContext(LanguageContext);

  return (
    <>
      <article className='mt-30 mb-40 flex flex-col items-center text-white/70 w-80 mx-auto'>
        <section className='text-center mb-2 -space-y-2 inter-100'>
            <h1 className='flex'><span className='text-[26px]'>Folklore</span></h1>
            <span className='inter-300 text-[12px] text-white/40'>New Album</span>
        </section>

        <section className=''>
        <Image src='/folklore.jpg' alt="" width={200} height={110} />
          <p className='mt-1 text-white/70 text-[11px] w-full flex justify-center bg-black/40 py-[6px] border-b border-white/20'>44 minutes • Pop • 13 Songs</p>
        </section>
     
         <p className='text-[12px] text-white/50 text-center my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum beatae maxime distinctio rerum ullam natus molestias dolorum eaque modi!</p>
      
        <section className='flex space-x-2'>
          <Link href='/Information' className='bg-white/10 btn'>More Info</Link>
          <Link href='/Store/Album' className='bg-white/20 btn'>Find Out</Link>
        </section>
    </article>   
    </>
  ) 

}

export default Album