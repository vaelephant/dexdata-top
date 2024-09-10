import React from 'react';

export function Whitepaper() {
  return (
    <section
      id="whitepaper"
      className="bg-slate-50 py-20 sm:py-32 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Whitepaper
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-500">
        Our whitepaper outlines the full vision and technical details of DexData, 
        exploring how data, large models, and blockchain create value for our ecosystem.
      </p>
      <a
       href="/Whitepaper/DMVchain Write Paper—(en).pdf"  // Replace with your actual file path
        target='_blank'
        rel='noopener noreferrer'
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
      >
        Download Whitepaper
      </a>
    </section>
  );
}