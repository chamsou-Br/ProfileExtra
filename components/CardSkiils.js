import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

const VariantCard =(delay) => { 
    return { 
    hidden : {
        y : "100vw"
    },
    visible : {
          y : 0,
          transition : {
              delay : 2.5 + delay ,
              stiffness : 120 
          }
      },
      hover : {
        scale : 1.1,
        transition : {
          yoyo : Infinity
        }
      }
    }
}

const CardSkills = (img , title ,delay) => {
    return (
        <motion.div className="text-center max-h-64  mb-6 z-10 shadowService md:px-4 sm:px-4  py-3 w-64 relative" 
            drag 
            dragElastic={0.5}
            dragConstraints={{top : 0, left : 0, right : 0,bottom : 0}}
            variants={VariantCard(delay)} animate='visible' initial='hidden' whileHover="hover"
            
        >
            <div className="p-1 bg-none mr-1">
              <Image id='shadowImage' className="rounded-full bg-cover" src={img} width={80} height={80} />
            </div>
            <div>
              <p className="mt-2 text-xs font-semibold opacity-80">{title}</p>
              
            </div>


        </motion.div>
    )
}

export default CardSkills