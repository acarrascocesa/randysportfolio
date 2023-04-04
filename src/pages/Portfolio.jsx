import React, { useContext } from 'react';
// import images
import Image1 from '../img/portfolio/pic1.jpg';
import Image2 from '../img/portfolio/pic2.jpg';
import Image3 from '../img/portfolio/pic3.jpg';
import Image4 from '../img/portfolio/pic4.jpg';
import Image5 from '../img/portfolio/pic5.jpg';
import Image6 from '../img/portfolio/pic6.jpg';
import Image7 from '../img/portfolio/pic7.jpg';
import Image8 from '../img/portfolio/pic8.jpg';
import Image9 from '../img/portfolio/pic9.jpg';
import Image10 from '../img/portfolio/pic10.jpg';
import Image11 from '../img/portfolio/pic11.jpg';


// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative flex'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-20'>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1 '>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
            Some of my best photos.
            </p>
            <Link to={'/contact'} className='btn h-4  mb-[10px] mx-auto lg:mx-0'>
              Contact me
            </Link>
          </motion.div>
          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:mt-10 lg:ml-20 lg:flex lg:flex-row lg:gap-8 lg:flex-wrap lg:items-center grid grid-cols-4 gap-2'
          >
            {/* image */}
            
            <div className='max-w-[250px] lg:rounded-xl lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image2}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:rounded-xl lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image3}
                alt=''
              />
            </div>
          
            <div className='max-w-[250px] lg:rounded-xl lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:rounded-xl lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image5}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:rounded-xl lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image6}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:rounded-xl lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image7}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:rounded-xl lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image8}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:rounded-xl lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image9}
                alt=''
              />
            </div>
          
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;