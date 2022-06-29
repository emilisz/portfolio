import React from 'react'
import Gallery from '../components/Gallery'

import other1 from '../public/img/other1.webp'
import other2 from '../public/img/other2.webp'
import other3 from '../public/img/other3.webp'
import other4 from '../public/img/other4.webp'

const otherImages = [
  {
    id: 1,
    original: other1.src,
    thumbnail: other1.src,
    originalAlt: 'responsive HTML template',
    thumbnailAlt: 'responsive HTML template'
  },
  {
    id: 2,
    original: other2.src,
    thumbnail: other2.src,
    originalAlt: 'responsive HTML template',
    thumbnailAlt: 'responsive HTML template'
  },
  {
    id: 3,
    original: other3.src,
    thumbnail: other3.src,
    originalAlt: 'responsive HTML template',
    thumbnailAlt: 'responsive HTML template'
  },
  {
    id: 4,
    original: other4.src,
    thumbnail: other4.src,
    originalAlt: 'responsive HTML template',
    thumbnailAlt: 'responsive HTML template'
  },
]

const Converting = () => {
  return (
    <div className='max-w-4xl flex flex-col mx-auto'>
        <h2 className="mt-12 mb-3 text-center text-3xl font-bold">
          Converting PSD into html projects
        </h2>
        <Gallery images={otherImages} t="bottom" />
    </div>
  )
}

export default Converting