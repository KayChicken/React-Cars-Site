import React from 'react';
import { IArrowProps } from '../../../types';
import styles from './Arrows.module.css'

const ArrowRight : React.FC<IArrowProps> = ({settings,carousel,imgWidth}) => {

    const previewArrow = (carousel : any) => {
        if (imgWidth) {
            console.log(imgWidth)
            carousel.scrollLeft += imgWidth
        }
       
    }

    return (
        <div className={styles.arrow} style={settings} onClick={() => {previewArrow(carousel)}}>
            <svg width="100%" height="100%" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-2.12132" width="47" height="47" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 67.0894 33.8553)" stroke="#DB3138" stroke-width="3" />
                <path d="M31.7107 27.8555L39.2107 35.3555L31.7107 42.8555L33.2107 45.8555L43.7107 35.3555L33.2107 24.8555L31.7107 27.8555Z" fill="white" />
            </svg>
        </div>
    );
};

export default ArrowRight;