import React from 'react';
import CityIntroduction from '../components/CityIntroduction';
import BlogLinks from '../components/BlogLinks';

export default function Home() {
  return (
    <div className="w-full mx-auto px-4 py-8 font-sans">
      <CityIntroduction />
      <div className="my-12"></div>
      <BlogLinks />
    </div>
  );
}