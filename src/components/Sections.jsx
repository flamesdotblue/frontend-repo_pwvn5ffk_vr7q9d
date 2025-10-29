import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BookOpen, HeartHandshake, Compass } from 'lucide-react';

const SectionCard = ({ id, icon: Icon, title, subtitle, points, accent }) => (
  <motion.section
    id={id}
    className="relative py-16"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className={`absolute inset-0 -z-[1] bg-gradient-to-br ${accent} opacity-40 rounded-3xl max-w-5xl mx-auto blur-3xl`} aria-hidden />
    <div className="mx-auto max-w-5xl rounded-3xl bg-white/80 backdrop-blur-sm border border-zinc-200 p-8 sm:p-10">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-emerald-700">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tight">{title}</h2>
          <p className="mt-1 text-zinc-600">{subtitle}</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-zinc-700">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
);

export default function Sections() {
  return (
    <div className="space-y-6" aria-label="Learn, Live, Lead sections">
      <SectionCard
        id="learn"
        icon={BookOpen}
        title="Learn"
        subtitle="Grow a mindset grounded in clarity, compassion, and character."
        points={[
          'Weekly micro-lessons to build value-driven habits',
          'Curated tools that simplify your choices',
          'Real stories from people walking the talk',
          'Community prompts to reflect and apply',
        ]}
        accent="from-emerald-50 via-sky-50 to-amber-50"
      />
      <SectionCard
        id="live"
        icon={HeartHandshake}
        title="Live"
        subtitle="Design your days around what matters most—relationships, health, and service."
        points={[
          'Monthly challenges that spark meaningful action',
          'Accountability circles to stay consistent',
          'Quiet rituals that create space and presence',
          'Celebrations that honor progress over perfection',
        ]}
        accent="from-sky-50 via-emerald-50 to-amber-50"
      />
      <SectionCard
        id="lead"
        icon={Compass}
        title="Lead"
        subtitle="Amplify values in your home, work, and community."
        points={[
          'Ambassador playbooks with simple frameworks',
          'Workshops for teams and families',
          'Mentorship from seasoned guides',
          'Service projects you can start today',
        ]}
        accent="from-amber-50 via-emerald-50 to-sky-50"
      />
    </div>
  );
}
