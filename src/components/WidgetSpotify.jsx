'use client'
import Image from 'next/image'
import React from 'react'

function WidgetSpotify() {
  return (
    <>
    <section className='flex flex-col items-center w-full text-white/70'>
      <h1 className='mb-3 text-white/50'>Available on Spotify</h1>
        <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/album/2fenSS68JI1h4Fo296JfGr?utm_source=generator&theme=0"  height="360" className='lg:h-96 w-[22rem] lg:w-[40rem]' frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <div className='flex items-center gap-3 mt-5 text-sm'>
            <button className='flex gap-2 items-center border border-white/20 rounded-2xl p-[10px] '>
            <Image src='/youtube_music.svg' alt="" width={22} height={20} />
            Youtube Music
          </button>
          <button className='flex gap-2 items-center border border-white/20 rounded-xl p-[10px] '>
            <Image src='/apple_music.svg' alt="" width={22} height={20}/>
            Apple Music
          </button>
          </div>
    </section>
    </>
  )
}

export default WidgetSpotify