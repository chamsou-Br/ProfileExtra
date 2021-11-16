import React, { useState } from 'react'
import {motion} from "framer-motion"
import WordDrag from './WordDrag'
import SwiperGallery from './Swipper'
import classNames from 'classnames'
import Arrow from './Arrow'


const VariantResume = (delay,c) => {
    return {
    hidden : {
      x : '100vw',
      opacity : 0
    },
    visible : {
      x : 0,
      textShadow : '0px 0px 8px #FFF',
      opacity : 1,
      transition : {
        x : {
            delay : 2.5 + delay,
            when : 'beforeChildren',
            stiffness : 120,
            type : 'spring'
        },
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




function AwesomSkills() {

    const dataDev = [
                    {"title" : "reactjs" , "img" : "/reactjs.png"},{"title" : "Nodejs" , "img" : "/node_js.png"},
                    {"title" : "Express" , "img" : "/exp.png"},{"title" : "MongoDB" , "img" : "/mongo.png"},
                    {"title" : "reactNative" , "img" : "/react_n.jpg"},{"title" : "Flutter" , "img" : "/flutter.jpg"}
                 ]
     const datalang = [
                    {"title" : "Python" , "img" : "/python.png"},{"title" : "Java" , "img" : "/java.png"},
                    {"title" : "Langage C" , "img" : "/lc.png"},{"title" : "JavaScript" , "img" : "/js.png"},
                    {"title" : "Dart" , "img" : "/dart.jpg"}
                 ]
      const dataPer = [
                    {"title" : "comminication" , "img" : "/com.jpg"},{"title" : "Team Work" , "img" : "/teamwork.jpg"},
                    {"title" : "data science" , "img" : "/datascience.jpg"},{"title" : "automation" , "img" : "/automation.png"},
                    {"title" : "organisation" , "img" : "/org.png"}
                 ]


    const [activeSkills, setactiveSkills] = useState(0)

    return (
        <div className="md:mt-12    i">
            <div className="flex  justify-center   flex-wrap ">
                <motion.div className="lg:mr-40 mt-20 sm:mr-12 md:mt-10 ">
                    <motion.div className="flex whitespace-pre"> 
                        {WordDrag(["M" , "y" , " " , "A","w","s","o","m", "e"],"text-4xl sm:text-6xl  text-primary font-bold font-serif mb mb-0.5 ",0.5,VariantContainer)}
                    </motion.div> 
                    
                    <motion.div className="flex whitespace-pre"> 
                         {WordDrag(["_","_","S","k","i","l","l","s"],"sm:text-5xl text-3xl text-secondairy font-bold  ",1,VariantContainer)}
                    </motion.div>
                </motion.div>
                <div className="md:w1/2  flex justify-center mt-14 md:mb-20 "> 
                    <motion.div className={classNames("text-center h-10 py-2 mr-6 w-28 sm:w-32 shadowService px-4  ",{
                        "activeSkills" : activeSkills == 0,
                    })}
                    onClick={()=>setactiveSkills(0)}
                     variants={VariantResume(0,activeSkills == 0)} initial="hidden"  whileHover="hover" animate="visible">
                       <p className="text-center"> Technology </p>
                    </motion.div>
                    <motion.div className={classNames("text-center h-10 py-2 mr-6 w-28 sm:w-32 shadowService px-4  ",{
                                    "activeSkills" : activeSkills == 1,
                                })}
                            onClick={()=>setactiveSkills(1,activeSkills == 1)}
                            variants={VariantResume(0.3)} initial="hidden" whileHover="hover" animate="visible" >
                       <p className=""> langages</p>
                    </motion.div>
                    <motion.div className={classNames("text-center h-10 py-2 w-28 sm:w-32 shadowService px-4  ",{
                                        "activeSkills" : activeSkills == 2,
                                 })}
                                 onClick={()=>setactiveSkills(2 ,activeSkills == 2)}
                             variants={VariantResume(0.6)} initial="hidden" whileHover="hover" animate="visible">
                       <p className=""> other</p>
                    </motion.div>

                </div>
            </div>

            <div className="flex sm:mt-8 mt-6 justify-center">
                <SwiperGallery data={activeSkills == 0 ? dataDev : activeSkills == 1 ? datalang : dataPer} />
            </div>         

        </div>
    )
}



export default AwesomSkills
