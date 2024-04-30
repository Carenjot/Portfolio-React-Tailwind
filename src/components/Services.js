import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants';

import { Link } from 'react-scroll';


const services = [
  {
    name: 'ReactJS',
    description: 'Principal Framework enseigné lors du BootCamp de la Wild Code School et aussi coup de coeur lors de mon apprentissage dessus.',
    link:'https://fr.legacy.reactjs.org/'
  },
  {
    name: 'NodeJS',
    description: "L'importance de la gestion des packages dans un projet, les docs toutes bien expliquées pour chaque nouvel ajout, utilisation simple et essentielle.",
    link:'https://nodejs.org'
  },
  {
    name: 'ExpressJS',
    description: "Habitués au PHP durant mes premières années, cette infrastucture m'a particulièrement plu pour la partie Back de mes projets, peut être moins efficace qu'un framework Symphony il est facile à prendre en main.",
    link:'https://expressjs.com'
  },
  {
    name: 'Blender',
    description: "Logiciel pour projet personnel principalement, je me concentre sur la modélisation 3D pour la beauté de cette passion ou alors l'intégration dans des jeux vidéos sous Unity.",
    link:'https://www.blender.org/'
  }
]

const Services = () => {
  return <section className='section' id="services">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-sky-400 mb-6'>Mes compétences.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Durant mes années d'apprentissages j'ai acquéris de nombreuses compétences.</h3>
          <Link to='work' smooth={true} spy={true}><button className='btn btn-sm'>Mon travail</button></Link>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        className='flex-1'>
          <div>
            {services.map((service, index) => {
              const{name, description, link} = service;
              return (
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[600px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                
              </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
