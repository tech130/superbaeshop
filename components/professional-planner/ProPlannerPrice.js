import React from 'react'
import { CartButton } from '../styled/Button'
import { H2 } from '../styled/Headings'
import Txt from '../styled/Txt'

const ProPlannerPrice = () => {
    return (
        <>
            <H2 mb="15px" weight={700}>
                <Txt color="#777777">
                    Priced just right at
                </Txt>{" "}
                ₹854
            </H2>
            <CartButton>Add to cart</CartButton>
        </>
    )
}

export default ProPlannerPrice
