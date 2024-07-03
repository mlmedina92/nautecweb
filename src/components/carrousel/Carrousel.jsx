import styles from './Carrousel.module.css'
import { useState } from 'react'

import React from 'react';
// import { Container, Row, Col } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carrousel() {
    const settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        className: "center",
        centerPadding: "60px",
        slidesToShow: 2,
        cssEase: "linear",
        swipeToSlide: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={styles.carousel}>
            <Slider {...settings}>
                <div>
                    <div className={styles.image}>
                        <img
                            src="Imagenes\Home\home\carrousel\carousel-1.PNG"
                            alt="logo"
                            loading="lazy"
                            // className={styles.image}
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.image}>
                        <img
                            src="Imagenes\Home\home\carrousel\carousel-2.PNG"
                            alt="logo"
                            loading="lazy"
                            // className={styles.image}
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.image}>
                        <img
                            src="Imagenes\Home\home\carrousel\carousel-3.PNG"
                            alt="logo"
                            loading="lazy"
                            // className={styles.image}
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.image}>
                        <img
                            src="Imagenes\Home\home\carrousel\carousel-4.PNG"
                            alt="logo"
                            loading="lazy"
                            // className={styles.image}
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.image}>
                        <img
                            src="Imagenes\Home\home\carrousel\carousel-5.PNG"
                            alt="logo"
                            loading="lazy"
                            // className={styles.image}
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.image}>
                        <img
                            src="Imagenes\Home\home\carrousel\carousel-6.PNG"
                            alt="logo"
                            loading="lazy"
                            // className={styles.image}
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.image}>
                        <img
                            src="Imagenes\Home\home\carrousel\carousel-7.PNG"
                            alt="logo"
                            loading="lazy"
                            // className={styles.image}
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.image}>
                        <img
                            src="Imagenes\Home\home\carrousel\carousel-8.PNG"
                            alt="logo"
                            loading="lazy"
                            // className={styles.image}
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.image}>
                        <img
                            src="Imagenes\Home\home\carrousel\carousel-9.PNG"
                            alt="logo"
                            loading="lazy"
                            // className={styles.image}
                        />
                    </div>
                </div>
            </Slider>
        </div>
    )
}