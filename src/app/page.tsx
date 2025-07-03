'use client';

import Hero from '@/components/hero/Hero';
import NavBarHeader from '@/components/navBars/NavBarHeader';
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
