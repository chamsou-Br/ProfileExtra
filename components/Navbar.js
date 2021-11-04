import React,{useState} from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'


const VariantNavbar = {
    hidden : {
      y : '-100vw'
    },
    visible : {
      y : 0 ,
      transition : {
        delay : 0.2,
        type : 'spring',
        stiffness : 60, 
      }
    }
  }
  
  const VariantContact = {
    hidden : {
      x : '100vw',
      opacity : 0
    },
    visible : {
      x : 0,
      opacity : 1,
      transition : {
        when : 'beforeChildren',
        stiffness : 120,
        type : 'spring'
      }
    },
    hover : {
        textShadow : '0px 0px 8px #FFF',
        scale : 1.1,
        transition : {
          yoyo : Infinity
        }
    }
  }

export const Navbar = (props) => {

const [itemNavActive, setitemNavActive] = useState(0)

    


    return (
        <>
        <motion.div className="md:flex  justify-around  mt-5 ">

                    <motion.div className="font-bold text-sm   px-3 py-1 rounded-2xl drop-shadow-3xl"
                         variants={VariantNavbar} animate='visible' initial='hidden'>
                                <span className="text-primary ">Personal</span>
                     </motion.div>
                    <motion.ul className="flex" >

                        <motion.li className={classNames('ml-8 mt-2 text-primary font-bold text-sm',
                                    { 
                                            'text-secondairy': itemNavActive === 1
                                    }
                                    )} variants={VariantNavbar} animate='visible' initial='hidden'>
                                    Education
                        </motion.li>


                        <motion.li className={classNames('ml-8 mt-2 text-primary font-bold text-sm',
                                    { 
                                            'text-secondairy': itemNavActive === 3
                                    }
                                    )} variants={VariantNavbar} animate='visible' initial='hidden'>
                                    Skills
                        </motion.li>

                        <motion.li className={classNames('ml-8 mt-2 text-primary font-bold text-sm',
                                    { 
                                            'text-secondairy': itemNavActive === 4 
                                    }
                        )} variants={VariantNavbar} animate='visible' initial='hidden'>
                        Experience
                        </motion.li>

                        <motion.li className="shadowContact ml-28  font-bold text-sm bg-secondairy px-3 py-1 rounded-2xl drop-shadow-3xl "
                                 variants={VariantContact} animate='visible' initial='hidden' whileHover='hover'>
                            <span className="text-third ">Contact us</span>
                        </motion.li>
                    </motion.ul>
        </motion.div>
        </>
    )
}

export default Navbar
