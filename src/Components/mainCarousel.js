import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const mainCarousel = () => {
  return (
    <Carousel fade wrap interval="1500" pause="false">
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="Menu-Pictures/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="Menu-Pictures/6.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="Menu-Pictures/8.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="Menu-Pictures/11.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="Menu-Pictures/13.jpg"
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="Menu-Pictures/16.jpg"
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default mainCarousel
