import React from 'react'

async function getStaticData() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/config/footerConfig`, {
        cache: 'force-cache'
    })
    const data = await response.json()
}

export default getStaticData
