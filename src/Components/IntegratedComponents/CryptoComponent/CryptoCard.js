import React from 'react'
import Card from '../cardLayout/CardLayout'
import Icon from '../../unitComponents/iconLayout/Icon'

import './cryptoCards.css';


function CryptoCard({ coin }) {
    return (
        <div className='cryptocards'>
            <Icon src={coin?.icon} color={coin?.color} />
            <Card coin={coin} />
        </div>
    )
}

export default CryptoCard