import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'


import './slider.css'

const Slider = ({ data }) => {

    return (
        <>
            <Carousel style={{ zIndex: '100' }} fade>
                <Carousel.Item className='carousel-item'>
                    <Link to={`/item/${data[0].id}`}>
                        <img
                            className="d-block w-100"
                            src={data[0].pictureUrl}
                            alt={data[0].title}
                        />
                    </Link>
                    <Carousel.Caption className='backgroundDark'>
                        <h3>{data[0].title}</h3>
                        <p className='displayNone'>{data[0].description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <Link to={`/item/${data[1].id}`}>
                        <img
                            className="d-block w-100"
                            src={data[1].pictureUrl}
                            alt={data[1].title}
                        />
                    </Link>
                    <Carousel.Caption className='backgroundDark'>
                        <h3>{data[1].title}</h3>
                        <p className='displayNone'>{data[1].description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <Link to={`/item/${data[2].id}`}>
                        <img
                            className="d-block w-100"
                            src={data[2].pictureUrl}
                            alt={data[2].title}
                        />
                    </Link>

                    <Carousel.Caption className='backgroundDark'>
                        <h3>{data[2].title}</h3>
                        <p className='displayNone'>{data[2].description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <Link to={`/item/${data[3].id}`}>
                        <img
                            className="d-block w-100"
                            src={data[3].pictureUrl}
                            alt={data[3].title}
                        />
                    </Link>

                    <Carousel.Caption className='backgroundDark'>
                        <h3>{data[3].title}</h3>
                        <p className='displayNone'>{data[3].description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider