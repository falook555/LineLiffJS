import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const liffId = process.env.NEXT_PUBLIC_LIFF_ID

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        const router = useRouter()
        const fetchData = async () => {
            const liff = (await import('@line/liff')).default

            try {
                await liff.init({ liffId })
            }
            catch (error) {
                console.error('liff error', error.message)
            }

            if (!liff.isLoggedIn()) {
                liff.login()
            } else {
                let path = localStorage.getItem('path')
                if (path == 'test') {
                    router.push('/test')
                } else {
                    router.push('/')
                }
            }
        }
        fetchData()
    }, [])

    return <Component {...pageProps} />
}

export default MyApp
