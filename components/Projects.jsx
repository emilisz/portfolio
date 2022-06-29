import React from 'react'
import Gallery from '../components/Gallery'
import { data } from '../data'

const Projects = () => {
  return (
    <div>
      <h2 className="mt-12 text-center text-3xl font-bold">Latest projects</h2>
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
                <h5 className="text-xl text-gray-300">Stack:</h5>
                <ul className="list-disc">
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
        })}
      </div>
    </div>
  )
}

export default Projects
