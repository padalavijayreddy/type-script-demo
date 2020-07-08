import React, { Component } from 'react'
import HocsComponent from '../../components/HocsComponent'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import getImagesLazyLoading from '../../../fixtures/getImagesLazyLoading.json'

class HocsRoute extends Component {
  render() {
    const images = getImagesLazyLoading
    return (
      <div>
        {/* 
      <HocsComponent /> */}
        {images.map(image => (
          <LazyLoadImage
            alt={image.alt}
            src={image.src}
            height={500}
            width={200}
            // If the image we are creating here has the same src than before,
            // we can directly display it with no need to lazy-load.
            // visibleByDefault={image.src === '/landscape.jpg'}
          />
        ))}
      </div>
    )
  }
}

export default HocsRoute
