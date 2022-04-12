import React, { useEffect, useState } from 'react'

const liffId = process.env.NEXT_PUBLIC_LIFF_ID
const Test = () => {
    const [profile, setProfile] = useState({})

    useEffect(() => {

        localStorage.setItem('path', 'test');
        async function getData() {
            const liff = (await import('@line/liff')).default
            try {
                await liff.init({ liffId })
            }
            catch (error) {
                console.error('liff error', error.message)
            }

            if (!liff.isLoggedIn()) {

                liff.login({ redirectUri: `https://queue.diligentsoftinter.com/test` })

            }


            await liff.ready
            const profile = await liff.getProfile()
            setProfile(profile)
        }

        getData()
    }, [])
    return (
        <div>  test </div>
    )
}

export default Test