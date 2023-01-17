import React from 'react'
import Label from '../../unitComponents/label/Label'
import PopularPair from '../../unitComponents/popularPairLayout/PopularPair'
import TextLayout from '../../unitComponents/textBox/TextLayout'
import './cardLayout.css'
// import PropTypes from 'prop-types'




function CardLayout({ coin }) {
    console.log("CardLayout", { coin })

    return (
        <div className="container">
            <div className="half-circle"></div>
            <div className='coin'> <Label label={coin?.name} /></div>
            <TextLayout value={coin.price} />
            <span className={coin.market === 'up' ? 'priceMeterUp' : 'priceMeterDown'}>{coin.percent}</span>
            <Label label={'Price'} />
            <TextLayout value={coin.tvl} />
            <div className='tvlLabel'><Label label={'TVL'} /></div>
            <PopularPair arr={coin.popularpairs} />
            <div className='tvlLabel'><Label label={'Popular Pairs'} /></div>
        </div>

    )
}

// Card.propTypes = {}

export default CardLayout
