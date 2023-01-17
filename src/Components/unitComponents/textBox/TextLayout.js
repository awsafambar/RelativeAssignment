import React from 'react'
import './textLayout.css'

function TextLayout({ value }) {
    return (
        <div className='textArea'><div className='textBoxValue'>{value}</div></div>
    )
}

export default TextLayout