import React from 'react'

export default function Weather({temperature, airHumidity, img, alt}) {
    return (
        <>
     <p>{temperature}</p>
    <p>{airHumidity}</p>
    <img src={img} alt={alt}/>
     </>
    );
}