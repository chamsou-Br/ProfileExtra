import React, { useState } from 'react'
import {motion} from "framer-motion"
import WordDrag from './WordDrag'
import SwiperGallery from './Swipper'
import classNames from 'classnames'
import Arrow from './Arrow'
import SwipperProject from './SwipperProjects'


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




function AwesomeProjects() {

    const data = [
                    {"title" : "Accounting platform" , "img" : "/mern.jpg","lien" : "https://github.com/chamsou-Br/clientProjet2CP"},
                    {"title" : "Islem house" , "img" : "/flutter.jpg","lien" : "https://github.com/chamsou-Br/islamHouse"},
                    {"title" : "Tell Me" , "img" : "/react_n.jpg","lien" : "https://github.com/chamsou-Br/Tell_Me"},
                    {"title" : "Here Wether" , "img" : "/flutter.jpg","lien" : "https://github.com/chamsou-Br/flutter-Weather"},
                    {"title" : "Esms Cse" , "img" : "/react_n.jpg","lien" : "https://github.com/chamsou-Br/ESMS-Team-14"}, 
                    {"title" : "TresorEsi" , "img" : "/reactjs.png","lien" : "https://github.com/chamsou-Br/TresorEsi"}, 
                ]
                


    const [activeSkills, setactiveSkills] = useState(0)

    return (
        <div className="md:mt-32    i">
            <div className="flex  justify-center mt-20 md:mt-10   flex-wrap ">
                <motion.div className="">
                    <motion.div className="flex whitespace-pre"> 
                        {WordDrag(["M" , "y" , " " , "A","w","s","o","m", "e"],"text-4xl sm:text-6xl  text-primary font-bold font-serif mb mb-0.5 ",1.5,VariantContainer)}
                    </motion.div> 
                </motion.div>
                <div className=" "> 
                <motion.div className="flex whitespace-pre"> 
                         {WordDrag(["_","_","P","r","o","j","e","c","t","s"],"text-4xl sm:text-6xl  text-secondairy font-bold  ",0.2,VariantContainer)}
                    </motion.div>
                </div>
            </div>

            <div className="flex sm:mt-8 mt-6 justify-center">
                <SwipperProject data={data} />
            </div>         

        </div>
    )
}




export default AwesomeProjects
