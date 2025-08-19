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

        <section className='mb-3'>
        <Image src='/folklore.jpg' alt="" width={200} height={110} />
        <p className='text-[10px] w-full text-center bg-black/10 py-[6px] '>44 minutes • Pop • 13 Songs</p>
        </section>
     
         <p className='text-[12px] mb-4 text-white/50 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum beatae maxime distinctio rerum ullam natus molestias dolorum eaque modi!</p>
          <section className='space-x-2'>
            <button className='bg-white/10 btn'><Link href='/store'>More Info</Link></button>
            <button className='bg-white/30 btn'><Link href='/store'>Find Out</Link></button>
          </section>
    </article>   
    </>
  )
}

export default Album