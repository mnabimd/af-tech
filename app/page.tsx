'use client';

// import { navItems } from "@/data";

import Hero from '@/components/Hero';
import Experience from '@/components/Experience';

import dynamic from 'next/dynamic';
import TechStack from '@/components/TechStack';
import FeelsLikeYou from '@/components/FeelsLikeYou';
import FAQ from '@/components/FAQ';

const BrowserComponent = dynamic(() => import('@/components/Grid'), {
   ssr: false
});

const Home = () => {
   return (
      <main className="relative bg-white dark:bg-black-100 text-black dark:text-white flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
         <div className="max-w-7xl w-full bg-white dark:bg-black-100">
            <Hero />
            <BrowserComponent />
            <Experience />
            <TechStack />
            <FeelsLikeYou />
            <FAQ />
         </div>
      </main>
   );
};

export default Home;
