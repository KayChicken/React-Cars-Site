import React, { useEffect, useRef, useState } from 'react';
import styles from './SingleSlider.module.css'
import ArrowLeft from './Arrows/ArrowLeft';
import ArrowRight from './Arrows/ArrowRight';

interface SingleSliderProps {
    desc?: string,
    img?: string[]
}


const SingleSlider: React.FC<SingleSliderProps> = ({ desc, img }) => {


    const carousel = useRef<HTMLDivElement>(null)
    const [imgWidth, setImgWidth] = useState<number>()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);



    useEffect(() => {
        const images = document.querySelectorAll<HTMLImageElement>(`.${styles.img}`);




        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            handleImageLoad()
        };


        const handleImageLoad = () => {
            setImgWidth(images[0].clientWidth);
        };


        window.addEventListener('resize', handleResize);

        images.forEach((image) => {
            image.addEventListener('load', handleImageLoad);
        });

        return () => {

            images.forEach((image) => {
                image.removeEventListener('load', handleImageLoad);
                window.removeEventListener('resize', handleResize);
            });
        };
    }, []);







    return (
        <div className={styles.container}>
            <div ref={carousel} className={styles.imgContainer}>
                {img?.map((item) => (
                    <img src={require(`../../img/singlSliderCars/${item}`)} alt="" className={styles.img} />
                )
                )}

            </div>
            <div className={styles.bottomContainer}>
                <ArrowLeft  carousel={carousel.current} imgWidth={imgWidth} />
                <div className={styles.desc}>{desc}</div>
                <ArrowRight carousel={carousel.current} imgWidth={imgWidth} />
            </div>

        </div>
    );
};

export default SingleSlider;