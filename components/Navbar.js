import React,{useState} from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


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


const [itemNavActive, setitemNavActive] = useState(0);
const location = useRouter().route;
const router = useRouter();

useEffect(() => {

  if( location == "/") {
      setitemNavActive(0)
  }else if (location == "/services") {
    setitemNavActive(1)
  }else if (location == "/education") {
    setitemNavActive(2)
  }
  else if (location == "/certaficates") {
    setitemNavActive(3)
  }
  else if (location =="/skills") {
    setitemNavActive(4)
  }
  else if (location =="/projects") {
    setitemNavActive(5)
  }
   
}, [location])

    


    return (
        <>
        <motion.div className="md:flex  justify-around z-50  pt-4 ">

                    <motion.div className={classNames("font-bold text-sm text-primary   px-3 py-1 rounded-2xl drop-shadow-3xl hover:text-secondairy cursor-pointer",{
                          'text-secondairy': itemNavActive === 0
                         })}
                         variants={VariantNavbar} animate='visible' initial='hidden'
                         onClick={()=>router.push("/")}>
                                <span className=" ">Personal</span>
                     </motion.div>
                    <motion.ul className="flex" >

                        <motion.li className={classNames('ml-8 mt-2 text-primary font-bold text-sm hover:text-secondairy cursor-pointer',
                                    { 
                                            'text-secondairy': itemNavActive === 1
                                    }
                                    )} variants={VariantNavbar} animate='visible' initial='hidden'
                                    onClick={()=>router.push("/services")}>
                                    Services
                        </motion.li>

                        <motion.li className={classNames('ml-8 mt-2 text-primary font-bold text-sm hover:text-secondairy cursor-pointer',
                                    { 
                                            'text-secondairy': itemNavActive === 2
                                    }
                                    )} variants={VariantNavbar} animate='visible' initial='hidden'
                                    onClick={()=> router.push("/education")}>
                                    Education
                        </motion.li>

                        <motion.li className={classNames('ml-8 mt-2 text-primary font-bold text-sm hover:text-secondairy cursor-pointer',
                                    { 
                                            'text-secondairy': itemNavActive === 3
                                    }
                                    )} variants={VariantNavbar} animate='visible' initial='hidden'
                                    onClick={()=> router.push("/certaficates")}>
                                    Certaficates
                        </motion.li>


                        <motion.li className={classNames('ml-8 mt-2 text-primary font-bold text-sm hover:text-secondairy cursor-pointer',
                                    { 
                                            'text-secondairy': itemNavActive === 4
                                    }
                                    )} variants={VariantNavbar} animate='visible' initial='hidden'
                                    onClick={()=> router.push("/skills")}>
                                    Skills
                        </motion.li>

                        <motion.li className={classNames('ml-8 mt-2 text-primary font-bold text-sm hover:text-secondairy cursor-pointer',
                                    { 
                                            'text-secondairy': itemNavActive === 5
                                    }
                        )} variants={VariantNavbar} animate='visible' initial='hidden'
                        onClick={()=> router.push("/projects")}>
                                  Projects
                        </motion.li>

                        <motion.li className="shadowContact ml-28  font-bold text-sm bg-secondairy px-3 py-1 rounded-2xl drop-shadow-3xl "
                                 variants={VariantContact} animate='visible' initial='hidden' whileHover='hover'
                                 onClick={()=> window.location.href = 'mailto:jc_berkane@esi.dz?Subject=Hello%26body=content'}>
                            <span className="text-third ">Contact us</span>
                        </motion.li>
                    </motion.ul>
        </motion.div>
        </>
    )
}

export default Navbar
