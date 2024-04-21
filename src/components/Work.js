import React from 'react';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

import Img1 from "../assets/portfolio-img1.png"
import Img2 from "../assets/portfolio-img2.png"
import Img3 from "../assets/portfolio-img3.png"

const Work = () => {
  return <section className='section' id="work">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-sky-400'>Mes derniers <br/>
            Projets</h2>
            <p className='max-w-sm mb-10'>Avec le bootcamp de la Wild Code School différents projets m'ont permis d'acquérir de nombreux savoirs et ainsi que des projets persos pour m'améliorer dans d'autres compétences.</p>
            <a href="https://github.com/Carenjot"><button className='btn btn-sm'>Voir tout mes projets</button></a>
          </div>
          
          
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-1'>
            <a href='https://github.com/WildCodeSchool/2023-02-JS-Reims-project-street-art-hunter'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-300' src={Img2} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Projet avancé React</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Street Art Hunter</span>
              </div>
            </a>
          </div>


        </motion.div>


        <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        className='flex-1 flex flex-col gap-y-10'>
          
          
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-1'>
            <a href='https://github.com/Carenjot/Wild-beer'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-300' src={Img1} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Projet iniation API</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Wild Beer</span>
              </div>
            </a>
          </div>


          <div className='group relative overflow-hidden border-2 border-white/50 rounded-1'>
          
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-300' src={Img3} alt='' />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Rendu modélisation 3D</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Espace de travail</span>
            </div>
            
          </div>


        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
