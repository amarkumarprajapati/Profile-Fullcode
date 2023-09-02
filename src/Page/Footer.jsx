import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Footer = () => {
  const openComponentBPage = () => {
    const componentBUrl = '/Contact'; 
    window.open(componentBUrl, '_blank');
  };

  return (
    <div>
       <div className='section4'>
        <div className='head_tag'>
      <h1 className='text_h1'>Lets design somthing<br/><span className='colortext'>together?</span></h1>
      <h1 className='text_h1'>You can find me on<br/><span className='colortext2'>Social media:</span></h1>
   </div>
      <div className='head_sec'>
      <motion.button 
      whileTap={{scaleX: 0.8}}
      onClick={openComponentBPage}
      className='button_sec4'>Contact Me</motion.button>
    <div className='last4'>
    <a href='https://www.linkedin.com/in/amar-prajapati-76255072/' className='line'><motion.button whileTap={{scaleX: 0.8}} className='button_sec5'>Linked in</motion.button></a>
      <a href='https://github.com/amarkumarprajapati?tab=repositories' className='line'><motion.button whileTap={{scaleX: 0.8}} className='button_sec5'>Github</motion.button></a>
      <a href='https://www.facebook.com/amarkk1' className='line'><motion.button whileTap={{scaleX: 0.8}} className='button_sec5'>Facebook</motion.button></a>
      <a href='https://www.instagram.com/amarkumarprajapatikkr/' className='line'><motion.button whileTap={{scaleX: 0.8}} className='button_sec5'>instagram</motion.button></a>
    </div>
   </div>
  </div>


    </div>
  )
}

export default Footer