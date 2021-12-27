import React from 'react';
import './HomeCard.css'

function HomeCard({ src, title, description, price }) {
    return (
        <div className='homeCard'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default HomeCard