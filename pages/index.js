import { useEffect, useState } from 'react'
import HowMe from '../components/HowMe'
import { AnimatePresence } from 'framer-motion'


export default function Home() {



  return (
    <AnimatePresence exitBeforeEnter>
        <div className="h-screen overflow-hidden	">
        <HowMe />
        </div>
    </AnimatePresence>
  )
}