import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import StoriesJoin from './components/StoriesJoin.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main className="scroll-smooth">
        <Hero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Sections />
        </div>
        <div className="mt-4">
          <StoriesJoin />
        </div>
      </main>

      <footer className="mt-20 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Values Over Valuables. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#join" className="text-zinc-700 hover:text-zinc-900">Contact</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-zinc-700 hover:text-zinc-900">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-zinc-700 hover:text-zinc-900">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
