'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'

const Facebook = () => {
    const router = useRouter()
    // const handleBackHome = () => {
    //     router.push('/')
    // }

    return (
        <>
            <Button variant='primary' onClick={() => router.push('/')} >Back Home</Button>

            <div>Facebook page</div>
        </>
    )
}

export default Facebook