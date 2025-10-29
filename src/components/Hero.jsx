import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[80vh] md:min-h-[88vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 w-full">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-900/90 text-xs font-medium mb-4">
            Purpose over possession
          </div>
          <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl text-zinc-900 leading-tight">
            Choose a life rich in meaning, not things
          </h1>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg max-w-2xl">
            We’re a community that measures wealth by impact, connection, and integrity. Together we learn, live, and lead with values at the center.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#learn"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Explore our path
            </a>
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-zinc-900 font-semibold hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Join the movement
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
