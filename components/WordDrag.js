import React from 'react';
import {motion} from "framer-motion";

const WordDrag = (tabString , classDrag,delay,VariantContainer) => {
    const Tem = tabString.map((l,i) => {
    return (
      <motion.div key={i} className={classDrag}
      variants={VariantContainer(i * 0.1 + delay)} initial='hidden' animate='visible' whileDrag='drag'
        drag dragConstraints={{top : 0,left : 0, bottom : 0,right : 0}}
        dragElastic={0.9} >
        {l}
    </motion.div>
    )
  }) 
  return Tem}
  export default WordDrag