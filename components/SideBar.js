import React, { useState ,useEffect} from 'react'
import { motion } from 'framer-motion'
import {FaGithub , FaFacebook , FaInstagram , FaGooglePlus ,FaLinkedin} from "react-icons/fa"
import { useRouter } from 'next/router'
import classNames from 'classnames'
import {FaBars} from "react-icons/fa"

function SideBar() {
    
    // navbar active 
    const [sidebarActive, setsidebarActive] = useState(false)

    //location
    const location = useRouter().route ;
    const [activePage, setactivePage] = useState(0)
    
    // color icons
    const [colorgithub, setcolorgithub] = useState("#FCA61F")
    const [colorgoogle, setcolorgoogle] = useState("#FCA61F")
    const [colorlinkedin, setcolorlinkedin] = useState("#FCA61F")
    const [colorfacebook, setcolorfacebook] = useState("#FCA61F")
    const [colorinstagram, setcolorinstagram] = useState("#FCA61F")

    useEffect(() => {

       if( location == "/") {
            setactivePage(0)
       }else if (location == "/services") {
            setactivePage(1)
       }else if (location == "/education") {
            setactivePage(2)
       }
       else if (location == "/certaficates") {
           setactivePage(3)
       }
        
    }, [location])


    return (

        <div className={classNames("fixed z-50  top-0 left-0  w-16 h-full ",{
            "bg-primary" : sidebarActive == true ,
            "bg-none" :sidebarActive == false
        })} >

        <div className={classNames(" flex justify-around  py-2 mt-2 rounded-full   text-center mb-6",{
            "bg-primary" : sidebarActive == true ,
            "bg-third" : sidebarActive == false,
            "ml-1" : sidebarActive == false
        })} onClick={()=> {
            setsidebarActive(!sidebarActive);
        }}>
            <FaBars className="text-lg" color={sidebarActive ? "#FFF" : "#242D49"}/>
        </div>

        <div className={classNames("justify-around h-full  ",{
                        "hidden" : sidebarActive == false ,
                        "flex" :sidebarActive == true
        })}>
            <div className="inline ">

                <div className="mt-6">
                    <motion.div onHoverStart={()=>setcolorgithub("#FFF")} onHoverEnd={()=> setcolorgithub("#FCA61F")}
                                className="SM p-2 bg-third rounded-full mb-4">
                         <FaGithub color={colorgithub} size={24} className="" />
                    </motion.div>

                    <motion.div onHoverStart={()=>setcolorgoogle("#FFF")} onHoverEnd={()=> setcolorgoogle("#FCA61F")}
                                className="SM p-2 bg-third rounded-full mb-4">
                        <FaGooglePlus color={colorgoogle} size={24} className="" />
                    </motion.div>

                    <motion.div onHoverStart={()=>setcolorlinkedin("#FFF")} onHoverEnd={()=> setcolorlinkedin("#FCA61F")}
                                className="SM p-2 bg-third rounded-full mb-4">
                         <FaLinkedin color={colorlinkedin} size={24} className="" />
                    </motion.div>

                    <motion.div onHoverStart={()=>setcolorfacebook("#FFF")} onHoverEnd={()=> setcolorfacebook("#FCA61F")}
                                className="SM p-2 bg-third rounded-full mb-4">
                         <FaFacebook color={colorfacebook} size={24} className="" />
                    </motion.div>

                    <motion.div onHoverStart={()=>setcolorinstagram("#FFF")} onHoverEnd={()=> setcolorinstagram("#FCA61F")} 
                                className="SM p-2 bg-third rounded-full mb-4">
                      <FaInstagram color={colorinstagram} size={24} className="" />
                    </motion.div>
                    

                    
                    
                    
                </div>
                <div className=" mt-52 text-center ml-3">
                    <div className={classNames("w-4 h-4 bg-third rounded-full  mb-3",
                        {
                            "activepage" : activePage ==0
                        })}>
                    </div>

                    <div className={classNames("w-4 h-4 bg-third rounded-full  mb-3",
                        {
                            "activepage" : activePage ==1
                        })}>    
                    </div>
                    <div className={classNames("w-4 h-4 bg-third rounded-full  mb-3",
                        {
                            "activepage" : activePage ==2
                        })}>    
                    </div>
                    <div className={classNames("w-4 h-4 bg-third rounded-full  mb-3",
                        {
                            "activepage" : activePage ==3
                        })}>    
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default SideBar
