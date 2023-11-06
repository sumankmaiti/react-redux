import React from "react"


const MemoComp = ({name}) => {
    console.log("memo called.");

    return (
        <div>from memo {name}</div>
    )
}

export default React.memo(MemoComp)