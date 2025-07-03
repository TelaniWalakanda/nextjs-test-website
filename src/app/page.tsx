'use client';

import Hero from '@/components/hero/Hero';
import NavBarHeader from '@/components/navBars/NavBarHeader';
import { Restaurants } from '@/components/restuarants';

export default function Home() {
  return (
    <>
      <NavBarHeader />
      <Hero />
      <Restaurants />
    </>
  );
}
