import Head from 'next/head'
import { data } from '../data'

import other1 from '../public/img/other1.webp'
import other2 from '../public/img/other2.webp'
import other3 from '../public/img/other3.webp'
import other4 from '../public/img/other4.webp'
import Gallery from '../components/Gallery'

const otherImages = [
  {
    id: 1,
    original: other1.src,
    thumbnail: other1.src,
    description: 'Converting PSD To responsive HTML template',
  },
  {
    id: 2,
    original: other2.src,
    thumbnail: other2.src,
    description: 'Converting PSD To responsive HTML template',
  },
  {
    id: 3,
    original: other3.src,
    thumbnail: other3.src,
    description: 'Converting Abode xd to responsive HTML',
  },
  {
    id: 4,
    original: other4.src,
    thumbnail: other4.src,
    description: 'Converting Abode xd to responsive HTML',
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 py-5 text-gray-200">
      <Head>
        <title>Emilis portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-12  flex w-full flex-1 flex-col items-center justify-center px-5 text-center lg:px-20">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Emilis Čiurlionis <span className="text-green-600">Portfolio</span>
        </h1>

        <p className="mt-5 w-full p-8 text-2xl md:w-3/5  lg:w-3/5 xl:w-2/5">
          Hello, I am{' '}
          <code className="rounded-md bg-gray-600 p-3 font-mono text-lg">
            full stack developer
          </code>
          . I like to code. My specialty is landing pages, E-commerce stores and
          custom projects. Feel free to{' '}
          <a className="underline" href="https://www.facebook.com/webasas9">
            {' '}
            contact me
          </a>
        </p>

        <h2 className="mt-12 text-center text-3xl font-bold">Why hire me?</h2>
        <p className="mt-5 w-full p-8 text-2xl md:w-3/5  lg:w-3/5 xl:w-2/5">
          I love to write code &#x2665; Experience with projects from scratch to
          deploying. Knowing that client almost always right, and always expects
          best results, it is necessary to deliver excellent outcome. I will
          work towards YOUR vission (not mine) in the best possible manner. One
          of my strongest asset is constantly keep learning and handle every
          criticism and feedback positively.
        </p>

        <h2 className="mt-12 text-center text-3xl font-bold">Tech Stack:</h2>
        <div className="flex w-4/5 justify-between  p-3 md:w-2/5 lg:w-2/5 xl:w-2/5">
          <div>
            <h5 className="text-2xl text-green-600">Back end</h5>
            <ul className="mt-5 list-disc text-left text-xl">
              <li>PHP</li>
              <li>Laravel</li>
              <li>SQL</li>
              <li>Github</li>
            </ul>
          </div>

          <div>
            <h5 className="text-2xl text-green-600">Front end</h5>
            <ul className="mt-5 list-disc text-left text-xl ">
              <li>Javascript</li>
              <li>Livewire</li>
              <li>React Native</li>
              <li>React</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </div>
        </div>

        <h2 className="mt-12 text-center text-3xl font-bold">
          Latest projects
        </h2>
        <div className="mx-3 mt-6 mb-5 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {data.map((d) => {
            return (
              <div
                key={d.id}
                className="mt-6 lg:w-96 rounded-xl border bg-gray-900 p-6  text-left shadow-lg hover:border-green-600 focus:border-green-600"
              >
                <a
                  href={d.url}
                  className="mb-12 text-2xl font-bold text-green-400 hover:text-white focus:text-green-800"
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

        <h2 className="mt-12 mb-3 text-center text-3xl font-bold">
          Other projects
        </h2>
        <Gallery images={otherImages} t="left" />
      </main>

      <footer className="mt-24 flex w-full items-center justify-center ">
        <a
          className="flex items-center justify-center"
          href="https://www.facebook.com/webasas9"
          target="_blank"
          rel="noopener noreferrer"
        >
          @2022 Emilis portfolio
        </a>
      </footer>
    </div>
  )
}
