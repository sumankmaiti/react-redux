import React from "react"

const ChildComponent = (props) => {
    const {setName} = props

    return (
        <div>
            <button onClick={() => setName("Child")}>SET</button>
        </div>
    )
}

export default ChildComponent