'use client'
import React from 'react'

function WidgetSpotify() {
  return (
    <>
    <section className='flex w-full justify-center'>
        <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/album/2fenSS68JI1h4Fo296JfGr?utm_source=generator&theme=0"  height="360" className='lg:h-96 w-[22rem] lg:w-[40rem]' frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </section>
    </>
  )
}

export default WidgetSpotify