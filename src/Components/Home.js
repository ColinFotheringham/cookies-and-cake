import React from 'react'
import Carousel from './mainCarousel'

export const Home = () => {

    return (
        <div>  
        <img src="Menu-Pictures/cookiesandc.jpg" className="logo mx-auto d-block banner" alt="The logo of cookies and cake" fluid />
        <Carousel></Carousel>
        <h3 id='home-paragraph'>Welcome to Cookies and Cake! I am located in Raymond, AB and would love to make your next custom cake or treat. Don't hesitate to contact me with any questions.</h3>
        </div>
    )
}

export default Home
