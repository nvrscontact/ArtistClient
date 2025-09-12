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
                <Image src={cat.img} alt="" width='200' height='200' />
                <h2 className='text-3xl mt-6'>{cat.name}</h2>
                <p className='mb-6 text-white/50'>{cat.paragraph}</p>
                <button className='btn bg-black/40 border border-white/30' onClick={() => router.push(`/Store/${cat.name}`)}>
                    Buy Now
                </button>
            </div>
        ))}
        </div>
    </>
  )
}

export default page