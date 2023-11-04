import React from 'react'

const EventHandler = () => {
    const handleEvent = () => {
        console.log("clicked on button");
    }
  return (
    <div>EventHandler function <button onClick={handleEvent}>Click Event</button></div>
  )
}

export default EventHandler