import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useLenis from './useLenis';

const SectionTransition = () => {
  useLenis();
  const { scrollYProgress } = useScroll();

 
  const scale = useTransform(scrollYProgress, [0, 0.5,0.75, 1], [1,0.75, 0.5, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <main className="relative h-[200vh] bg-black">
      <motion.section
        style={{ scale ,rotate}}
        className="sticky top-0 h-screen bg-green-500 flex items-center justify-center text-white"
      >
        <h1 className="text-4xl">Section 1</h1>
      </motion.section>
      <section className="h-screen bg-yellow-300 flex items-center justify-center">
        <h1 className="text-4xl">Section 2</h1>
      </section>
    </main>
  );
};

export default SectionTransition;

