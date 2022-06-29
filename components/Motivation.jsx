import React from 'react'

const Motivation = () => {
  return (
    <div className='text-center flex flex-col items-center justify-center'>
        <h2 className="mt-12 text-center text-3xl font-bold">
            Why hire me
            <svg className="w-10 h-10 ml-2 -mt-2 inline-block text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </h2>
        <p className="mt-5 w-full p-3 lg:p-8 text-2xl md:w-4/5  lg:w-4/5 xl:w-5/5 ">
          I love to write code <span className=" text-green-400">&#x2665;</span>. Experience with projects from scratch to
          deploying. Knowing that client almost always right, and always expects
          <span className=" text-green-400 font-mono"> best results</span>, it is necessary to <span className=" text-green-400 font-mono">deliver excellent outcome</span> . I will
          work towards YOUR vission (not mine) in the best possible manner. One
          of my strongest asset is constantly keep learning and handle every
          criticism and feedback positively.
        </p>
    </div>
  )
}

export default Motivation