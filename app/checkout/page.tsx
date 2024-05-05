import CheckoutInfo from '@/components/Checkout/Info'
import CheckoutSummary from '@/components/Checkout/Summary'
import React from 'react'

function Checkout() {
    return (
        <div className='flex w-full flex-wrap'>
            {/* CheckoutInfo */}
            <CheckoutInfo />
            <CheckoutSummary />
            {/* CheckoutSummary */}
        </div>
    )
}

export default Checkout