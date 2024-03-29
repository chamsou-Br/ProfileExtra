import React, { useEffect, useState }  from "react";
import Head from 'next/head';
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Arrow from "./Arrow";
import { useRouter } from "next/router";
import classNames from "classnames";
import NavbarArrow from "./navbarArrow";
import ReactLoading from "react-loading"


const Layout = ({children}) => {


    const location = useRouter().route ;
    const [goTo, setgoTo] = useState("")
    const [activeGo , setActiveGo] = useState(false);
    const [loading , setLoading] =   useState(true);




    useEffect(() => {

        if( location == "/") {
            setActiveGo(false)
             setgoTo("/services")
        }else if (location == "/services") {
            setActiveGo(false)
            setgoTo("/education")
        }else if (location == "/education") {
            setActiveGo(false)
            setgoTo("/certaficates")
        }
        else if (location == "/certaficates") {
            setActiveGo(false)
            setgoTo("/skills")
        }
        else if (location =="/skills") {
            setActiveGo(false)
            setgoTo("/projects")
        }
        else if (location =="/projects") {
            setActiveGo(false)
            setgoTo("/")
        }
        setTimeout(()=> {
            setActiveGo(true)
        },1000)
         setTimeout(()=> {
                setLoading(false)
         },2000)
     }, [location])

    if (loading) {
        return(
            <div className=" flex justify-center relative h-screen ">
                <ReactLoading type="spinningBubbles" height={120} width={120}  className=" m-auto" color="#000" />
            </div>
            
        )
    }else {
        return ( 
            <div className="root min-h-full relative bg-hero-back bg-cover h-screen md:overflow-hidden" >
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="md:block hidden ">
                    <Navbar />
                </div>
                <SideBar />
                {children}
                <div className={classNames("" , {
                    "hidden" : activeGo == false ,
                    "block" : activeGo == true
                 })} >
                        {/* Arrow */}
                        <Arrow go={goTo}/>
                </div>
        
            </div>
             );
    }
 
}
 
export default Layout;