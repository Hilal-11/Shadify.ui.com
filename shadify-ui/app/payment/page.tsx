import React from 'react'

function Payment() {
    const amount = 99.99;

  return (
    <div className='flex justify-center items-center h-svh'>
        <div>
            <h1>PortfoliX</h1>
            <h2>
                has required
                <span>${amount}</span>
            </h2>
        </div>
    </div>
  )
}

export default Payment
