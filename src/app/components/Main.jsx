"use client";

import React, {useContext} from 'react';
import {LanguageContext} from '../contexts/languages/context/LanguageContext';

import Image from "next/image";
import Link from "next/link"

function Main() {
    const {textos} = useContext(LanguageContext);

    const mensajes = [
    <>
    <span><span className='text-white'>Midnights</span> Album Available! </span>
    <span>Compralo antes de que se acaben.</span>
    <span>Buy your tickets for <span className='text-white'>#Tour2025</span> before June</span>
    <span>10% discount in album store</span>
    </>
  ]

  return (
    <>
      <header className='flex flex-col w-full relative xl:mx-96'>
          <section className='absolute z-10 top-10 flex flex-col text-center left-1/2 -translate-x-1/2'>
            <h1 className=' text-[22px] text-white/60'>Taylor Alisson Swift</h1>
            <p className='text-[14px] space-x-3 lg:text-sm text-white/40 mb-3'>
              Country • ElectroPop • Pop
            </p>
           <span className='text-sm mb-3 text-white/50'>Album of the year nomination</span>
          </section>
      
        
        
         <p className='absolute z-10 flex flex-col items-end bottom-10 right-8 text-end lg:bottom-8 text-white/50'>
          <span className={`text-start text-[18px] lg:text-[18px] `}>#1 USA on Spotify</span>
          <span className='secondTop'>#1 Canada Spotify</span>
          <span className='secondTop'>#2 Apple Music</span>
          <button className='mt-4 flex items-center gap-2 text-xs bg-white/10 rounded-md py-3 pl-4 pr-3 w-fit text-white'>
            <Link href="/albums">{textos.stream}</Link>
            <Image src='/arrowLink.svg' alt="" height={11} width={11}  />
          </button>
        </p> 
        <section className='h-[36rem]'>
        <Image src='/presentationArtist.jpg' alt="h" className="brightness-70 object-cover" fill quality={80} />
        </section>
      </header>

      <aside className="lg:mx-30 xl:mx-96 mb-30 ">
        <section className='relative overflow-hidden w-full'>
          <div className=" w-max carousel-track bg-black/60 space-x-14">
          {Array(4).fill(mensajes[0]).map((mensaje,index) => (
           <p key={index} className="shrink-0 space-x-14 py-[10px] px-4 text-[12px] text-white/70 inter-200 flex lg:text-sm ">
            {mensaje}
          </p>
          ))}
          </div>
        </section>
       </aside> 
    </>
  )
}

export default Main