'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function WidgetSpotify() {
  return (
    <>
    <section className='flex flex-col items-center w-full text-white/70'>
      <h1 className='mb-3 text-white/50'>Available on Spotify</h1>
        <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/album/2fenSS68JI1h4Fo296JfGr?utm_source=generator&theme=0"  height="380" className='lg:h-96 w-[20rem] lg:w-[40rem]' frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <div className='flex items-center gap-3 mt-5 text-sm'>
            <a href='https://music.youtube.com/channel/UCqECaJ8Gagnn7YCbPEzWH6g' className='flex gap-2 items-center border border-white/20 rounded-2xl p-[10px] active:text-white '>
            <Image src='/youtube_music.svg' alt="" width={22} height={20} />
            Youtube Music
          </a>
          <a href='https://music.apple.com/es/artist/taylor-swift/159260351' className='flex gap-2 items-center border border-white/20 rounded-xl p-[10px] active:text-white '>
            <Image src='/apple_music.svg' alt="" width={22} height={20}/>
            Apple Music
          </a>
          </div>
    </section>
    </>
  )
}

export default WidgetSpotify