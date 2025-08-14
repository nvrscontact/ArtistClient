import Link from "next/link"

function Newsletter() {
  return (
    <>
     <article className='flex flex-col  w-72 mx-auto text-white/70 inter-200 text-center mb-40'>
        <h1 className='text-2xl'>Subscribe to our Newsletter</h1>
        <p className='text-[12px] text-white/50 mt-4 mb-6 flex flex-col gap-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum beatae maxime distinctio <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, vero and all that what you think is very nice of you part to say that to me, i'm so happy.</span> </p>
        <section className='flex flex-col items-center gap-2'>
          <span className='text-white/50 text-[12px] text-end'>Tours, Discounts, Launchs</span>
          <section className='border-b-[2px] border-white/40 rounded-xl'>
              <button className='bg-white/10 rounded-[8px]  py-2 px-7 inter-200 text-[12px] text-white/70'><Link href='/newsletter'>Subscribe in</Link></button>
          </section>          
        </section>   
      </article>
    </>
  )
}

export default Newsletter