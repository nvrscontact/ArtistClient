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
        <section className='flex flex-col items-center gap-2'>
          <Link href='/Store/Merch' className='btnSecond text-sm flex gap-2'>Shop Now <Image src="/arrowLink.svg" alt="" width={12} height={12} /></Link>
          <span className='text-xs text-white/40'><Link href='/Information'>see more info</Link></span>
        </section>
      </article>    
    </>
  )
}

export default Merchandising