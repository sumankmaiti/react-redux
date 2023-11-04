import React, { useState } from "react";

import ChildComponent from "./5MethodAsPropsChild";

const ParentComponent = () => {
    const [name, setName] = useState('')
 
    return (
        <div>
            this is parent with name set by child is: {name}
            <ChildComponent setName={setName} />
        </div>
        
    )
}

export default ParentComponent