import React from 'react';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import ForStudents from '../components/sections/ForStudents';
import ForClients from '../components/sections/ForClients';
import FeatureGrid from '../components/sections/FeatureGrid';
import LarkinsCallout from '../components/sections/LarkinsCallout';
import CtaBanner from '../components/layout/CtaBanner';
import { Marquee } from '../components/ui/Atoms';

const MARQUEE_ITEMS = [
  'PROOF OF WORK', 'СТРУКТУРА', 'ПРОЕКТЫ', 'КОМАНДЫ', 'КЛИЕНТЫ',
  'ЭКЗЕКУЦИЯ', 'РЕЗУЛЬТАТ', 'ЛАРКИНС'
];

export default function HomePage() {
  return (
    <div className="page">
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <HowItWorks />
      <ForStudents />
      <ForClients />
      <FeatureGrid />
      <LarkinsCallout />
      <CtaBanner />
    </div>
  );
}
