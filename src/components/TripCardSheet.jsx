import React from 'react'
import './tripCardSheet.css'

const TripCardSheet = (props) => {
    return (
        <div className='tripCard'>
        <div className='tripCardTop'>
         <img src={props.pic}  alt='pic'/>  </div> 
        <div className='tripCardBottom'>
        <h2>{props.place}</h2>
        
        <h5>{props.distance} kilometers away</h5></div> 
      </div>
    )
}

export default TripCardSheet
