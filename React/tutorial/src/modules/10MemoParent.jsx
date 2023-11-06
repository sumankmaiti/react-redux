import React, { useState } from "react";
import MemoComp from './10Memo'

const MemoParent = () => {
    const [name, setName] = useState('suman')

    setInterval(() => {
        setName('suman')
    }, 60000)

    return (
        <div>
            <MemoComp name={name} />
        </div>
    )
}

export default  MemoParent