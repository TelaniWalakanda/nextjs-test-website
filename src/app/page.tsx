'use client';

import { Hero } from '@/components/hero';
import { NavBarHeader } from '@/components/navBars';
import { Restaurants } from '@/components/restuarants';
import { PaymentMethods } from '@/components/paymentMethods';
import { Benefits } from '@/components/benefits';

export default function Home() {
  return (
    <>
      <NavBarHeader />
      <Hero />
      <Restaurants />
      <PaymentMethods />
      <Benefits />
    </>
  );
}
