import React, { useEffect, useRef, useState } from 'react';
import SliderCard from './SliderCard/SliderCard';




const Slider = () => {


    const carousel = useRef<HTMLDivElement>(null)
    const [imgWidth, setWidth] = useState<number>(0)



    const scrollCarousel = (direction: string) => {
        if (carousel.current) {
            console.log(imgWidth)

            carousel.current.scrollLeft += direction === 'left' ? -imgWidth : imgWidth
        }

    }


    console.log(imgWidth)


    useEffect(() => {


        const images = document.querySelectorAll<HTMLImageElement>('.carousel img')

        const handleImg = () => {
    
            setWidth(images[0].clientWidth + 20)
        }


        images.forEach((img) => {
            img.addEventListener('load', handleImg)
        })





        window.addEventListener('resize', handleImg)


        return () => {

            window.removeEventListener('resize', handleImg)
        }


    }, [])





    return (
        <div className="container">
            <div className="wrapper">
                <div className='arrow left-arrow' onClick={() => { scrollCarousel('left') }}>
                    <svg width="100%" height="100%" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.12132" y="35.3553" width="47" height="47" transform="rotate(-45 2.12132 35.3553)" stroke="#DB3138" stroke-width="3" />
                        <path d="M39 27.8555L31.5 35.3555L39 42.8555L37.5 45.8555L27 35.3555L37.5 24.8555L39 27.8555Z" fill="white" />
                    </svg>
                </div>
                <div className="carousel" ref={carousel}>
                    <SliderCard img='car1.png' desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante."} />
                    <SliderCard img='car2.png' desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante."} />
                    <SliderCard img='car3.png' desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante."} />
                    <SliderCard img='car1.png' desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante."} />
                    <SliderCard img='car2.png' desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante."} />
                    <SliderCard img='car3.png' desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante."} />
                </div>
                <div className='arrow right-arrow' onClick={() => { scrollCarousel('right') }}>
                    <svg width="100%" height="100%" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-2.12132" width="47" height="47" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 67.0894 33.8553)" stroke="#DB3138" stroke-width="3" />
                        <path d="M31.7107 27.8555L39.2107 35.3555L31.7107 42.8555L33.2107 45.8555L43.7107 35.3555L33.2107 24.8555L31.7107 27.8555Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Slider;