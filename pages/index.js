import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import AwesomeServices from '../components/AwesomeServices'
import SwiperGallery from '../components/DemoCarousel'
import HowMe from '../components/HowMe'
import Navbar from '../components/Navbar'
import Skils from '../components/skiils'

export default function Home() {

  const [loading,setLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false)
    },1)
  },[])


  if (loading) {
    return (
      <h1>
        Loading .....
      </h1>
    )
  }
  else {
  return (
    <div className="root  bg-hero-back bg-cover" >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:block hidden ">
         <Navbar />
      </div>
     <AwesomeServices />
    </div>
  )
  }
}
