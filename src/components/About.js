import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return <section id="about" className='section' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* image */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          
        </motion.div>
        {/* texte */}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        className='flex-1'>
          <h2 className='h2 text-sky-400'>A propos de moi.</h2>
          <h3 className='h3 mb-4'>Passionné d'informatique depuis toujours, j'ai le rêve de faire de ma passion mon métier.</h3>
          <p className='mb-6'>Toujours à la recherche de nouveaux défis pour augmenter mes compétences et pouvoir partager mon savoir faire.</p>
          <div className='flex gap-x-4 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? 
                  <CountUp start={0} end={6} duration={5} /> : null}
              </div>
              <div className='font-primary text-sm lg:tracking-[2px]'>
                Années <br />
                D'expérience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? 
                  <CountUp start={0} end={4} duration={4} /> : null}
              </div>
              <div className='font-primary text-sm lg:tracking-[2px]'>
                Années dans le <br />
                Développement Web
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? 
                  <CountUp start={0} end={2} duration={4} /> : null}
              </div>
              <div className='font-primary text-sm lg:tracking-[2px]'>
                Années dans <br />
                la modélisation 3d
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contactez moi</button>
            <a href='#' className='text-gradient btn-link'>
              Mon Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
