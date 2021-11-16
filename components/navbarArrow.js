



import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {FaArrowRight} from "react-icons/fa"

/*
      <div className="z-50">
            <motion.div onHoverStart={()=>SetArrowColor("#FFF")} onHoverEnd={()=> SetArrowColor("#FCA61F")}
            variants={VariantArrow} animate="visible" initial="hidden" className="ArrowRouter fixed rounded-full p-3  text-center bg-third bottom-16 right-16   md:block hidden " >
            <FaArrowRight className="md:text-3xl sm:text-lg" onClick={()=>router.push(props.go)} color={ArrowColor} />
            </motion.div>
       </div>
 */

const VariantArrow = {
    hidden : {
      x : "-100vw",
      scale : 1,
    },
    visible : {
      x : 0,
      scale : 1.1,
      transition : {
          x : {
            delay : 1.5 ,
            stiffness : 60 ,   
            type : 'spring',
          },
          scale : {
            yoyo : Infinity ,
            delay : 4,
            stiffness : 60,
            type : 'spring',
          }
      }
    }
}
  

function NavbarArrow(props) {

    const [ArrowColor, SetArrowColor] = useState("#FCA61F")
    const router = useRouter()

    return (  
      <div className="z-50 ">


       </div>

    )
}

export default NavbarArrow