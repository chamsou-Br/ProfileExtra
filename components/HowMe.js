import React, { useState } from 'react'
import Image from "next/image"
import {motion} from "framer-motion"
import Arrow from './Arrow'

const VariantImageContainer = (delay) =>{ 
  return {
  hidden : {
    scale : 0,
    rotate : 0
  },
  visible : {
      scale : 1,
      x : 0,
      transition : {
        delay : delay + 2 ,
        when : 'beforeChildren',
        stiffness : 120,
        type : 'spring'
      }
  }
}}



const VariantImageSmall = {
  hidden : {
    scale : 3,
    opacity : 0,
    rotate : 0
  },
  visible : {
    scale : 1,
    rotate : 360 ,
    opacity : 1,
    transition : {
      when : 'beforeChildren',
      stiffness : 120,
      type : 'spring'
    }

  }
}

const VariantImage = {
  hidden : {
    scale : 3,
    opacity : 0,
    rotate : 0
  },
  visible : {
    scale : 1,
    rotate : 360 ,
    opacity : 1,
    transition : {
      delay : 3 ,
      when : 'beforeChildren',
      stiffness : 120,
      type : 'spring'
    }

  }
}
const VariantContainer = (delay) => {
  return {
  hidden : {
    x : '-100vw',
  },
  visible : {
    x : 0,
    transition : {
      when : 'beforeChildren',
      stiffness : 120,
      delay : delay,
      type : 'spring'
    }
  },
  drag : {
    textShadow : '0px 0px 8px #FCA61F',
    scale : 1,
    transition : {
      yoyo : Infinity
    }
  },
  exit : {
    x : '-100vw',
    transition : {
      ease : 'easeInOut'
    }
  }
}
}

const VariantMe = {
  hidden : {
    x : '-100vw',
  },
  visible : {
    x : 0,
    transition : {
      delay : 1.3,
      when : 'beforeChildren',
      stiffness : 120,
      type : 'spring'
    }
  },

}

const VariantHideMe = {
  hidden : {
    x : '-100vw',
  },
  visible : {
    x : 0,
    transition : {
      delay : 1.5,
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


  const WordDrag = (tabString , classDrag,delay) => {
    const Tem = tabString.map((l,i) => {
    return (
      <motion.div key={i} className={classDrag}
      variants={VariantContainer(i * 0.05 + delay)} initial='hidden' exit="exit" animate='visible' whileDrag='drag'
        drag dragConstraints={{top : 0,left : 0, bottom : 0,right : 0}}
        dragElastic={0.9} >
        {l}
    </motion.div>
    )
  }) 
  return Tem}
 

function HowMe() {


    const MeInSomeLines = "I'm berkane Chamseddine from setif-algeria , i'm 19 , student at copmouter science in ESI-Algeirs,My main focus for now is on Web Development with MERN - Mongodb Express React Nodejs - technology,and a futur data scientist . you will find some of my simple project and my humble experience down below "
    
    const [MoreLines,SetMoreLine]  = useState(false)
    return (
        <div className="flex flex-wrap-reverse  justify-center  lg:px-4   " >
           
           
            <div className="md:w-2/4  z-10 w-3/4 mt-8   md:mt-44 ">
              <motion.div className="flex whitespace-pre"> 
                  {WordDrag(["H" , "i" , "!" , " ","I"," ","A","m"],"text-4xl lg:text-6xl  text-primary font-bold font-serif mb mb-0.5 ",0)}
              </motion.div> 
              <div className="flex whitespace-pre">
                  {WordDrag(["B","E","R","K","A","N","E"," ","C","h","a","m","s","e","d","d","i","n","e"],"lg:text-5xl text-3xl text-secondairy font-bold  mb-6",0.5)}
              </div>

                <motion.p className="lg:pr-5  font-semibold opacity-50 mb-6" variants={VariantMe} animate='visible' initial='hidden'>
                    {MoreLines == true ? MeInSomeLines : (MeInSomeLines.substring(0,120) + "...")}...
                </motion.p>

                <motion.div className="shadowContact   font-bold text-sm text-third bg-secondairy text-center w-28 px-3 py-1 
                    rounded-2xl drop-shadow-3xl "  variants={VariantHideMe} whileHover='hover' animate='visible' initial='hidden'
                    onClick={(e)=>SetMoreLine(!MoreLines)}>
                    <span>{MoreLines == true ? "Hide Me" : "Hire Me"}</span>
                </motion.div>

            </div>

            <motion.div className="relative lg:flex hidden mt-16 md:mt-32"
                 drag 
                dragElastic={0.4}
                dragConstraints={{top : 0, left : 0, right : 0,bottom : 0}}>
                <div className="absolute -top-5  -left-14  ">
                    <Image src="/emoji.jpg" width={70} height={70} />
                </div>
                <motion.div className="absolute" variants={VariantImageContainer(0)} animate='visible' initial='hidden'>
                   <Image  src="/shape2.png" width={400} height={400}  />
                </motion.div>
                <div className="relative" >
                     <motion.img variants={VariantImageContainer(0.5)} animate='visible' initial='hidden'  src="/shape1.png" width={400} height={400} />
                     <motion.div id="shadowImage" variants={VariantImage} animate='visible' initial='hidden'
                      className="absolute bg-contain  top-16 sm:top-16 sm:left-20 bg-chamsou  w-60 h-60  left-16 z-10 rounded-full">
                    </motion.div>
                </div>

            </motion.div>
            <motion.div className="lg:hidden  relative mt-16 md:mt-32"
                 drag 
                dragElastic={0.4}
                dragConstraints={{top : 0, left : 0, right : 0,bottom : 0}}>
                <div className="relative" >
                     <motion.div id="shadowImage" variants={VariantImageSmall} animate='visible' initial='hidden'
                      className="bg-contain   bg-chamsou  w-60 h-60  left-16 z-10 rounded-full">
                    </motion.div>
                </div>

            </motion.div>
           
        </div>
    )
}

export default HowMe
