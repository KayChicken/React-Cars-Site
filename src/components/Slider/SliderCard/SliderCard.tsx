import React from 'react';


interface SliderCardProps {
    img?: string,
    desc?: string
}

const SliderCard: React.FC<SliderCardProps> = ({ img, desc }) => {
    return (
        <div className='img-container'>
            <img src={require(`../../../img/cars/${img}`)} alt="" />
            <div className='img-desc'>
               <div className='img__description'>{desc}</div>
            </div>
        </div>
    );
};

export default SliderCard;