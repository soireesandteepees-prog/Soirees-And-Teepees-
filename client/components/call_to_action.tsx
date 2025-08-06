'use client'
import Link from 'next/link'

export const CallToAction = () => {
    return(
        <div className="relative pt-12 bg-minty bg-cover bg-[url('/festive-background.svg')] bg-repeat">
            <section className="relative rounded-tl-[150px] py-24 text-white text-center px-6 bg-[linear-gradient(to_right,#FF6FA3,#FFDD57),url('/festive-background.svg')] bg-cover bg-blend-overlay bg-repeat">
                <h3 className="text-4xl font-heading">Ready to Plan Something Magical?</h3>
                <p className="mt-4 max-w-xl mx-auto text-lg font-body">Let’s help you create a celebration full of joy, colors, and unforgettable memories!</p>
                <div className='mt-8'>
                    <Link href='/booking' className=" bg-white text-bloomPink font-semibold px-8 py-3 rounded-full hover:scale-105 transition">
                        Get Started 🎉
                    </Link>
                </div>

            </section>
        </div>
    )
}