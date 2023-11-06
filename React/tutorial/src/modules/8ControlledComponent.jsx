import React, { useState } from "react";

const ControlledComponent = () => {
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
        event.preventDefault()
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <label> {name} </label>
        </div>
    )
}

export default ControlledComponent