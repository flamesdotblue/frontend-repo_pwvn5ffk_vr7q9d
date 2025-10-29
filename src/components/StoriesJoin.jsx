import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowRight, MessageCircle } from 'lucide-react';

const storiesData = [
  {
    id: 's1',
    name: 'Amira – Teacher',
    summary: 'Swapped shopping sprees for Saturday breakfasts with her students.',
    full:
      'I used to reward stress with purchases. Now I reward it with presence. Every Saturday, I host a simple breakfast for my students who need a safe space. It costs less—but gives more than anything I ever bought.',
    image:
      'https://images.unsplash.com/photo-1520975922324-8b456906c813?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 's2',
    name: 'Jon – Designer',
    summary: 'Rebuilt his schedule to protect creativity and health.',
    full:
      'I reworked my calendar around deep work, rest, and family dinners. Clients respect the boundaries—and the work is better. Turns out the richest thing I own is my attention.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 's3',
    name: 'Priya – Community Organizer',
    summary: 'Turned a spare room into a weekly shared library.',
    full:
      'We pooled books from neighbors and created a tiny, trust-based library. Kids volunteer to run it. It’s messy, honest, and the best part of our block now.',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 's4',
    name: 'Mateo – Engineer',
    summary: 'Chose mentorship over overtime pay.',
    full:
      'I started a weekly lunch for junior teammates. We talk ethics, trade-offs, and courage. The returns aren’t monetary—they’re human.',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop',
  },
];

function StoryCard({ story, onOpen }) {
  return (
    <motion.button
      onClick={() => onOpen(story)}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left focus:outline-none focus:ring-2 focus:ring-emerald-500"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      aria-label={`Open story: ${story.name}`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={story.image}
          alt={story.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-emerald-700">
          <Quote className="h-4 w-4" />
          <span className="text-xs font-semibold tracking-wide uppercase">Ambassador Story</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-zinc-900">{story.name}</h3>
        <p className="mt-1 text-sm text-zinc-600">{story.summary}</p>
        <div className="mt-3 inline-flex items-center text-emerald-700 font-medium">
          Read more <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </motion.button>
  );
}

function StoryModal({ story, onClose }) {
  return (
    <AnimatePresence>
      {story && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Story: ${story.name}`}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={story.image} alt="" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-zinc-900">{story.name}</h3>
              <p className="mt-3 text-zinc-700 leading-relaxed">{story.full}</p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={onClose}
                  className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function JoinForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const canSubmit = useMemo(() => name && email && consent, [name, email, consent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    alert('Thanks for joining! We will be in touch soon.');
  };

  return (
    <motion.div
      id="join"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white/80 p-6 sm:p-8 backdrop-blur-sm"
    >
      <h3 className="text-2xl font-semibold text-zinc-900">Join the movement</h3>
      <p className="mt-1 text-zinc-600">A short note to connect you with local circles, resources, and monthly challenges.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-800">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="Your full name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-800">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
          />
          <label htmlFor="consent" className="text-sm text-zinc-700">
            I agree to receive updates about values-first learning, events, and opportunities. Your information will never be sold.
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            disabled={!canSubmit}
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50"
          >
            Request invite
          </button>
          <a
            href={`https://wa.me/?text=${encodeURIComponent('Hello! I want to join the Values Over Valuables community.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <MessageCircle className="h-5 w-5 text-emerald-700" /> Connect via WhatsApp
          </a>
        </div>
      </form>
    </motion.div>
  );
}

export default function StoriesJoin() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative" id="stories">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">Ambassador Stories</h2>
          <p className="mt-2 text-zinc-600">
            Real people. Real trade-offs. Courageous choices that favor meaning over material.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {storiesData.map((s) => (
            <StoryCard key={s.id} story={s} onOpen={setActive} />
          ))}
        </div>

        <div className="mt-14">
          <JoinForm />
        </div>
      </motion.div>

      <StoryModal story={active} onClose={() => setActive(null)} />
    </div>
  );
}
