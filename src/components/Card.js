import React from 'react';
import Star from '../images/Star.png';

const Card = (props) => {
  let badgeText
  if(props.item.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online"){
    badgeText = "ONLINE"
  }


  return (
    <div className='card'>
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.item.coverImg} alt='Katie Image' className='card--img' />
        <div className='card--stats'>
            <img src={Star} className="card--star"/>
            <span>{props.item.stats.rating}</span>
            <span className='gray'>({props.item.stats.reviewCount}) &#x2022; </span>
            <span className='gray'>{props.item.location}</span>
        </div>
        <p className="card--title">{props.item.title}</p>
        <p className="card--price"><span className='bold'>From ${props.item.price}</span> / person</p>
    </div>
  );
};

export default Card;