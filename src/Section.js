import React from 'react'

export default function Section({name, children}) {
    return (
        <>
     <h2>{name}</h2>
     {children}
     </>
    );
}