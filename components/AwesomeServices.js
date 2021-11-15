import React from 'react'
import {motion} from "framer-motion"
import WordDrag from './WordDrag'
import Arrow from './Arrow'
import CardService from './CardService'

const VariantResume = {
    hidden : {
      x : '100vw',
      opacity : 0
    },
    visible : {
      x : 0,
      opacity : 1,
      transition : {
        delay : 2.5,
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
        delay : 2,
        stiffness : 120,
        type : 'spring'
      }
    },  
  }



function AwesomeServices() {

    const webDev =      "I'm a full stack developer with react ,mongo ,express and nodejs   " 
    const mobiledev =   "I'm a mobile developer with cross platform react native & flutter  "
    const dataScience = "I'm a data scientist who can Analyse and visualize data with python"


    return (
        <div className="md:mt-24  sm:pt-12 i swiper">
            <div className="flex  justify-center   flex-wrap ">
                <motion.div className="lg:mr-40 sm:mr-12 mt-10 ">

                    <motion.div className="flex whitespace-pre"> 
                        {WordDrag(["M" , "y" , " " , "A","w","s","o","m", "e"],"text-4xl md:text-6xl  text-primary font-bold font-serif mb mb-0.5 ",0.5,VariantContainer)}
                    </motion.div> 
                    
                    <motion.div className="flex whitespace-pre"> 
                         {WordDrag(["S","e","r","v","i","c","e","s"],"md:text-5xl text-3xl text-secondairy font-bold  ",1,VariantContainer)}
                    </motion.div>

                    <motion.p className=" md:w-96 w-96  font-bold opacity-90 mt-5  " 
                        variants={VariantMe} animate="visible" initial="hidden" >
                        these are some of my sevice i provide and fields that i'm intersted in as a fullstack developer ,mobiler diveloper and data scientist with differnet technologies & link to  my resume :
                        </motion.p>
                   
                    <motion.div  className="shadowContact mt-4  font-bold text-sm text-third bg-secondairy text-center w-28 px-3
                        py-1 rounded-2xl drop-shadow-3xl"
                        variants={VariantResume} animate="visible" initial="hidden" whileHover="hover">
                        <span>Resume</span>
                    </motion.div>
                </motion.div>

                <div className=" mt-10 mb-10">
                    <div className="md:mr-20">
                      {CardService("/devweb.jpg","MERN stack" , webDev,0.2)}
                    </div>
                    <div className="md:mr-20">
                    {CardService("/dev.jpg","mobile developer" , mobiledev,0.6)}
                    </div>
                    <div className="">
                    {CardService("/mobile.jpg","data scientist" , dataScience,1)}
                    </div>
                 </div>

            </div>



            
        </div>
    )
}

export default AwesomeServices
