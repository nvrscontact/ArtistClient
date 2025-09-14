import Image from "next/image"
import Link from "next/link"

function Newsletter() {
  return (
    <>
     <article className='flex flex-col mb-40 w-80 mx-auto text-white/50 inter-200'>
        <h1 className='text-2xl text-center text-white/70'>Newsletter</h1>
        <span className='text-[12px] mb-4 mx-12 text-center'>To receive updates</span>
        <p className='text-[12px] text-white/50 mb-6 flex flex-col gap-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum beatae maxime distinctio <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, vero and all that what you think is very nice of you part to say that to me, i'm so happy about that.</span> </p>
          <section className='flex flex-col items-center gap-2'>
          <Link href='/Store/Album' className='btnSecond text-sm flex gap-2'>Subscribe in <Image src="/arrowLink.svg" alt="" width={12} height={12} /></Link>
          <span className='text-xs text-white/40'><Link href='/Information'>tours, concerts, promos</Link></span>
        </section>
      </article>
    </>
  )
}

export default Newsletter