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
        <motion.form
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-sky-400 transition-all' type='text' placeholder='Votre Nom'/>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-sky-400 transition-all' type='text' placeholder='Votre Email'/>
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-sky-400 transition-all resize-none mb-12' placeholder='Votre message'></textarea>
          <button className='btn btn-lg'>Envoyez un message</button>
        </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
