// components/Navbar.tsx
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0d1c3a]/90 backdrop-blur-md border-b border-[#153677]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold text-white tracking-tighter">
          Task<span className="text-[#ff8856]">Flow</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Dashboard</a>
          <a href="#" className="hover:text-white transition-colors">My Tasks</a>
          <a href="#" className="hover:text-white transition-colors">Teams</a>
        </div>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#153677] p-6 text-white space-y-4 border-t border-[#0d1c3a]">
          <a href="#" className="block py-2">Dashboard</a>
          <a href="#" className="block py-2">My Tasks</a>
          <a href="#" className="block py-2">Teams</a>
        </div>
      )}
    </nav>
  );
}