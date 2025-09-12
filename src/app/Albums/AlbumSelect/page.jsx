"use client"

import React from 'react'
import {useRouter} from 'next/navigation';
import Image from "next/image";
import { useImage } from '@/contexts/albumImg/ImageContext';

function page() {

  const router = useRouter();
  const {setSelectedImage} = useImage();

    const images = [
        { id: '1', 
          title:'Red', 
          year:'June 2011',
          type:'Album',
          src: '/red_album.jpg',
          links: {
            spotify:'https://open.spotify.com/intl-es/album/1EoDsNmgTLtmwe1BDAVxV5',
            youtube:'https://music.youtube.com/watch?v=sEPXrepgujY&list=OLAK5uy_kRl6HdICkQpZF7zuHu_Yx-RDVHw-hboxo',
            apple:'https://music.apple.com/es/album/red-taylors-version/1590368448?i=1590368453',
          } 
        },
        { id: '2', 
          title:'Folklore', 
          year:'May 2013',
          type:'Deluxe Version',
          src: '/folklore.jpg',
          links: {
            spotify:'https://open.spotify.com/intl-es/album/1EoDsNmgTLtmwe1BDAVxV5',
            youtube:'https://music.youtube.com/watch?v=sEPXrepgujY&list=OLAK5uy_kRl6HdICkQpZF7zuHu_Yx-RDVHw-hboxo',
            apple:'https://music.apple.com/es/album/red-taylors-version/1590368448?i=1590368453',
          } 
        },
        { id: '3', 
          title:'Midnights', 
          year:'February 2023',
          type:'New Album',
          src: '/midnightsAlbum.jpg',
          links: {
            spotify:'https://open.spotify.com/intl-es/album/1EoDsNmgTLtmwe1BDAVxV5',
            youtube:'https://music.youtube.com/watch?v=sEPXrepgujY&list=OLAK5uy_kRl6HdICkQpZF7zuHu_Yx-RDVHw-hboxo',
            apple:'https://music.apple.com/es/album/red-taylors-version/1590368448?i=1590368453',
          } 
        },
        { id: '4', 
          title:'Style', 
          year:'February 2023',
          type:'New Album',
          src: '/style_album.jpg',
          links: {
            spotify:'https://open.spotify.com/intl-es/album/1EoDsNmgTLtmwe1BDAVxV5',
            youtube:'https://music.youtube.com/watch?v=sEPXrepgujY&list=OLAK5uy_kRl6HdICkQpZF7zuHu_Yx-RDVHw-hboxo',
            apple:'https://music.apple.com/es/album/red-taylors-version/1590368448?i=1590368453',
          } 
        },
    ]
  

  
  const handleClick = (image) => {
    setSelectedImage(image);
    router.push('/Albums/AlbumHear')
  }

    return (
    <>
      <section className='flex flex-col items-center mx-auto mt-10 mb-8'>
        <h1 className='text-white/70 text-3xl text-center '>Albums</h1>
        <span className='text-white/40 text-[12px] '>Complete Discography</span>
      </section>

      <section className='grid grid-cols-2 gap-y-12 place-items-center'>
        {images.map((img) => (
          <div className='text-white flex flex-col items-center w-32' key={img.id}>
              <section className='flex flex-col mb-2 items-center'>
                  <span className='text-[16px] ' key={img.id}>{img.title} </span>
                  <span className='text-white/50 text-[11px] '>{img.type}</span>
              </section>
              <section>
                <Image 
                  key={img.id}
                  src={img.src}
                  alt={img.title}
                  onClick={() => handleClick(img)}
                  width={120}
                  height={120}/>
                <p className='text-white/70 text-[10px] w-full flex justify-center bg-black/60 py-1'>{img.year}</p>
              </section>
          </div>
          ))}
      </section>
    </>
  )
}

export default page