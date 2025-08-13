'use client'
import Link from 'next/link'

export const CallToAction = () => {
    return(
        <section className="relative rounded-tl-[150px] py-24 text-white text-center px-6 bg-[#FBEDE6]">
            <h3 className="text-4xl text-[#EE8F63] font-heading">Ready to Plan Something Magical?</h3>
            <p className="mt-4 max-w-xl mx-auto text-lg text-black font-body">Let’s help you create a celebration full of joy, colors, and unforgettable memories!</p>
            <div className='mt-8'>
                <Link href='/booking' className=" bg-[#D5666D] text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition">
                    Get Started 🎉
                </Link>
            </div>
        </section>
    )
}