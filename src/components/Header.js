import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return <div className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        
          <img src={logo} alt='' className='object-scale-down h-20 lg:object-scale-down lg:h-40'/>
        
        <Link to='contact' smooth={true} spy={true}>
          <button className='btn btn-sm lg:btn-lg '>
          Travaillons <br/> Ensemble !
        </button>
        </Link>
      </div>
    </div>
  </div>;
};

export default Header;
