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

const CardCertaficate = (img , title , desc,delay) => {
    return (
        <motion.div className="text-center flex max-h-24  mb-6 z-10 shadowService sm:px-4 px-1 py-3 w-96 relative" 
            drag 
            dragElastic={0.5}
            dragConstraints={{top : 0, left : 0, right : 0,bottom : 0}}
            variants={VariantCard(delay)} animate='visible' initial='hidden' whileHover="hover"
            
        >
            <div className="bg-none mr-4">
              <Image id='shadowImage' className="rounded-full bg-cover" src={img} width={80} height={80} />
            </div>
            
            <div className='text-left'>
              <h1 className="text-primary  font-bold text-sm">{title}</h1>
              <p className="mt-2 max-h-6 w-64 text-left text-xs font-semibold opacity-80">{desc}</p>

            </div>


        </motion.div>
    )
}

export default CardCertaficate