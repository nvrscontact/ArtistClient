'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'

function page() {

    const router = useRouter();
    const categories = [
        {name:'Albums', img: '/folklore.jpg', paragraph:'Complete Discography'},
        {name:'Merch', img: '/ShirtMerchandising.png', paragraph: 'New Summer Offers'},
        {name:'Product', img: '/folklore.jpg', paragraph: 'Spiuniro Cocodrilo'},
    ];

  return (
    <>
        <div className='flex flex-col mx-10 items-center mt-20 text-center gap-20 text-white'>
        {categories.map((cat,index) => (
            <div key={index}>
                <h2 className='text-3xl'>{cat.name}</h2>
                <p className='mb-6 text-white/50'>{cat.paragraph}</p>
                <Image src={cat.img} alt="" width='200' height='200' className='mb-6' />
                <button className='rounded-xl bg-[#ffffff0c] border border-white/20 py-3 px-8 text-md ' onClick={() => router.push(`/Store/${cat.name}`)}>
                    Buy Now
                </button>
            </div>
        ))}
        </div>
    </>
  )
}

export default page