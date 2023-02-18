import React from 'react';
import Katie from '../images/katie.png';
import Star from '../images/Star.png';

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt='Katie Image' className='card--img' />
        <div className='card--stats'>
            <img src={Star} className="card--star"/>
            <span>{props.rating}</span>
            <span className='gray'>({props.reviewCount}) &#x2022; </span>
            <span className='gray'>{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  );
};

export default Card;