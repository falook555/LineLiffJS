import React, { useEffect, useState } from 'react'
const Test = () => {
    const [profile, setProfile] = useState({})

    useEffect(() => {

        localStorage.setItem('path', 'test');

        async function getData() {
            const liff = (await import('@line/liff')).default
            await liff.ready
            const profile = await liff.getProfile()
            setProfile(profile)

            if (!liff.isLoggedIn()) {
                liff.login()
            }
        }
        getData()
    }, [])
    return (
        <div> test</div>
    )
}

export default Test