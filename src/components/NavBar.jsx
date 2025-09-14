'use client';
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Link from "next/link"
import LanguageSelector from '../contexts/languages/components/LanguageSelector';

function NavBar() {
  
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
  
    // cerrar al hacer click afuera:
    const useClickOutside = (ref,callback) => {
      
      useEffect(() => {
        function handleClickOutside(event){
          if(ref.current && !ref.current.contains(event.target)) {
            callback();
          }
        }
        document.addEventListener('mousedown',handleClickOutside);
        return () => {
          document.removeEventListener('mousedown',handleClickOutside);
        };
      }, [ref,callback])
    }
  
    useClickOutside(menuRef,() => setIsOpen(false));
  
    // al hacer click en enlace o boton en menu
    const handleMenuClick = (e) => {
      if(e.target.closest('a') || e.target.closest('button')) {
        setIsOpen(false);
      }
    }  
  
  return (
    <>
      <header ref={menuRef} className='bg-black/50 flex justify-between px-4 h-14 items-center relative'>
      
        <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'><Image src='/hamburger_menu.svg' alt="Menu" height={28} width={28}/></button>
        {isOpen && (

         <nav onClick={handleMenuClick} className='absolute z-20 top-14 left-0 w-full bg-black/60 backdrop-blur-xl text-white/60 '>
            <section className='p-5 flex flex-col justify-between space-y-5'>
            
              <ul className='flex flex-col gap-5 text-sm lg:text-sm [&>*>*]:flex [&>*>*]:hover:text-white [&>*>*]:active:text-white '>
                <li className='navLink'><Link href='/Store'>Store</Link> </li>
                <li className='navLink'><Link href='/Albums/AlbumSelect'>Albums</Link> </li>
                <li className='navLink'><Link href='/Information'>Information</Link> </li>
                <li className='navLink'><Link href='/Support'>Support</Link> </li>
                <li className='navLink'><Link href='/'>Home</Link> </li>
              </ul>

              <section className='flex flex-col gap-3 text-sm '>
                <div className='flex gap-1 [&>*]:hover:text-white '>
                  <button className='bg-white/10 py-2 px-8 flex-1 cursor-pointer'>Register</button>
                  <button className='bg-white/10 py-2 px-8 flex-1 cursor-pointer'>Login</button>
                </div>
                <span className='text-[11px] text-white/50 '>Register for more information</span>
              </section>

            </section>

            
          </nav> 

          )}
          <LanguageSelector />


     </header>
    </>
  )
}

export default NavBar

