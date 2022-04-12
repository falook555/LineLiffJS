import React, { useEffect, useState } from 'react'
const Test = () => {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        // console.log(i)
        localStorage.setItem('path', 'test');
        async function getData() {
            const liff = (await import('@line/liff')).default
            await liff.ready
            const profile = await liff.getProfile()
            setProfile(profile)
        }

        console.log(profile.userId)

        getData()
    }, [])
  return (
    <div>  {profile.userId == '' ? '' : 'test'} </div>
  )
}

export default Test