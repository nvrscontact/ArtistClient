"use client"
import { useImage } from '@/contexts/albumImg/ImageContext';
import Image from 'next/image';
import React from 'react'

function page() {
  const {selectedImage} = useImage();
  if(!selectedImage) return <p></p>
  
  const {title,year,src,links,paragraph} = selectedImage;



    const OpenLink = (url) => {
        window.open(url,'_blank','noopener')
    };

  return (
    <> 
            <div className='w-full text-white flex flex-col py-10'>
                <section className='flex flex-col items-center'>
                <h2 className='mb-1 text-2xl'>{title}</h2>
                <span className='text-white/70 text-xs'>{year}</span>
                <Image src={src} alt="" height={160} width={160} className='mt-4' />
                </section>
                <p className='text-white/70 text-xs text-center text-pretty my-8 mx-10'>{paragraph}</p>
                <section className='flex flex-col items-center gap-3 text-ms'>
                  <button onClick={() => OpenLink(links.youtube)} className='albumHearButton'>
                    <Image src='/youtube_music.svg' alt="" width={16} height={20} />
                    Youtube Music
                    <Image src='/arrowLink.svg' alt="" width={12} height={10}/>
                  </button>
                  <button onClick={() => OpenLink(links.apple)} className='albumHearButton bg-[#ffffff0c]'>
                    <Image src='/apple_music.svg' alt="" width={16} height={20}/>
                    Apple Music
                    <Image src='/arrowLink.svg' alt="" width={12} height={10}/>
                  </button>
                 <button onClick={() => OpenLink(links.spotify)} className='albumHearButton'>
                    <Image src='/spotify.svg' alt="" width={16} height={20}/>
                    Spotify
                    <Image src='/arrowLink.svg' alt="" width={12} height={10}/>
                  </button>
                </section>
            </div>
    </>
  )
}

export default page

/* 



*/