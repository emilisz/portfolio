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
          <a className="underline" href="https://www.linkedin.com/in/emilis-%C4%8Diurlionis/">
            {' '}
            contact me
          </a>
        </p>
    </div>
  )
}

export default Hero