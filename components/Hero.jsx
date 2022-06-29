import React from 'react'

const Hero = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold lg:text-6xl">
          Emilis Čiurlionis <span className="text-green-600">Portfolio</span>
        </h1>

        <p className="mt-5 w-full p-8 text-2xl md:w-3/5  lg:w-3/5 xl:w-2/5 leading-10">
          Hello, I am{' '}
          <code className="rounded-md bg-gray-600 px-3 py-1 border font-mono text-lg mx-1">
            developer
          </code>
          . I help my clients achieve their goals. My specialty is Websites, SEO services and
          custom projects. Feel free to{' '}
          <a className="underline decoration-green-500 underline-offset-4" href="https://www.linkedin.com/in/emilis-%C4%8Diurlionis/">
            {' '}
            contact me
            <svg className="w-8 h-8 inline-block ml-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          </a>
        </p>
    </div>
  )
}

export default Hero