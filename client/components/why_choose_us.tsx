// components/WhyChooseUs.tsx
'use client';

import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { opacity: 0, y: 80 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 },
  },
};

export const WhyChooseUs = () => {
  return (
    <section className="pt-2 pb-10  rounded-tl-xl bg-[#f8dbcd] relative overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute -top-20 -left-10 w-40 h-40 bg-bloomPink rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FBEDE6] rounded-full blur-2xl opacity-20 animate-bounce"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-[#D5666D] mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-700 font-body max-w-2xl mx-auto">
            We craft magical moments that your little ones will never forget 💫
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: 'ri-tent-line',
              title: 'Luxury Teepees',
              bg: 'border-[#EE8F63] bg-[#EE8F63] text-white',
              desc: 'Cozy, beautiful teepees with premium bedding & twinkly lights — the ultimate sleepover vibe.',
            },
            {
              icon: 'ri-magic-line',
              title: 'Themed Experiences',
              bg: 'border-[#EEC7D9] bg-[#EEC7D9] text-white',
              desc: "From princess castles to boho dreams, every theme is tailored to your child's imagination.",
            },
            {
              icon: 'ri-heart-line',
              title: 'Full Service',
              bg: 'border-[#D5666D] bg-[#D5666D] text-white',
              desc: 'We take care of setup, styling, and cleanup — you just enjoy the fun stress-free! 🎈',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#FCE5FC] rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition-all duration-300 border-4"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={`w-16 h-16 ${card.bg.split(' ')[1]} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}>
                <i className={`${card.icon} text-3xl ${card.bg.split(' ')[2]}`}></i>
              </div>
              <h3 className={`text-2xl font-heading mb-3 text-gray-600`}>{card.title}</h3>
              <p className="text-gray-600 font-body">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
