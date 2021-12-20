import React from 'react'
import './TripCard.css'
import TripCardSheet from './TripCardSheet'

const TripCard = () => {
    return (
        
        <div className='tripCardContainer'>
           <TripCardSheet pic='https://upload.wikimedia.org/wikipedia/commons/a/ad/Munnar_hillstation_kerala.jpg' place='munnar' distance='92' />
           <TripCardSheet/>
           <TripCardSheet/>
           <TripCardSheet/>
        </div>
    )
}

export default TripCard
