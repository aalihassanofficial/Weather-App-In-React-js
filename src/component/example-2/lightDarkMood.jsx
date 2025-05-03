import React, { useState } from 'react'

const LightDarkMood = () => {
    const[light , setLight] = useState(true)

    const toggleHandler = ()=>{
          setLight(!light)
    }
    console.log("Component Render");
    
  return (
    <div>
      <h1 className='font-bold text-6xl'>{light ? "light" : "Dark"}</h1>
      <button className='p-2 rounded bg-amber-600 text-white cursor-pointer' onClick={toggleHandler}>Click</button>
    </div>
  )
}

export default LightDarkMood
