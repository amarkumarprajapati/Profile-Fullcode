import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [show,setshow] = useState(false);
  return (
    <div>    
      <div className="wrapper">  
      <motion.div id="nav-icon1" className={isOpen ? 'open' : 'close'} onClick={() => {toggleMenu();setshow(!show);}}>
           <span></span>
           <span></span>
           <span></span>
          </motion.div>
    </div>
         {show ? <motion.nav id='Conatainer'>
         <div>
          <div className='main'>
            <a href='./'className='line'><motion.li
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{scale: 1.2}}  whileTap={{scale: 0.9}} className='Home'>Home</motion.li></a>


             <a href='./Work' className='line'><motion.li 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{scale: 1.2}}  whileTap={{scale: 0.9}} className='Home' >Work</motion.li></a>

            <a href='./About' className='line'><motion.li 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{scale: 1.2}}  whileTap={{scale: 0.9}} className='Home'>About</motion.li></a>

             <a href='./Contact' className='line'><motion.li 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='Home'>Contact</motion.li></a>

          </div>
          <div className='Text'>
            <motion.h1 className='text1'
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}   
            >Let’s find solutions together?</motion.h1>
            <motion.p className='text5'
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
              Use my contacts below if you need to put a project on the move, let’s work on it!
              <br />
              Email id - Amarkumarprajapati.com
            </motion.p>
            <br />
            <motion.p
            href='/contact'
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text3'>Contact Me</motion.p>
          </div>
        </div>
      </motion.nav>:null}
    
     <div class="circle"></div>
    </div>

  );
};

export default Navbar;
