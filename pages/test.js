import React, { useEffect, useState } from 'react'

const Test = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('1234')
        localStorage.setItem('path', 'test');
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            {count == 1 ? <button onClick={() => setCount(count + 1)}>Click me</button> : ''}
            <p>You clicked {count} times</p>
            {}
            
        </div>
    )
}

export default Test