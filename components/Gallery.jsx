import React from 'react'
import ImageGallery from 'react-image-gallery'


const Gallery = ({images, t}) => {
  return <ImageGallery className="mt-5" items={images} key={images.id} thumbnailPosition={t ? 'left' : 'bottom'} lazyLoad={true} showPlayButton={false} />
}

export default Gallery
