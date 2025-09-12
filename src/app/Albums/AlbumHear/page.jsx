"use client"
import { useImage } from '@/contexts/albumImg/ImageContext';
import Image from 'next/image';
import React from 'react'

function page() {
    const {selectedImage} = useImage();
    if(!selectedImage) {
        return <p>no hay imagen seleccionada</p>
    }

    const {title,year,src,links} = selectedImage;

    const OpenLink = (url) => {
        window.open(url,'_blank','noopener')
    };

  return (
    <> 
            <div className='w-full'>

    <div className='text-white flex flex-col mt-10'>
      <section className='flex flex-col items-center'>
      <h2 className='mb-2'>{title}</h2>
      <Image src={src} alt="" height={100} width={100} />
      </section>
      <section className='flex flex-col gap-3 pl-12 mt-6'>
        <button onClick={() => OpenLink(links.spotify)} className='flex gap-2 items-center'>
          <Image src='/spotify.svg' alt="" width={20} height={20}/>
          Spotify
        </button>
        <button onClick={() => OpenLink(links.youtube)} className='flex gap-2 items-center'>
          <Image src='/youtube_music.svg' alt="" width={20} height={20} />
          Youtube Music
        </button>
        <button onClick={() => OpenLink(links.apple)} className='flex gap-2 items-center'>
          <Image src='/apple_music.svg' alt="" width={20} height={20}/>
          Apple Music
        </button>
      </section>
    </div>
    </div>
    </>
  )
}

export default page