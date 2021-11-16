import React from 'react'
import Image from 'next/image'
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


function AwesomeEducation() {

  const student = "I'm a student at Highter National school of computer science"
  const gdg =     "I'm a developer in google developers groups club at ESI ex INI"
  const cse =     "I'm a a member -developement departement- in science club at esi"



  return (
      <div className="md:mt-24  sm:pt-12 i swiper">
          <div className="flex  justify-center   flex-wrap ">
              <motion.div className="lg:mr-40 sm:mr-12 mt-20 md:mt-10   ">

                  <motion.div className="flex whitespace-pre"> 
                      {WordDrag(["M" , "y" , " " , "E","d","u","c","a", "t","i","o","n"],"text-4xl md:text-6xl  text-primary font-bold font-serif mb mb-0.5 ",0.5,VariantContainer)}
                  </motion.div> 
                  
                  <motion.div className="flex whitespace-pre"> 
                       {WordDrag(["&"," ","E","x","p","e","r","i","e","n","c","e","s"],"md:text-5xl text-3xl text-secondairy font-bold  ",1,VariantContainer)}
                  </motion.div>

                  <motion.p className="md:w-96 w-96 font-bold opacity-90 mt-5  " 
                      variants={VariantMe} animate="visible" initial="hidden" >
                        Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency. It thus focuses on the cultivation of skills,moral & aesthetic development.
                        so i'm student at Esi algiers and member in GDG & CSE . 
                      </motion.p>
                 
                  <motion.div  className="shadowContact mt-4  font-bold text-sm text-third bg-secondairy text-center w-28 px-3
                      py-1 rounded-2xl drop-shadow-3xl"
                      variants={VariantResume} animate="visible" initial="hidden" whileHover="hover">
                      <span>Resume</span>
                  </motion.div>
              </motion.div>

              <div className=" mt-10 mb-10">
                      {CardService("/esi.png","CS Student" , student,0.2)}
                      {CardService("/gdg.png","GDG member" , gdg,0.6)}
                      {CardService("/cse.jpeg","CSE member" , cse,1)}

               </div>

          </div>

      </div>
  )
}

export default AwesomeEducation