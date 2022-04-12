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
        }
        getData()
    }, [])
    return (

        <>
        {profile.userId == undefined ? '' : 
        
        <section>
            <h1>55555555555555555</h1>
        </section>
        }
        </>
    )
}

export default Test