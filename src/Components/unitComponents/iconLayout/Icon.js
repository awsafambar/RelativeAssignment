import React from 'react'
import './icon.css'

function Icon({ src, color }) {
    let root = document.documentElement;
    console.log("color", { color })
    root.style.setProperty('--color', color);
    return (
        <div className='iconBlock'>
            <div className="iconOuterCircle">
                <img src={`/assets/${src}`} className='iconInnerCircle' />
            </div>
        </div>
    )
}

export default Icon