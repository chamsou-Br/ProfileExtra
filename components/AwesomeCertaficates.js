import React from 'react'
import {motion} from "framer-motion"
import WordDrag from './WordDrag'
import CardCertaficate from './CardCertaficate'
import Arrow from './Arrow'

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


function AwesomeCertaficate() {

  const course1 = "Server-side Developement with Nodejs, express and MongoDB"
  const course2 = "Master MERN stack mongoDb, Express, React and Node js"
  const course3 = "Crash course on python"
  const course4 = "Using python to Intract with OPerating System"
  const course5 = "Automating Real-Word Tasks with python"



  return (
      <div className="md:mt-16  sm:pt-10  i swiper">
          <div className="flex  justify-center   flex-wrap ">
              <motion.div className="lg:mr-40 sm:mr-12 mt-20 md:mt-10 ">

                  <motion.div className="flex whitespace-pre"> 
                      {WordDrag(["M" , "y" , " " , "C","e","r","t","a", "f","i","c","t","e","s"],"text-4xl sm:text-6xl  text-primary font-bold font-serif mb mb-0.5 ",0.5,VariantContainer)}
                  </motion.div> 
                  
                  <motion.div className="flex whitespace-pre"> 
                       {WordDrag(["&"," ","T","r","a","i","n","n","i","n","g"],"sm:text-5xl text-3xl text-secondairy font-bold  ",1,VariantContainer)}
                  </motion.div>

                  <motion.p className=" md:w-96 w-96 font-bold opacity-90 mt-5  " 
                      variants={VariantMe} animate="visible" initial="hidden" >
                        Computer Science Certificates are incredibly beneficial to career growth. Not only do they prove to an employer that you have the necessary skills
                         to be successful at the job, but they are shown to support job retention.
                      </motion.p>
                 
                  <motion.div  className="shadowContact mt-4  font-bold text-sm text-third bg-secondairy text-center w-28 px-3
                      py-1 rounded-2xl drop-shadow-3xl"
                      variants={VariantResume} animate="visible" initial="hidden" whileHover="hover">
                      <span>Resume</span>
                  </motion.div>
              </motion.div>

              <div className="mb-10 mt-10 md:mt-5 lg:mt-0 ">
                      {CardCertaficate("/coursera.png","Université de science et technologies" , course1,0.2)}
                      {CardCertaficate("/udemy.jpg","fromgooghdsfdbgle" , course2,0.6)}
                      {CardCertaficate("/coursera.png","From Google" , course3,1)}
                      {CardCertaficate("/coursera.png","From Google" , course4,1.4)}
                      {CardCertaficate("/coursera.png","From Google" , course5,1.8)}

               </div>

          </div>
          
      </div>
  )
}

export default AwesomeCertaficate