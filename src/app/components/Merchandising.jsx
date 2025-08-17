import React from 'react'
import Image from "next/image";
import Link from "next/link"

function Merchandising() {
  return (
    <>
     <article className='flex flex-col items-center mx-auto mb-40 w-80 text-white/50 text-center'>
          <h1 className='text-2xl text-white/70'>New Merchandising</h1>
          <span className='text-[12px] mb-4 mx-12 '>T-shirt Sport - Running</span>
          <Image src='/ShirtMerchandising.png' alt="" height={200} width={200} />
          <span className='text-[12px] -mt-3 mb-4'>Editor's Collection</span>
          <p className='text-[12px] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum beatae maxime distinctio rerum ullam natus molestias dolorum eaque modi!</p>
          <section className='space-x-2'>
            <button className='bg-white/10 btn'><Link href='/store'>More Info</Link></button>
            <button className='bg-white/30 btn'><Link href='/store'>Find Out</Link></button>
          </section>
      </article>    
    </>
  )
}

export default Merchandising