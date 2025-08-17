import React from 'react'
import Image from "next/image";
import Link from "next/link"
import LanguageSelector from '../contexts/languages/components/LanguageSelector';

function NavBar() {
  return (
    <>
      <header className='bg-black/50 lg:mx-30 xl:mx-96 flex justify-between px-4 h-14 items-center'>
        <details className=''>
        <summary className='list-none cursor-pointer'><Image src='/hamburger_menu.svg' alt="Menu" height={28} width={28}/></summary>
         <nav className='absolute z-20 top-14 left-0 w-full bg-black/60 backdrop-blur-xl text-white/60 inter-200 '>
            <section className='p-5 flex flex-col justify-between space-y-5'>
              
              <ul className='flex flex-col gap-5 text-sm lg:text-sm [&>*>*]:flex  '>
                <li className='navLink'><Link href='/store'>Store</Link> </li>
                <li className='navLink' ><Link href='/albums'>Albums</Link> </li>
                <li className='navLink' ><Link href='/information'>Information</Link> </li>
                <li className='navLink' ><Link href='/support'>Support</Link> </li>
                <li className='navLink'><Link href='/'>Home</Link> </li>
              </ul>

              <section className='flex flex-col gap-3 text-sm '>
                <div className='flex gap-1'>
                  <button className='bg-white/10 py-2 px-8 flex-1'>Register</button>
                  <button className='bg-white/10 py-2 px-8 flex-1'>Login</button>
                </div>
                <span className='text-[11px] text-white/50 '>Register for more information</span>
              </section>
          </section>
        </nav> 
        </details>
         <LanguageSelector/>
     </header>
    </>
  )
}

export default NavBar