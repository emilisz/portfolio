import Head from 'next/head'


import Hero from '../components/Hero'
import Motivation from '../components/Motivation'
import Stack from '../components/Stack'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Converting from '../components/Converting'



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 py-5 text-gray-200">
      <Head>
        <title>Emilis portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Emilis portfolio and projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-12  max-w-7xl mx-auto px-5 text-center ">
        <Hero />
        <Motivation />
        <Stack />
        <Projects />
        <Converting />


        
      </main>

      <Footer />
    </div>
  )
}
