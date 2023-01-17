import React from 'react'
import './label.css';

function Label({ label }) {
    return (
        <div className='label'><div>{label}</div></div>
    )
}

export default Label