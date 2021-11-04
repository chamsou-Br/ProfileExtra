import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"



function AwesomeServices() {

    const webDev = "I'm a fullstack  developer with react , mongo , express and nodejs "

    const CardService = (img , title , desc) => {
        return (
            <motion.div className="text-center z-10 bg-card-service shadowService md:px-4 sm:px-4  py-6  w-60 relative" 
                drag 
                dragElastic={0.4}
                
            >
                <Image id='shadowImage' className="rounded-full" src={img} width={80} height={80} />
                <h1 className="text-primary font-bold mt-3 text-xl">{title}</h1>
                <p className="mt-2 text-xs font-semibold opacity-80">{desc}</p>
                <p className=" text-lg font-semibold mt-7 text-forth">
                    Learn More
                </p>

            </motion.div>
        )
    }

    return (
        <div className="mt-5  i swiper
        flex  justify-center   flex-wrap ">

            <div className="sm:mr-40 mt-10 w-1/2">

                <h1 className="text-primary md:text-4xl text-2xl font-bold" >My Awesome </h1>
                <h1 className="text-secondairy md:text-4xl text-2xl  font-bold">Services</h1>
                <p className=" md:w-96 w-64 font-bold opacity-90 mt-5  " >
                    these are some of my sevice i provide and fields that i'm intersted in & link to  my resume :</p>
                <div className="shadowContact mt-4  font-bold text-sm text-third bg-secondairy text-center w-28 px-3
                    py-1 rounded-2xl drop-shadow-3xl ">
                    <span>Resume</span>
                </div>
            </div>
            <div className="">
                 {CardService("/chamsou.jpg","Web developer" , webDev)}
            </div>
            <div className="ml-0 md:ml-24 mr-16">
                 {CardService("/chamsou.jpg","Web developer" , webDev)}
            </div>
            <div className="md:mt-8">
                 {CardService("/chamsou.jpg","Web developer" , webDev)}
            </div>

            
        </div>
    )
}

export default AwesomeServices
