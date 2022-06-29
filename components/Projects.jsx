import React from 'react'
import Gallery from '../components/Gallery'
import { data } from '../data'

const Projects = () => {
  return (
    <div>
      <h2 className="mt-12 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-600 to-gray-100 border-b py-6 px-12">Latest projects</h2>
      <div className="mx-auto mt-6 mb-5 grid max-w-4xl items-center justify-around  gap-2 sm:w-full lg:grid-cols-2">
        {data.map((d) => {
          return (
            <div
              key={d.id}
              className="mt-6 rounded-xl border bg-gray-900 p-6 text-left  shadow-lg hover:border-green-600 focus:border-green-600 lg:w-96"
            >
              <a
                href={d.url}
                className="mb-12 text-2xl font-bold text-green-400 underline hover:text-white focus:text-green-800"
              >
                {d.title} &rarr;
              </a>
              <div className="mt-3">
                <Gallery images={d.images} t={false} />
              </div>
              <p className="mt-4 border-b border-green-400 p-2 text-xl">
                {d.desc}
              </p>
              <div className="p-3">
                <h5 className="text-xl text-gray-300 -ml-2">
                <svg class="w-6 h-6 -mt-1 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    Stack:</h5>
                <ul className="list-disc ml-5">
                  {d.stack.map((s, index) => {
                    return (
                      <li key={index} className="text-gray-400">
                        {s}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        }).reverse()}
      </div>
    </div>
  )
}

export default Projects
