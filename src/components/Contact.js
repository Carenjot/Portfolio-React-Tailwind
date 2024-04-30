import React from 'react';

import {motion} from 'framer-motion'

import { fadeIn } from '../variants';

const Contact = () => {
  return <section className='py-16 lg:section' id="contact">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        className='flex-1 flex justify-start'>
          <div>
            <h4 className='text-x1 uppercase text-sky-400 font-medium mb-2 tracking-wide'>Entrez en contact</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Travaillons <br/>
            Ensemble !
            </h2>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        className='flex-1 border rounded-2xl flex flex-col gap-y-8 p-6 items-start'>
          <div><h2 className='inline'>Numéro : </h2><h3 className='inline'> 06.49.61.34.07</h3></div>
          <div><h2 className='inline'>Mail : </h2><h3 className='inline'>carenjot.aurelien@hotmail.fr</h3></div>
          <div><h2 className='inline'>Mon CV : </h2><a href="..\assets\CV.png" download>Télécharger mon CV</a></div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Contact;
