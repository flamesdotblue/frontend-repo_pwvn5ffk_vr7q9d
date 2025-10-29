import React from 'react';
import { ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'Learn', href: '#learn' },
  { label: 'Live', href: '#live' },
  { label: 'Lead', href: '#lead' },
  { label: 'Stories', href: '#stories' },
  { label: 'Join', href: '#join' },
];

export default function Header() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-emerald-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, '#top')}>
          <div className="h-8 w-8 rounded-xl bg-emerald-500/90 ring-4 ring-emerald-100/70" aria-hidden />
          <span className="font-semibold tracking-tight text-zinc-900">Values Over Valuables</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#join"
            onClick={(e) => handleNavClick(e, '#join')}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            aria-label="Join the movement"
          >
            Join us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
