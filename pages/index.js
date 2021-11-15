import { useRouter } from 'next/router'
import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import AwesomeServices from '../components/AwesomeServices'
import SwiperGallery from '../components/DemoCarousel'
import HowMe from '../components/HowMe'
import Navbar from '../components/Navbar'
import Skils from '../components/skiils'
import { AnimatePresence } from 'framer-motion'


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
    <AnimatePresence exitBeforeEnter>
        <div className="">
        <HowMe />
        </div>
    </AnimatePresence>
  )
  }
}