import React from 'react'

const Stack = () => {
  return (
    <div className='text-center flex flex-col items-center justify-center'>
      <h2 className="mt-12 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-600 to-gray-100">Tech Stack:</h2>
      <a target="_blank" className="my-3" href="https://github.com/emilisz">
        <img
          src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
          alt="github logo"
        />
      </a>
      <div className="flex w-4/5 justify-between  p-3 md:w-2/5 lg:w-2/5 xl:w-2/5">

        <div>
          <h5 className="text-2xl text-green-600 font-bold">Front end</h5>
          <ul className="mt-5 list-disc text-left text-xl ">
            <li>Javascript</li>
            <li>Livewire</li>
            <li>React Native</li>
            <li>React</li>
            <li>Tailwindcss</li>
            <li>Bootstrap</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
        </div>

        <div>
          <h5 className="text-2xl text-green-600 font-bold">Back end</h5>
          <ul className="mt-5 list-disc text-left text-xl">
            <li>PHP</li>
            <li>Laravel</li>
            <li>SQL</li>
            <li>Github</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Stack
