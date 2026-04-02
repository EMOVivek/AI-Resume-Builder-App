import React, { useState } from 'react'
import Demo1 from './Demo1';

const Demo2 = () => {
    const [name, setName] = useState('Kriti')
    return (
        <>
            <Demo1 user={name} />
            <div>Vivek </div>

        </>
    )
}

export default Demo2;