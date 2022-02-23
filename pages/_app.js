import { AnimatePresence } from 'framer-motion'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  return (

    <Layout >
        <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
      </AnimatePresence>
    </Layout>

  ) 
}

export default MyApp
