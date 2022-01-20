import { useEffect, useState } from 'react'
import HowMe from '../components/HowMe'
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
        <div className=" h-screen">
        <HowMe />
        </div>
    </AnimatePresence>
  )
  }
}