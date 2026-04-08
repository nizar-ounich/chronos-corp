'use client';

import { useState } from 'react';

export default function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filters = [
    'Tous',
    'Mode',
    'Beauté',
    'Voyage',
    'Hôtellerie',
    'Luxe',
    'Restauration',
  ];

  return (
    <section className="bg-black text-white py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
