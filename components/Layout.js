import React, { useEffect, useState }  from "react";
import Head from 'next/head';
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Arrow from "./Arrow";
import { useRouter } from "next/router";


const Layout = ({children}) => {


    const location = useRouter().route ;
    const [goTo, setgoTo] = useState("")

    useEffect(() => {
        if( location == "/") {
             setgoTo("/services")
        }else if (location == "/services") {
            setgoTo("/education")
        }else if (location == "/education") {
            setgoTo("/certaficates")
        }
        else if (location == "/certaficates") {
            setgoTo("/")
        }
         
     }, [location])

    return ( 
    <div className="root min-h-full bg-hero-back bg-cover" >
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="md:block hidden ">
            <Navbar />
        </div>
        <SideBar />
        {children}
        <Arrow go={goTo} />
    </div>
     );
}
 
export default Layout;