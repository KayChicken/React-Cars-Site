import React from 'react';
import { IArrowProps } from '../../../types';
import styles from './Arrows.module.css'




const ArrowLeft : React.FC<IArrowProps> = ({settings,carousel, imgWidth}) => {



    
    const previewArrow = (carousel : any) => {
        if (imgWidth) {
            console.log(imgWidth)
            carousel.scrollLeft -= imgWidth
        }
        
    }

    return (
        <div className={styles.arrow} style={settings} onClick={() => {previewArrow(carousel)}}>
            <svg width="100%" height="100%" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.12132" y="35.3553" width="47" height="47" transform="rotate(-45 2.12132 35.3553)" stroke="#DB3138" stroke-width="3" />
                <path d="M39 27.8555L31.5 35.3555L39 42.8555L37.5 45.8555L27 35.3555L37.5 24.8555L39 27.8555Z" fill="white" />
            </svg>
        </div>
    );
};

export default ArrowLeft;