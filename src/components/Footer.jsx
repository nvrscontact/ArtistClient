"use client";

import React, {useContext} from 'react';
import {LanguageContext} from '../contexts/languages/context/LanguageContext';
import Link from "next/link"
import Image from "next/image";

function Footer() {
          const {textos} = useContext(LanguageContext);

  return (
    <>
    <footer className='bg-black/50 p-6 text-white/40 mt-30'>

      <li className='flex gap-4 lg:[&>*>*]:h-5 '>
          <a href="https://facebook.com"><Image src="/spotify.svg" alt="" width={18} height={10}/></a>
          <a href="https://facebook.com"><Image src="/youtube.svg" alt="" width={18} height={10} /></a>
          <a href="https://facebook.com"><Image src="/tik-tok.svg" alt="" width={18} height={10}/></a> 
          <a href="https://facebook.com"><Image src="/instagram.svg" alt="" width={18} height={10}/></a>
          <a href="https://facebook.com"><Image src="/x.svg" alt="" width={18} height={10}/></a>
      </li>
    
      <section className='flex my-6 gap-9 border-y py-6 border-white/10 inter-200'>

        <div className='flex flex-col gap-9 [&>*]:gap-2 lg:[&>*>*]:text-sm '>

          <section className='flex flex-col space-y-1 text-[12px] '>
            <h2 className=' text-white/70 text-[15px] mb-1'>Artist</h2>
            <Link href='/Information#Contact'>{textos.contact}</Link>
            <Link href='/Store'>{textos.store}</Link>
            <Link href='/Information#refunds'>{textos.refunds}</Link>
            <Link href='/Tour'>{textos.tour}</Link>
            <Link href='/Albums'>{textos.albums}</Link>
          </section>

          <section className='flex flex-col space-y-1 text-[12px] '>
            <h2 className=' text-white/70 text-[15px] mb-1'>Information</h2>
            <Link href='/Support#support'>{textos.support}</Link>
            <Link href='/Information#accesibility'>{textos.accesibility}</Link>
          </section>

        </div>

        <div className='flex flex-col gap-2 text-[12px] lg:[&>*]:text-sm'>
          <h2 className='text-white/70 text-[15px] mb-1'>Legal and Privacy</h2>
          <Link href='/Privacy#terms' >{textos.terms}</Link>
          <Link href='/Privacy#cookies'>{textos.cookie}</Link>
          <Link href='/Privacy#privacy'>{textos.privacy}</Link>
          <Link href='/Privacy#legal'>{textos.legal}</Link>
        </div>

      </section>

      <section className='flex flex-col inter-200 lg:[&>*]:text-[10px] '>
      <p className='text-[8px] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi qui unde ea placeat, voluptatum amet recusandae voluptate tempore doloribus ipsam optio, minima iste repellat ratione. Culpa, provident tempora? Excepturi!</p>
      <span className='text-[8px]'>{textos.accesibility_problems}</span>
      <span className='text-[8px] mt-4'>© 2025 Taylor Swift, LLC. <br />{textos.rights_reserved}</span>  
      </section>

    </footer>  
    </>
  )
}

export default Footer